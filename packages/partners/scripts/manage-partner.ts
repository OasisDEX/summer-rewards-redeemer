import { ethers } from "ethers";
import yargs from "yargs";

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

async function whitelistPartner(argv: any) {
  if (!ethers.utils.isAddress(argv.partnerAddress)) {
    throw new Error("Invalid partner address format");
  }

  const addTx = await RewardsRedeemerFactoryInstance.addPartner(argv.partnerAddress);
  addTx.wait();
  console.log(`PARTNER WHITELISTED: ${argv.partnerAddress}`);
}

async function blacklistPartner(argv: any) {
  if (!ethers.utils.isAddress(argv.partnerAddress)) {
    throw new Error("Invalid partner address format");
  }

  const removeTx = await RewardsRedeemerFactoryInstance.removePartner(argv.partnerAddress);
  removeTx.wait();
  console.log(`PARTNER REMOVED FROM WHITELIST: ${argv.partnerAddress}`);
}

async function main() {
  await yargs
    .command(
      "add",
      "Add partner to whitelist",
      {
        partnerAddress: {
          alias: "a",
          description: "Partner address",
          type: "string",
          demandOption: true,
        },
      },
      whitelistPartner
    )
    .command(
      "remove",
      "Remove partner from whitelist",
      {
        partnerAddress: {
          alias: "a",
          description: "Partner address",
          type: "string",
          demandOption: true,
        },
      },
      blacklistPartner
    )
    .command("*", "", () => {
      yargs.showHelp();
    })
    .demandCommand()
    .help()
    .alias("help", "h").argv;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
