import { PrismaClient } from "@prisma/client";
import { BigNumber } from "ethers";
import fs from "fs";
import { ethers, network } from "hardhat";

import { addresses } from "../common/config";
import { createMerkleTree } from "../common/helpers";
import { dummyProcessedSnaphot } from "../common/test-data";

const prisma = new PrismaClient();

const useTestData = false;

const inputFile = fs.readFileSync("./claims.json").toString();
const parsedInputFile = JSON.parse(inputFile);

let snapshot: { address: string; amount: BigNumber }[] = [];

if (useTestData) {
  snapshot = dummyProcessedSnaphot;
} else {
  for (const [key, value] of Object.entries(parsedInputFile)) {
    snapshot.push({ address: key, amount: BigNumber.from(value) });
  }
}
const { tree, root } = createMerkleTree(snapshot);

let totalWeekAmount = snapshot.reduce((acc, cur) => acc.add(cur.amount), BigNumber.from(0));

async function main() {
  const AjnaRedeemerFactory = await ethers.getContractFactory("AjnaRedeemer");
  const AjnaTokenFactory = await ethers.getContractFactory("AjnaToken");

  const ajnaToken = AjnaTokenFactory.attach(
    network.name === "mainnet" ? addresses.ajnaToken.mainnet : addresses.ajnaToken.goerli
  );
  const ajnaRedeemer = AjnaRedeemerFactory.attach(
    network.name === "mainnet" ? addresses.ajnaRedeemer.mainnet : addresses.ajnaRedeemer.goerli
  );

  console.log(`AJNA TOKEN ADDRESS   : ${ajnaToken.address} on ${network.name}`);
  console.log(`AJNA REDEEMER ADDRESS: ${ajnaRedeemer.address} on ${network.name}`);

  await (await ajnaToken.approve(ajnaRedeemer.address, totalWeekAmount)).wait();
  const currentWeek = (await ajnaRedeemer.getCurrentWeek()) as unknown as number;
  console.log(`CURRENT WEEK: ${currentWeek}`);

  // add weekly root to the contract and the database
  await (await ajnaRedeemer.addRoot(Number(currentWeek), root, totalWeekAmount)).wait();
  try {
    await prisma.merkleTree.create({ data: { tree_root: root, week_number: Number(currentWeek) } });
  } catch (error) {
    console.log(error);
  }
  // for each user get current total, increment with weekly claim amount and add weekly claim
  snapshot.forEach(async (element) => {
    const leaf = ethers.utils.solidityKeccak256(["address", "uint256"], [element.address, element.amount]);
    const proof = tree.getHexProof(leaf);
    try {
      await prisma.weeklyClaim.create({
        data: {
          week_number: Number(currentWeek),
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

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
