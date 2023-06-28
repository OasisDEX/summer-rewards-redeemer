import chalk from "chalk";
import hre, { network } from "hardhat";

import { AjnaDripper, AjnaRedeemer } from "../../typechain-types";
import { config } from "../common/config";
import { getOrDeployContract } from "../common/helpers";

async function main() {
  const ajnaDripper = await getOrDeployContract<AjnaDripper>("AjnaDripper", [
    config.addresses.ajnaToken,
    config.addresses.admin,
  ]);
  const ajnaRedeemer = await getOrDeployContract<AjnaRedeemer>("AjnaRedeemer", [
    config.addresses.ajnaToken,
    config.addresses.operator,
    ajnaDripper.address,
  ]);

  if (network.name === "mainnet" || network.name === "goerli") {
    await hre.run("verify:verify", {
      address: ajnaRedeemer.address,
      constructorArguments: [config.addresses.ajnaToken, config.addresses.operator, ajnaDripper.address],
    });
    await hre.run("verify:verify", {
      address: ajnaDripper.address,
      constructorArguments: [config.addresses.ajnaToken, config.addresses.admin],
    });
  }
  console.log(`Redeemer deployed to : ${chalk.green(ajnaRedeemer.address)} on ${chalk.green(config.network)}`);
  console.log(`Dripper deployed to : ${chalk.green(ajnaDripper.address)} on ${chalk.green(config.network)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
