import chalk from "chalk";
import { config } from "common/config";
import hre, { network } from "hardhat";
import { AjnaDripper } from "typechain-types";

import { getOrDeployContract } from "../utils/hardhat.utils";

async function main() {
  const ajnaDripper = await getOrDeployContract<AjnaDripper>("AjnaDripper", [
    config.addresses.ajnaToken,
    config.addresses.admin,
  ]);
  console.log(`Dripper deployed to : ${chalk.green(ajnaDripper.address)} on ${chalk.green(config.network)}`);

  if (network.name === "mainnet" || network.name === "goerli") {
    // Add a 10 second wait
    console.log(`Waiting for 60 seconds...`);
    await new Promise((resolve) => setTimeout(resolve, 60000));

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
    process.exitCode = 1;
  });
