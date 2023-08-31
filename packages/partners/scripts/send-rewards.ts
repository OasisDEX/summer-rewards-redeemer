import { ethers } from "ethers";
import yargs from "yargs";

import { ERC20__factory } from "typechain-types";

import "common/bootstrap-env";

// SETUP
if (!process.env.JSON_RPC_URL) {
  throw new Error("Please copy '.env.example' to '.env' and fill the JSON_RPC_URL variable");
}
if (!process.env.PARTNER_WALLET_PRIVATE_KEY) {
  throw new Error("Please copy '.env.example' to '.env' and fill the PARTNER_WALLET_PRIVATE_KEY variable");
}

const JsonRpcUrl = process.env.JSON_RPC_URL!;
const PartnerPrivKey = process.env.PARTNER_WALLET_PRIVATE_KEY!;

const PartnerWallet = new ethers.Wallet(PartnerPrivKey, new ethers.providers.JsonRpcProvider(JsonRpcUrl));

// COMMANDS HANDLERS
async function sendTokens(argv: any) {
  if (!ethers.utils.isAddress(argv.tokenAddress)) {
    throw new Error("Invalid token address format");
  }
  if (!ethers.utils.isAddress(argv.redeemerAddress)) {
    throw new Error("Invalid token address format");
  }

  let amountBN: ethers.BigNumber;
  try {
    amountBN = ethers.utils.parseUnits(argv.amount, argv.decimals !== undefined ? argv.decimals : "wei");
  } catch (error) {
    throw new Error(`Invalid amount format: ${error}`);
  }

  const token = new ERC20__factory(PartnerWallet).attach(argv.tokenAddress);

  try {
    const tx = await token.transfer(argv.redeemerAddress, amountBN);
    await tx.wait();
  } catch (error) {
    console.log(error);
    console.log("ERROR: Sending tokens, please check logs above");
    process.exit(1);
  }

  console.log(`TRANSFERRED ${argv.amount} tokens from ${argv.tokenAddress} to ${argv.redeemerAddress}`);
}

async function main() {
  const args = await yargs
    .option("tokenAddress", {
      alias: "t",
      description: "Token address",
      demandOption: true,
      type: "string",
    })
    .option("amount", {
      alias: "m",
      description: "Amount of tokens to transfer",
      demandOption: true,
      type: "string",
    })
    .option("redeemerAddress", {
      alias: "r",
      description: "Redeemer address",
      demandOption: true,
      type: "string",
    })
    .option("decimals", {
      alias: "d",
      description: "Token decimals",
      demandOption: false,
      type: "number",
    })
    .help()
    .alias("help", "h").argv;

  await sendTokens(args);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
