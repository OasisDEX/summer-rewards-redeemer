import chalk from "chalk";
import { network } from "hardhat";

import { AjnaDripper, AjnaRedeemer, AjnaToken } from "../../typechain-types";
import { config } from "../common/config";
import { getContract, getOrDeployContract, impersonate, setTokenBalance } from "../common/helpers";
import { BASE_WEEKLY_AMOUNT } from "../common/test-data";

export async function processTransaction(weekId: number, root: string) {
  const ajnaToken = await getContract<AjnaToken>("AjnaToken", config.addresses.ajnaToken);
  const ajnaDripper = await getOrDeployContract<AjnaDripper>("AjnaDripper", [
    config.addresses.ajnaToken,
    config.addresses.admin,
  ]);
  const ajnaRedeemer = await getOrDeployContract<AjnaRedeemer>("AjnaRedeemer", [
    config.addresses.ajnaToken,
    config.addresses.operator,
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
      const operator = await impersonate(config.addresses.operator);
      const admin = await impersonate(config.addresses.admin);
      await setTokenBalance(ajnaDripper.address, ajnaToken.address, BASE_WEEKLY_AMOUNT);
      await (await ajnaDripper.connect(admin).changeRedeemer(ajnaRedeemer.address, BASE_WEEKLY_AMOUNT)).wait();
      await (await ajnaRedeemer.connect(operator).addRoot(Number(weekId), root)).wait();
    } catch (error) {
      console.error(error);
    }
  }
  if (!config.dryRun) await (await ajnaRedeemer.addRoot(Number(weekId), root)).wait();
}
