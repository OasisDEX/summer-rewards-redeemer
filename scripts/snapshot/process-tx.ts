import chalk from "chalk";
import { network } from "hardhat";
import { AjnaToken, AjnaDripper, AjnaRedeemer } from "../../typechain-types";
import { addresses, config } from "../common/config";
import { getContract, getOrDeployContract, impersonate, setTokenBalance } from "../common/helpers";
import { BASE_WEEKLY_AMOUNT } from "../common/test-data";

export async function processTransaction(weekId: number, root: string) {
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
      await (await ajnaRedeemer.connect(operator).addRoot(Number(weekId), root)).wait();
    } catch (error) {
      console.error(error);
    }
  }
  if (!config.dryRun) await (await ajnaRedeemer.addRoot(Number(weekId), root)).wait();
}
