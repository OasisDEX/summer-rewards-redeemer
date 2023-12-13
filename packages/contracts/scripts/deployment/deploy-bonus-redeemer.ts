/* eslint-disable no-process-exit */
import chalk from "chalk";
import { Network, ZERO_ADDRESS } from "common";
import { config } from "common/config";
import hre, { network } from "hardhat";
import { RewardsRedeemerFactory } from "typechain-types";

import { getOrDeployContract } from "../utils/hardhat.utils";

async function main() {
  config.currentlyConfiguredNetwork = network.name;

  const redeemerFactory = await getOrDeployContract<RewardsRedeemerFactory>("RewardsRedeemerFactory", []);

  const hasAdminRole = await redeemerFactory.hasRole(await redeemerFactory.PARTNER_ROLE(), config.addresses.admin);

  if (!hasAdminRole) {
    console.log(`Adding admin as partner`);
    await redeemerFactory.addPartner(config.addresses.admin);
  }
  if (config.addresses.bonusRedeemer !== ZERO_ADDRESS) {
    console.log(
      `Bonus redeemer already deployed to : ${chalk.green(config.addresses.bonusRedeemer)} on ${chalk.green(
        config.network
      )}`
    );
    throw new Error("Bonus redeemer already deployed");
  }

  const tx = await redeemerFactory.createRewardsRedeemer(config.addresses.ajnaToken);

  const receipt = await tx.wait();

  if (!receipt.events) {
    throw new Error("No events in receipt");
  }
  const event = receipt.events?.find((event) => event.event === "RewardsRedeemerCreated");
  if (!event) {
    throw new Error("No RewardsRedeemerCreated event in receipt");
  }
  if (!event.args) {
    throw new Error("No args in RewardsRedeemerCreated event");
  }

  const [rewardsRedeemer] = event?.args;

  console.log(`RedeemerFactory used: ${chalk.green(redeemerFactory.address)} on ${chalk.green(config.network)}`);
  console.log(`Redeemer deployed to : ${chalk.green(rewardsRedeemer)} on ${chalk.green(config.network)}`);

  if (network.name === Network.Mainnet || network.name === Network.Goerli) {
    console.log(`Waiting for 60 seconds...`);
    await new Promise((resolve) => setTimeout(resolve, 60000));

    await hre.run("verify:verify", {
      address: redeemerFactory.address,
      constructorArguments: [],
    });

    await hre.run("verify:verify", {
      address: rewardsRedeemer,
      constructorArguments: [config.addresses.ajnaToken],
    });
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
