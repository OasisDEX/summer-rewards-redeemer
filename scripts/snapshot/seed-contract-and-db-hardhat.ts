import { PrismaClient, User } from "@prisma/client";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { MerkleTree } from "merkletreejs";

import { deployContract } from "../common/helpers";
import { dummyProcessedSnaphot } from "../common/test-data";

const prisma = new PrismaClient();

const inputDb = dummyProcessedSnaphot.map((user) =>
  ethers.utils.solidityKeccak256(["address", "uint256"], [user.address, user.amount])
);

const tree = new MerkleTree(inputDb, ethers.utils.keccak256, {
  sortLeaves: true,
  sortPairs: true,
});
const root = tree.getHexRoot();

// all rewards for a given week
const totalWeekAmount = dummyProcessedSnaphot.reduce((acc, cur) => acc.add(cur.amount), BigNumber.from(0));
async function main() {
  const [owner] = await ethers.getSigners();
  const ajnaToken = await deployContract("AjnaToken", []);
  const ajnaRedeemer = await deployContract("AjnaRedeemer", [
    ajnaToken.address,
    owner.getAddress(),
    owner.getAddress(),
  ]);

  console.log(`AJNA TOKEN ADDRESS   : ${ajnaToken.address}`);
  console.log(`AJNA REDEEMER ADDRESS: ${ajnaRedeemer.address}`);

  // how many weeks will be seeded - same weekly  data
  const WEEKS_COUNT = 4;

  await ajnaToken.mint(owner.getAddress(), totalWeekAmount.mul(10));
  await ajnaToken.approve(ajnaRedeemer.address, totalWeekAmount.mul(1000));
  const currentWeek = (await ajnaRedeemer.getCurrentWeek()) as number;
  console.log(`CURRENT WEEK: ${currentWeek}`);

  // add the users from the snapshot to the db
  // use addMany with dup check instead of the error handling ?
  const seedUserList = dummyProcessedSnaphot.map((user) => ({
    address: user.address,
    total_amount: ethers.BigNumber.from("0").toString(),
    accepted: true,
  }));

  for (const entry of seedUserList) {
    try {
      await prisma.user.create({ data: entry });
    } catch (error) {
      console.log(error);
    }
  }

  // add the weekly roots and weekly claims for all the users from the list
  for (let i = 0; i < WEEKS_COUNT; i++) {
    await (await ajnaRedeemer.addRoot(Number(currentWeek) + i, root, totalWeekAmount)).wait();
    try {
      await prisma.merkleTree.create({ data: { tree_root: root, week_number: Number(currentWeek) + i } });
    } catch (error) {
      console.log(error);
    }

    dummyProcessedSnaphot.forEach(async (element) => {
      const leaf = ethers.utils.solidityKeccak256(["address", "uint256"], [element.address, element.amount]);
      const proof = tree.getHexProof(leaf);
      try {
        await prisma.weeklyClaim.create({
          data: {
            week_number: Number(currentWeek) + i,
            user_address: element.address,
            proof: proof,
            amount: element.amount.toString(),
          },
        });
      } catch (error) {
        console.log(error);
      }
    });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
