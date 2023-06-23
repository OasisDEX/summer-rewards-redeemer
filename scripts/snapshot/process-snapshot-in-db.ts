import { Prisma, PrismaClient } from "@prisma/client";
import { ethers } from "hardhat";
import { Snapshot } from "../common/types";
import MerkleTree from "merkletreejs";
import chalk from "chalk";
export const prisma = new PrismaClient();

export async function processWeeklyDb(snapshot: Snapshot, currentWeek: number, root: string, tree: MerkleTree) {
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
  snapshot.forEach(async (element) => {
    const leaf = ethers.utils.solidityKeccak256(["address", "uint256"], [element.address, element.amount]);
    const proof = tree.getHexProof(leaf);

    try {
      console.log(chalk.gray(`Adding claims for user ${element.address} for week ${currentWeek}`));
      await prisma.ajnaRewardsWeeklyClaim.create({
        data: {
          week_number: Number(currentWeek),
          user_address: element.address,
          proof: proof,
          amount: element.amount.toString(),
        },
      });
    } catch (error: unknown) {
      const prismaError = error as Prisma.PrismaClientKnownRequestError;

      if (prismaError?.code === "P2002") {
        console.error(`User ${element.address} claim already created for week ${currentWeek}`);
      } else {
        throw error;
      }
    }
  });
}

export async function processDailyDb(snapshot: Snapshot, currentDay: number) {
  snapshot.forEach(async (element) => {
    try {
      console.log(chalk.gray(`Adding claims for user ${element.address} for day ${currentDay}`));
      await prisma.ajnaRewardsDailyClaim.create({
        data: {
          day_number: Number(currentDay),
          user_address: element.address,
          amount: element.amount.toString(),
        },
      });
    } catch (error: unknown) {
      const prismaError = error as Prisma.PrismaClientKnownRequestError;

      if (prismaError?.code === "P2002") {
        console.error(`User ${element.address} claim already created for day ${currentDay}`);
      } else {
        throw error;
      }
    }
  });
}
