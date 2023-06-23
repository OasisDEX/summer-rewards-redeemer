import { PrismaClient } from "@prisma/client";
import { BigNumber, ethers } from "ethers";
import { config } from "../common/config";
import { createMerkleTree, getContract, getOrDeployContract, impersonate, setTokenBalance } from "../common/helpers";
import { BASE_WEEKLY_AMOUNT, dummyProcessedSnaphot } from "../common/test-data";
import { AjnaDripper, AjnaRedeemer, AjnaToken } from "../../typechain-types";
import { addresses } from "../common/config";
import { calculateWeeklySnapshot } from "./get-weekly-snapshot";
import { EthersError, Snapshot } from "../common/types";
import chalk from "chalk";
const fs = require("fs");

const prisma = new PrismaClient();
const dataDir = "./scripts/snapshot/test-data";

// all rewards for a given week
const totalWeekAmount = dummyProcessedSnaphot.reduce((acc, cur) => acc.add(cur.amount), BigNumber.from(0));
async function main() {
  const files = fs.readdirSync(dataDir).filter((file: any) => /^weekly-data-\d+.json$/.test(file));
  const weekIds = files.map((file: any) => parseInt(file.match(/\d+/)[0]));
  const data = files.map((file: any) => JSON.parse(fs.readFileSync(`${dataDir}/${file}`, "utf8")));
  const ajnaToken = await getOrDeployContract<AjnaToken>("AjnaToken", []);
  const ajnaDripper = await getOrDeployContract<AjnaDripper>("AjnaDripper", [
    addresses[config.network]["ajnaToken"],
    addresses[config.network]["admin"],
  ]);
  const ajnaRedeemer = await getOrDeployContract<AjnaRedeemer>("AjnaRedeemer", [
    addresses[config.network]["ajnaToken"],
    addresses[config.network]["operator"],
    ajnaDripper.address,
  ]);

  const operator = await impersonate(addresses[config.network].operator);
  const admin = await impersonate(addresses[config.network].admin);

  await setTokenBalance(ajnaDripper.address, ajnaToken.address, BASE_WEEKLY_AMOUNT.mul(5));
  await (await ajnaDripper.connect(admin).changeRedeemer(ajnaRedeemer.address, BASE_WEEKLY_AMOUNT)).wait();
  await (await ajnaToken.connect(operator).approve(ajnaRedeemer.address, totalWeekAmount)).wait();

  // add the weekly roots and weekly claims for all the users from the list
  for (let i = 0; i < files.length; i++) {
    console.log(chalk.dim(`Processing week ${weekIds[i]}`));
    const result = calculateWeeklySnapshot(data[i], weekIds[i]);
    const s: Snapshot = result.map((user) => ({
      address: user.address,
      amount: BigNumber.from(user.amount),
    }));
    if (s.length === 0) {
      console.log(chalk.dim(`No claims for week ${weekIds[i]}`));
      continue;
    }
    const { root, tree } = createMerkleTree(s);
    try {
      await (await ajnaRedeemer.connect(operator).addRoot(Number(weekIds[i]), root)).wait();
    } catch (error: unknown) {
      const ethersError = error as EthersError;
      if (
        ethersError.reason ==
        "VM Exception while processing transaction: reverted with reason string 'redeemer/invalid-week'"
      ) {
        throw new Error(`Week ${weekIds[i]} earlier than deployment week`);
      }
    }

    try {
      await prisma.ajnaRewardsMerkleTree.create({ data: { tree_root: root, week_number: Number(weekIds[i]) } });
    } catch (error) {
      console.log(error);
    }

    s.forEach(async (element) => {
      console.log(chalk.dim(`Adding weekly claim for ${element.address} for week ${weekIds[i]}`));
      const leaf = ethers.utils.solidityKeccak256(["address", "uint256"], [element.address, element.amount]);
      const proof = tree.getHexProof(leaf);
      try {
        await prisma.ajnaRewardsWeeklyClaim.create({
          data: {
            week_number: weekIds[i],
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
