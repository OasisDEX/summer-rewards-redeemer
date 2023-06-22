import { Prisma, PrismaClient } from "@prisma/client";
import { ethers } from "hardhat";
import { Snapshot } from "../common/types";
import MerkleTree from "merkletreejs";
export const prisma = new PrismaClient();

export async function processDb(snapshot: Snapshot, currentWeek: number, root: string, tree: MerkleTree) {
  try {
    await prisma.ajnaRewardsMerkleTree.create({ data: { tree_root: root, week_number: Number(currentWeek) } });
  } catch (error: unknown) {
    const prismaError = error as Prisma.PrismaClientKnownRequestError;
    if (prismaError?.code === "P2002") {
    } else {
      throw error;
    }
  }
  snapshot.forEach(async (element) => {
    const leaf = ethers.utils.solidityKeccak256(["address", "uint256"], [element.address, element.amount]);
    const proof = tree.getHexProof(leaf);
    try {
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
