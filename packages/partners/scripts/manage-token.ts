import { ethers } from "ethers";
import yargs from "yargs";

import { ERC20__factory } from "typechain-types";

import "common/bootstrap-env";
import { processTx } from "common/utils";

// SETUP
if (!process.env.JSON_RPC_URL) {
  throw new Error("Please copy '.env.example' to '.env' and fill the JSON_RPC_URL variable");
}
if (!process.env.PARTNER_WALLET_PRIVATE_KEY) {
  throw new Error("Please copy '.env.example' to '.env' and fill the PARTNER_WALLET_PRIVATE_KEY variable");
}

const JsonRpcUrl = process.env.JSON_RPC_URL;
const PartnerPrivKey = process.env.PARTNER_WALLET_PRIVATE_KEY;

const PartnerWallet = new ethers.Wallet(PartnerPrivKey, new ethers.providers.JsonRpcProvider(JsonRpcUrl));

// COMMANDS HANDLERS
async function sendTokens(argv: any) {
  if (!ethers.utils.isAddress(argv.tokenAddress)) {
    throw new Error("Invalid token address format");
  }
  if (!ethers.utils.isAddress(argv.redeemerAddress)) {
    throw new Error("Invalid token address format");
  }

  const token = new ERC20__factory(PartnerWallet).attach(argv.tokenAddress);

  const decimals = await token.decimals();

  let amountBN: ethers.BigNumber;
  try {
    amountBN = ethers.utils.parseUnits(argv.amount, decimals);
  } catch (error) {
    throw new Error(`Invalid amount format: ${error}`);
  }

  const result = await processTx(token.transfer(argv.redeemerAddress, amountBN));
  if (!result.success) {
    console.log(result.error);
    console.log("ERROR: Sending tokens, please check logs above");
    process.exit(1);
  }

  console.log(`TRANSFERRED ${argv.amount} tokens from ${argv.tokenAddress} to ${argv.redeemerAddress}`);
}

async function balanceOf(argv: any) {
  if (!ethers.utils.isAddress(argv.tokenAddress)) {
    throw new Error("Invalid token address format");
  }
  if (!ethers.utils.isAddress(argv.userAddress)) {
    throw new Error("Invalid user address format");
  }

  const token = new ERC20__factory(PartnerWallet).attach(argv.tokenAddress);
  const decimals = await token.decimals();

  const balance = await token.balanceOf(argv.userAddress);
  console.log(
    `BALANCE of ${argv.userAddress} for token ${argv.tokenAddress} is ${ethers.utils.formatUnits(
      balance,
      decimals
    )} (${ethers.utils.formatUnits(balance, 0)} wei)`
  );
}

async function main() {
  const argv = await yargs
    .command(
      "send",
      "Sends a token amount to the target address",
      {
        tokenAddress: {
          alias: "t",
          description: "Token address",
          type: "string",
          demandOption: true,
        },
        amount: {
          alias: "m",
          description: "Amount of tokens to transfer",
          type: "string",
          demandOption: true,
        },
        redeemerAddress: {
          alias: "r",
          description: "Redeemer address",
          type: "string",
          demandOption: true,
        },
      },
      sendTokens
    )
    .command(
      "balance",
      "Retrieves the balance of the token for the current wallet",
      {
        tokenAddress: {
          alias: "t",
          description: "Token address",
          type: "string",
          demandOption: true,
        },
        userAddress: {
          alias: "u",
          description: "User address",
          type: "string",
          demandOption: true,
        },
      },
      balanceOf
    )
    .help()
    .alias("help", "h").argv;

  if (argv._.length === 0 || !["send", "balance"].includes(argv._[0] as string)) {
    yargs.showHelp();
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
