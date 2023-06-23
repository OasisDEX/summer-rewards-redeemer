import { BigNumber } from "ethers";
import { createMerkleTree, getContract, getOrDeployContract, impersonate, setTokenBalance } from "../common/helpers";
import { Snapshot } from "../common/types";
import { getWeeklySnapshot } from "./get-weekly-snapshot";
import { processDb } from "./process-weekly-snapshot-in-db";
import { config } from "../common/config";
import { AjnaDripper, AjnaRedeemer, AjnaToken } from "../../typechain-types";
import { addresses } from "../common/config";
import { BASE_WEEKLY_AMOUNT } from "../common/test-data";
import { network } from "hardhat";
import chalk from "chalk";

export async function processWeeklyClaims(weekId = 0) {
  if (weekId === 0) {
    weekId = (
      await (await getContract<AjnaRedeemer>("AjnaRedeemer", addresses[config.network].ajnaRedeemer)).getCurrentWeek()
    ).toNumber();
  }
  const snapshot: Snapshot = (await getWeeklySnapshot(weekId)).map((entry) => ({
    address: entry.address,
    amount: BigNumber.from(entry.amount),
  }));
  const { tree, root } = createMerkleTree(snapshot);
  let totalWeekAmount = snapshot.reduce((acc, cur) => acc.add(cur.amount), BigNumber.from(0));

  await processDb(snapshot, weekId, root, tree);
  await processTransaction(weekId, totalWeekAmount, root);
}

async function processTransaction(weekId: number, totalWeekAmount: BigNumber, root: string) {
  const ajnaToken = await getContract<AjnaToken>("AjnaToken", addresses[config.network].ajnaToken);
  let ajnaDripper = await getOrDeployContract<AjnaDripper>("AjnaDripper", [
    addresses[config.network]["ajnaToken"],
    addresses[config.network]["admin"],
  ]);
  let ajnaRedeemer = await getOrDeployContract<AjnaRedeemer>("AjnaRedeemer", [
    addresses[config.network]["ajnaToken"],
    addresses[config.network]["operator"],
    ajnaDripper.address,
  ]);
  console.log(
    `AJNA TOKEN ADDRESS   : ${chalk.green(ajnaToken.address)} on ${chalk.green(
      network.name
    )} using addresses from ${chalk.green(config.network)}`
  );
  console.log(
    `AJNA REDEEMER ADDRESS: ${chalk.green(ajnaRedeemer.address)} on ${chalk.green(
      network.name
    )} using addresses from ${chalk.green(config.network)}`
  );
  console.log(`CURRENT WEEK: ${chalk.green(weekId)}`);

  if (network.name === "hardhat") {
    try {
      const operator = await impersonate(addresses[config.network].operator);
      const admin = await impersonate(addresses[config.network].admin);

      await setTokenBalance(ajnaDripper.address, ajnaToken.address, BASE_WEEKLY_AMOUNT);
      await (await ajnaDripper.connect(admin).changeRedeemer(ajnaRedeemer.address, BASE_WEEKLY_AMOUNT)).wait();
      await (await ajnaToken.connect(operator).approve(ajnaRedeemer.address, totalWeekAmount)).wait();
      await (await ajnaRedeemer.connect(operator).addRoot(Number(weekId), root)).wait();
    } catch (error) {
      console.error(error);
    }
  }
  if (!config.dryRun) await (await ajnaToken.approve(ajnaRedeemer.address, totalWeekAmount)).wait();
  if (!config.dryRun) await (await ajnaRedeemer.addRoot(Number(weekId), root)).wait();
}
