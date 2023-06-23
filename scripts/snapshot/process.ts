import { BigNumber } from "ethers";
import { createMerkleTree, getContract, impersonate, setTokenBalance } from "../common/helpers";
import { Snapshot } from "../common/types";
import { getWeeklySnapshot } from "./get-weekly-snapshot";
import { processDb } from "./process-weekly-snapshot-in-db";
import { config } from "../common/config";
import { AjnaDripper, AjnaRedeemer, AjnaToken } from "../../typechain-types";
import { addresses } from "../common/config";
import { BASE_WEEKLY_AMOUNT } from "../common/test-data";
import { network } from "hardhat";

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
  const ajnaRedeemer = await getContract<AjnaRedeemer>("AjnaRedeemer", addresses[config.network].ajnaRedeemer);
  const ajnaToken = await getContract<AjnaToken>("AjnaToken", addresses[config.network].ajnaToken);

  console.log(`AJNA TOKEN ADDRESS   : ${ajnaToken.address} on ${network.name} using addresses from ${config.network}`);
  console.log(
    `AJNA REDEEMER ADDRESS: ${ajnaRedeemer.address} on ${network.name} using addresses from ${config.network}`
  );
  console.log(`CURRENT WEEK: ${weekId}`);

  if (network.name === "hardhat") {
    try {
      const operator = await impersonate(addresses[config.network].operator);
      const admin = await impersonate(addresses[config.network].admin);
      const ajnaDripper = await getContract<AjnaDripper>("AjnaDripper", addresses[config.network].ajnaDripper);
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
