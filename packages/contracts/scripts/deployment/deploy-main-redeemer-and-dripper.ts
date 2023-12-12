/* eslint-disable no-process-exit */
import chalk from "chalk";
import { BILLION, Network } from "common";
import { config } from "common/config";
import hre, { network } from "hardhat";
import { AjnaDripper, AjnaRedeemer } from "typechain-types";

import { getOrDeployContract } from "../utils/hardhat.utils";

async function main() {
  config.currentlyConfiguredNetwork = network.name;

  const ajnaToken = await getOrDeployContract("AjnaToken", []);
  config.addresses.ajnaToken = ajnaToken.address;

  const ajnaDripper = await getOrDeployContract<AjnaDripper>("AjnaDripper", [
    config.addresses.ajnaToken,
    config.addresses.admin,
  ]);
  const ajnaRedeemer = await getOrDeployContract<AjnaRedeemer>("AjnaRedeemer", [
    config.addresses.ajnaToken,
    config.addresses.operator,
    ajnaDripper.address,
  ]);

  if (network.name === Network.Goerli) {
    ajnaToken.mint(ajnaDripper.address, BILLION);
    console.log(`Minted 1 billion tokens to ${chalk.green(ajnaDripper.address)}`);
  }

  console.log(`Redeemer deployed to : ${chalk.green(ajnaRedeemer.address)} on ${chalk.green(config.network)}`);
  console.log(`Dripper deployed to : ${chalk.green(ajnaDripper.address)} on ${chalk.green(config.network)}`);

  if (network.name === Network.Mainnet || network.name === Network.Goerli) {
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

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
