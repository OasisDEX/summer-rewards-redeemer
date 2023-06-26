import { Prisma } from "@prisma/client";
import chalk from "chalk";
import { ethers } from "hardhat";
import MerkleTree from "merkletreejs";

import { prisma } from "../../prisma/client";
import { Snapshot } from "../common/types";

export async function processWeeklySnapshotInDb(
  snapshot: Snapshot,
  currentWeek: number,
  root: string,
  tree: MerkleTree
) {
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
  const snapshotEntries: Prisma.AjnaRewardsWeeklyClaimCreateManyInput[] = snapshot.map((entry) => {
    const leaf = ethers.utils.solidityKeccak256(["address", "uint256"], [entry.address, entry.amount]);
    const proof = tree.getHexProof(leaf);

    return {
      user_address: entry.address,
      amount: entry.amount.toString(),
      week_number: currentWeek,
      proof,
    };
  });

  console.log(chalk.gray(`Adding ${snapshotEntries.length} snapshot entries to the db`));
  await prisma.ajnaRewardsWeeklyClaim.createMany({
    data: snapshotEntries,
    skipDuplicates: true,
  });
}

export async function processDailySnapshotInDb(snapshot: Snapshot, currentDay: number) {
  const snapshotEntries: Prisma.AjnaRewardsDailyClaimCreateManyInput[] = snapshot.map((entry) => ({
    user_address: entry.address,
    amount: entry.amount.toString(),
    day_number: currentDay,
  }));
  console.log(chalk.gray(`Adding ${snapshotEntries.length} snapshot entries to the database`));
  await prisma.ajnaRewardsDailyClaim.createMany({
    data: snapshotEntries,
    skipDuplicates: true,
  });
}
