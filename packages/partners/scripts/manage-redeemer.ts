import { ethers } from "ethers";
import yargs from "yargs";

import { createRedeemer } from "contracts/utils";
import { RewardsRedeemerFactory__factory } from "typechain-types";

import "common/bootstrap-env";

// SETUP
if (!process.env.JSON_RPC_URL) {
  throw new Error("Please copy '.env.example' to '.env' and fill the JSON_RPC_URL variable");
}
if (!process.env.PRIVATE_KEY_DEPLOY) {
  throw new Error("Please copy '.env.example' to '.env' and fill the PRIVATE_KEY_DEPLOY variable");
}
if (!process.env.REWARDS_REDEEMER_FACTORY_ADDRESS) {
  throw new Error("Please copy '.env.example' to '.env' and fill the REWARDS_REDEEMER_FACTORY_ADDRESS variable");
}

const JsonRpcUrl = process.env.JSON_RPC_URL!;
const PrivKey = process.env.PRIVATE_KEY_DEPLOY!;
const RewardsRedeemerFactoryAddress = process.env.REWARDS_REDEEMER_FACTORY_ADDRESS!;

const PartnerWallet = new ethers.Wallet(PrivKey, new ethers.providers.JsonRpcProvider(JsonRpcUrl));
const RewardsRedeemerFactoryInstance = new RewardsRedeemerFactory__factory(PartnerWallet).attach(
  RewardsRedeemerFactoryAddress
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
  if (!ethers.utils.isAddress(argv.tokenAddress)) {
    throw new Error("Invalid token address format");
  }
  const redeemer = await createRedeemer(RewardsRedeemerFactoryInstance, PartnerWallet, argv.tokenAddress);

  console.log(`CREATED REDEEMER at address ${redeemer.address} for partner ${PartnerWallet.address}`);
}

async function main() {
  const argv = await yargs
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
      "Create new redeemer for token",
      {
        tokenAddress: {
          alias: "t",
          description: "Token address",
          type: "string",
          demandOption: true,
        },
      },
      createRewardsRedeemer
    )
    .demandCommand(1, "You need at least one command before moving on")
    .help()
    .alias("help", "h").argv;

  if (argv._.length === 0 || !["get", "create"].includes(argv._[0] as string)) {
    yargs.showHelp();
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
