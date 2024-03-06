/* eslint-disable no-process-exit */
import chalk from "chalk";
import { Network } from "common";
import { config } from "common/config";
import hre, { network } from "hardhat";
import { RewardsRedeemerFactory } from "typechain-types";

import { getOrDeployContract } from "../utils/hardhat.utils";

async function main() {
  config.currentlyConfiguredNetwork = network.name;

  const redeemerFactory = await getOrDeployContract<RewardsRedeemerFactory>("RewardsRedeemerFactory", []);

  console.log(
    `RedeemerFactory deployed to : ${chalk.green(redeemerFactory.address)} on ${chalk.green(config.network)}`
  );

  if (network.name === Network.Mainnet || network.name === Network.Goerli) {
    console.log(`Waiting for 60 seconds...`);
    await new Promise((resolve) => setTimeout(resolve, 60000));

    await hre.run("verify:verify", {
      address: redeemerFactory.address,
      constructorArguments: [],
    });
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
