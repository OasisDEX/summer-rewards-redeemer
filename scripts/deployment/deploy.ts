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
  console.log(`Redeemer deployed to : ${chalk.green(ajnaRedeemer.address)} on ${chalk.green(config.network)}`);
  console.log(`Dripper deployed to : ${chalk.green(ajnaDripper.address)} on ${chalk.green(config.network)}`);
  if (network.name === "mainnet" || network.name === "goerli") {
    // Add a 10 second wait
    console.log(`Waiting for 60 seconds...`);
    await new Promise((resolve) => setTimeout(resolve, 60000));

    await hre.run("verify:verify", {
      address: ajnaRedeemer.address,
      constructorArguments: [config.addresses.ajnaToken, config.addresses.operator, ajnaDripper.address],
    });
    await hre.run("verify:verify", {
      address: ajnaDripper.address,
      constructorArguments: [config.addresses.ajnaToken, config.addresses.admin],
    });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
