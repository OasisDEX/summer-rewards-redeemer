import { ethers } from "ethers";
import yargs from "yargs";

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

const PartnerRole = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("PARTNER_ROLE"));
const JsonRpcUrl = process.env.JSON_RPC_URL!;
const AdminPrivKey = process.env.PRIVATE_KEY_DEPLOY!;
const RewardsRedeemerFactoryAddress = process.env.REWARDS_REDEEMER_FACTORY_ADDRESS!;

const AdminWallet = new ethers.Wallet(AdminPrivKey, new ethers.providers.JsonRpcProvider(JsonRpcUrl));
const RewardsRedeemerFactoryInstance = new RewardsRedeemerFactory__factory(AdminWallet).attach(
  RewardsRedeemerFactoryAddress
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

async function checkPartner(argv: any) {
  if (!ethers.utils.isAddress(argv.partnerAddress)) {
    throw new Error("Invalid partner address format");
  }

  const isWhitelisted = await RewardsRedeemerFactoryInstance.hasRole(PartnerRole, argv.partnerAddress);

  console.log(`PARTNER ${argv.partnerAddress} ${isWhitelisted ? "IS" : "IS NOT"} WHITELISTED`);
}

async function main() {
  const argv = await yargs
    .command(
      "add",
      "Add partner to whitelist",
      {
        partnerAddress: {
          alias: "p",
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
          alias: "p",
          description: "Partner address",
          type: "string",
          demandOption: true,
        },
      },
      blacklistPartner
    )
    .command(
      "check",
      "Check partner status",
      {
        partnerAddress: {
          alias: "p",
          description: "Partner address",
          type: "string",
          demandOption: true,
        },
      },
      checkPartner
    )
    .demandCommand()
    .help()
    .alias("help", "h").argv;

  if (argv._.length === 0 || !["add", "remove", "check"].includes(argv._[0] as string)) {
    yargs.showHelp();
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
