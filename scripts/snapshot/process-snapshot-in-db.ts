import { AjnaRewardsWeeklyClaim, Prisma, PrismaPromise } from "@prisma/client";
import chalk from "chalk";
import { ethers } from "ethers";
import MerkleTree from "merkletreejs";

import { prisma } from "../../prisma/client";
import { Snapshot } from "../common/types";

export async function processWeeklySnapshotInDb(
  snapshot: Snapshot,
  currentWeek: number,
  root: string,
  tree: MerkleTree
) {
  await prisma.$transaction(async () => {
    try {
      console.log(chalk.gray(`Adding week #${currentWeek} to the db`));
      await prisma.ajnaRewardsMerkleTree.create({
        data: { tree_root: root, week_number: Number(currentWeek) },
      });
    } catch (error: unknown) {
      const prismaError = error as Prisma.PrismaClientKnownRequestError;
      if (prismaError?.code === "P2002") {
        console.error(`Root already added for week ${currentWeek}`);
      } else {
        throw error;
      }
    }
    const snapshotEntries: PrismaPromise<AjnaRewardsWeeklyClaim>[] = snapshot.map((entry) => {
      const leaf = ethers.utils.solidityKeccak256(["address", "uint256"], [entry.address, entry.amount]);
      const proof = tree.getHexProof(leaf);
      // upser is used in case there were no daily entires for some reason and we do only need to create a final weekly entry
      return prisma.ajnaRewardsWeeklyClaim.upsert({
        where: {
          week_number_userAddress_unique_id: {
            week_number: currentWeek,
            user_address: entry.address,
          },
        },
        create: {
          user_address: entry.address,
          amount: entry.amount.toString(),
          week_number: currentWeek,
          proof,
        },
        update: {
          amount: entry.amount.toString(),
          proof,
        },
      });
    });

    console.log(chalk.gray(`Adding ${snapshotEntries.length} snapshot entries to the db`));
    try {
      await prisma.$transaction(snapshotEntries);
    } catch (error) {
      console.error(error);
      throw new Error("Error adding snapshot entries to the db");
    }
  });
}

export async function processDailySnapshotInDb(snapshot: Snapshot, currentDay: number): Promise<void> {
  const currentWeek = Math.floor(currentDay / 7);

  await prisma.$transaction(async () => {
    const tx: PrismaPromise<AjnaRewardsWeeklyClaim>[] = [];
    await Promise.all(
      snapshot.map(async (entry) => {
        // Check if a weekly claim already exists for the current week and user address
        const existingWeeklyClaim = await prisma.ajnaRewardsWeeklyClaim.findUnique({
          where: {
            week_number_userAddress_unique_id: {
              week_number: currentWeek,
              user_address: entry.address,
            },
          },
        });
        // Check if a daily claim already exists for the current day and user address and was processed
        const existingDailyClaim = await prisma.ajnaRewardsDailyClaim.findUnique({
          where: {
            day_number_userAddress_unique_id: {
              day_number: currentDay,
              user_address: entry.address,
            },
          },
        });

        if (existingWeeklyClaim && !existingDailyClaim) {
          // If a weekly claim exists but a daily claim does not, update the weekly claim with the new amount = old amount + daily amount
          tx.push(
            prisma.ajnaRewardsWeeklyClaim.update({
              where: {
                week_number_userAddress_unique_id: {
                  week_number: currentWeek,
                  user_address: entry.address,
                },
              },
              data: {
                amount: ethers.BigNumber.from(existingWeeklyClaim.amount).add(entry.amount).toString(),
              },
            })
          );
        } else if (!existingWeeklyClaim) {
          // If a weekly claim does not exist, create a new weekly claim with the amount and empty proof
          tx.push(
            prisma.ajnaRewardsWeeklyClaim.create({
              data: {
                user_address: entry.address,
                amount: entry.amount.toString(),
                week_number: currentWeek,
                proof: [],
              },
            })
          );
        }
      })
    );
    // Execute the database transactions
    await prisma.$transaction(tx);

    // Map the snapshot array to daily claim entries
    const dailyClaimEntries = snapshot.map((entry) => ({
      user_address: entry.address,
      amount: entry.amount.toString(),
      day_number: currentDay,
      week_number: currentWeek,
    }));
    console.log(chalk.gray(`Adding ${dailyClaimEntries.length} daily claim entries to the database`));

    // Create daily claim entries in the database
    const res = await prisma.ajnaRewardsDailyClaim.createMany({
      data: dailyClaimEntries,
      skipDuplicates: true,
    });
    console.log(chalk.gray(`Added ${res.count} daily claim entries to the database`));
  });
}
