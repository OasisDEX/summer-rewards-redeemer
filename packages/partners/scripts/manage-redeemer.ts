import { ethers } from "ethers";
import yargs from "yargs";

import { createRedeemer } from "contracts/utils";
import { RewardsRedeemerFactory__factory } from "typechain-types";

import "common/bootstrap-env";

// CONFIG
const config = {
  rewardsRedeemerFactory: "0x6484EB0792c646A4827638Fc1B6F20461418eB00",
};

// SETUP
const JsonRpcUrl = process.env.JSON_RPC_URL!;
const PrivKey = process.env.PRIVATE_KEY_DEPLOY!;
const PartnerWallet = new ethers.Wallet(PrivKey, new ethers.providers.JsonRpcProvider(JsonRpcUrl));
const RewardsRedeemerFactoryInstance = new RewardsRedeemerFactory__factory(PartnerWallet).attach(
  config.rewardsRedeemerFactory
);

// COMMANDS HANDLERS
async function getRedeemerAddress(argv: any) {
  if (!ethers.utils.isAddress(argv.partnerAddress)) {
    throw new Error("Invalid partner address format");
  }

  const exsitingRedeemerAddr = await RewardsRedeemerFactoryInstance.redeemers(argv.partnerAddress);

  console.log(`EXISTING REDEEMER ${exsitingRedeemerAddr} for partner ${argv.partnerAddress}`);
}

async function createRewardsRedeemer(argv: any) {
  if (!ethers.utils.isAddress(argv.partnerAddress)) {
    throw new Error("Invalid partner address format");
  }
  if (!ethers.utils.isAddress(argv.tokenAddress)) {
    throw new Error("Invalid token address format");
  }
  const redeemer = await createRedeemer(RewardsRedeemerFactoryInstance, PartnerWallet, argv.tokenAddress);

  console.log(`CREATED REDEEMER at address ${redeemer.address} for partner ${argv.partnerAddress}`);
}

async function main() {
  await yargs
    .command(
      "get",
      "Get redeemer address for a partner EOA",
      {
        partnerAddress: {
          alias: "a",
          description: "Partner address",
          type: "string",
          demandOption: true,
        },
      },
      getRedeemerAddress
    )
    .command(
      "create",
      "Create new redeemer for partner and token",
      {
        partnerAddress: {
          alias: "a",
          description: "Partner address",
          type: "string",
          demandOption: true,
        },
        tokenAddress: {
          alias: "t",
          description: "Token address",
          type: "string",
          demandOption: true,
        },
      },
      createRewardsRedeemer
    )
    .command("*", "", () => {
      yargs.showHelp();
    })
    .demandCommand(1, "You need at least one command before moving on")
    .help()
    .alias("help", "h").argv;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
