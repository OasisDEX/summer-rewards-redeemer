import {
  AjnaRewardsPositionType,
  AjnaRewardsSource,
  AjnaRewardsWeeklyClaim,
  Prisma,
  PrismaPromise,
  prisma,
} from "database";
import chalk from "chalk";
import { ethers } from "ethers";
import MerkleTree from "merkletreejs";

import { config } from "common/config";
import { UserSnapshot, PositionSnapshot } from "common/types";

export async function processWeeklySnapshotInDb(
  snapshot: UserSnapshot,
  currentWeek: number,
  root: string,
  tree: MerkleTree
) {
  await prisma.$transaction(async () => {
    try {
      console.info(chalk.gray(`Adding week #${currentWeek} to the db. Chain ID: ${config.chainId}`));
      await prisma.ajnaRewardsMerkleTree.create({
        data: {
          tree_root: root,
          week_number: Number(currentWeek),
          chain_id: config.chainId,
          source: AjnaRewardsSource.core,
        },
      });
    } catch (error: unknown) {
      const prismaError = error as Prisma.PrismaClientKnownRequestError;
      if (prismaError?.code === "P2002") {
        console.error(`Root already added for week ${currentWeek}. Chain ID: ${config.chainId}`);
      } else {
        throw error;
      }
    }
    const snapshotEntries: PrismaPromise<AjnaRewardsWeeklyClaim>[] = snapshot.map((entry) => {
      const leaf = ethers.utils.solidityKeccak256(
        ["address", "uint256"],
        [entry.userAddress.toLowerCase(), entry.amount]
      );
      const proof = tree.getHexProof(leaf);
      // upser is used in case there were no daily entires for some reason and we do only need to create a final weekly entry
      return prisma.ajnaRewardsWeeklyClaim.upsert({
        where: {
          week_number_userAddress_chain_id_source_unique_id: {
            week_number: currentWeek,
            user_address: entry.userAddress.toLowerCase(),
            chain_id: config.chainId,
            source: AjnaRewardsSource.core,
          },
        },
        create: {
          user_address: entry.userAddress.toLowerCase(),
          amount: entry.amount.toString(),
          week_number: currentWeek,
          chain_id: config.chainId,
          source: AjnaRewardsSource.core,
          proof,
        },
        update: {
          amount: entry.amount.toString(),
          proof,
        },
      });
    });

    console.info(
      chalk.gray(`Adding ${snapshotEntries.length} snapshot entries to the db. Chain ID: ${config.chainId}`)
    );
    try {
      await prisma.$transaction(snapshotEntries);
    } catch (error) {
      console.error(error);
      throw new Error("Error adding snapshot entries to the db");
    }
  });
}

export async function processDailySnapshotInDb(snapshot: PositionSnapshot, currentDay: number): Promise<void> {
  const currentWeek = Math.floor(currentDay / 7);
  const weeklyClaimEntriesTx: PrismaPromise<AjnaRewardsWeeklyClaim>[] = [];
  console.info(chalk.gray(`Adding day #${currentDay} to the db`));
  await Promise.all(
    snapshot.map(async (entry) => {
      // Check if a weekly claim already exists for the current week and user address
      const existingWeeklyClaim = await prisma.ajnaRewardsWeeklyClaim.findUnique({
        where: {
          week_number_userAddress_chain_id_source_unique_id: {
            week_number: currentWeek,
            user_address: entry.userAddress.toLowerCase(),
            chain_id: config.chainId,
            source: AjnaRewardsSource.core,
          },
        },
      });
      // Check if a daily claim already exists for the current day and user address and was processed
      const existingDailyClaim = await prisma.ajnaRewardsDailyClaim.findUnique({
        where: {
          day_number_account_address_chain_id_source_type_unique_id: {
            day_number: currentDay,
            account_address: entry.accountAddress.toLowerCase(),
            chain_id: config.chainId,
            source: AjnaRewardsSource.core,
            type: entry.positionType,
          },
        },
      });
      if (existingWeeklyClaim && !existingDailyClaim) {
        // If a weekly claim exists but a daily claim does not, update the weekly claim with the new amount = old amount + daily amount
        weeklyClaimEntriesTx.push(
          prisma.ajnaRewardsWeeklyClaim.update({
            where: {
              week_number_userAddress_chain_id_source_unique_id: {
                week_number: currentWeek,
                user_address: entry.userAddress.toLowerCase(),
                chain_id: config.chainId,
                source: AjnaRewardsSource.core,
              },
            },
            data: {
              amount: ethers.BigNumber.from(existingWeeklyClaim.amount).add(entry.amount).toString(),
            },
          })
        );
      } else if (!existingWeeklyClaim) {
        // If a weekly claim does not exist, create a new weekly claim with the amount and empty proof
        weeklyClaimEntriesTx.push(
          prisma.ajnaRewardsWeeklyClaim.create({
            data: {
              user_address: entry.userAddress.toLowerCase(),
              amount: entry.amount.toString(),
              week_number: currentWeek,
              proof: [],
              chain_id: config.chainId,
              source: AjnaRewardsSource.core,
            },
          })
        );
      }
    })
  );

  // Map the snapshot array to daily claim entries
  const dailyClaimEntries = snapshot.map((entry) => ({
    user_address: entry.userAddress.toLowerCase(),
    account_address: entry.accountAddress.toLowerCase(),
    amount: entry.amount.toString(),
    day_number: currentDay,
    week_number: currentWeek,
    chain_id: config.chainId,
    source: AjnaRewardsSource.core,
    type: entry.positionType,
  }));
  console.info(
    chalk.gray(`Adding ${dailyClaimEntries.length} daily claim entries to the database. Chain ID: ${config.chainId}`)
  );
  // Execute the database transactions
  const res = await prisma.$transaction([
    ...weeklyClaimEntriesTx,
    prisma.ajnaRewardsDailyClaim.createMany({
      data: dailyClaimEntries,
      skipDuplicates: true,
    }),
  ]);

  console.info(
    //@ts-ignore
    chalk.gray(`Added ${res[res.length - 1].count} daily claim entries to the database. Chain ID: ${config.chainId}`)
  );
}
