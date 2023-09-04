import yargs from "yargs";
import fs from "fs";
import { ethers } from "ethers";

import {
  PoolsCuratedTokensRequest,
  PoolsSingleTokenRequest,
  PoolsTokenPairRequest,
  TokenList,
  TokenPairList,
} from "common";

import "common/bootstrap-env";

// CONFIG
if (!process.env.PARTNER_REWARDS_ENDPOINT_BASE_URL) {
  throw new Error("Please copy '.env.example' to '.env' and fill the PARTNER_REWARDS_ENDPOINT_BASE_URL variable");
}
if (!process.env.PARTNER_REWARDS_ENDPOINT_API_KEY) {
  throw new Error("Please copy '.env.example' to '.env' and fill the PARTNER_REWARDS_ENDPOINT_API_KEY variable");
}

const EndpointBaseUrl = process.env.PARTNER_REWARDS_ENDPOINT_BASE_URL;
const ApiKey = process.env.PARTNER_REWARDS_ENDPOINT_API_KEY;

function writeOutputFile(outputFile: string, data: any) {
  try {
    fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));
  } catch (error) {
    throw new Error(`Error writing output file ${outputFile}: ${error}`);
  }
}

async function requestPoolsForSingleToken(argv: any) {
  if (!argv.tokenAddress || !ethers.utils.isAddress(argv.tokenAddress)) {
    throw new Error("Invalid token address format");
  }

  const endpointUrl = `${EndpointBaseUrl}/pools/token`;

  const request: PoolsSingleTokenRequest = {
    token: argv.tokenAddress,
  };

  console.log(`Requesting pools for token ${argv.tokenAddress}...`);

  const response = await fetch(endpointUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": ApiKey,
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(`Requesting the list of pools for a single token: ${await response.text()}`);
  }

  writeOutputFile(argv.outputFile, await response.json());
}

async function requestPoolsForTokenPairs(argv: any) {
  let tokenPairs: TokenPairList;

  try {
    tokenPairs = JSON.parse(argv.tokenPairs);
  } catch (error) {
    throw new Error(`Invalid token pairs format: ${error}`);
  }

  const endpointUrl = `${EndpointBaseUrl}/pools/token-pairs`;

  const request: PoolsTokenPairRequest = {
    pairs: tokenPairs,
  };

  console.log(`Requesting pools for token pairs ${argv.tokenPairs}...`);

  const response = await fetch(endpointUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": ApiKey,
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(`Requesting the list of pools for a list of token pairs: ${await response.text()}`);
  }

  writeOutputFile(argv.outputFile, await response.json());
}

async function requestPoolsForCuratedTokens(argv: any) {
  let curatedTokens: TokenList;

  try {
    curatedTokens = JSON.parse(argv.curatedTokens);
  } catch (error) {
    throw new Error(`Invalid curated tokens list format: ${error}`);
  }

  const endpointUrl = `${EndpointBaseUrl}/pools/curated-tokens`;

  const request: PoolsCuratedTokensRequest = {
    tokens: curatedTokens,
  };

  console.log(`Requesting pools for curated tokens ${argv.curatedTokens}...`);

  const response = await fetch(endpointUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": ApiKey,
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(`Requesting the list of pools for a list of token pairs: ${await response.text()}`);
  }

  writeOutputFile(argv.outputFile, await response.json());
}

async function main() {
  const argv = await yargs
    .command(
      "token",
      "Requests all pools that include the specified token",
      {
        tokenAddress: {
          alias: "t",
          description: "Token address",
          type: "string",
          demandOption: true,
        },
        outputFile: {
          alias: "o",
          description: "Output file for the list of retrieved pools",
          type: "string",
          demandOption: true,
        },
      },
      requestPoolsForSingleToken
    )
    .command(
      "token-pairs",
      "Requests all pools that include the specified token pairs (collateral, quote)",
      {
        tokenPairs: {
          alias: "t",
          description: "Token pairs list [[collateral1, quote1], ...]",
          type: "string",
          demandOption: true,
        },
        outputFile: {
          alias: "o",
          description: "Output file for the list of retrieved pools",
          type: "string",
          demandOption: true,
        },
      },
      requestPoolsForTokenPairs
    )
    .command(
      "curated-tokens",
      "Requests all pools that include the specified tokens either as collateral or quote",
      {
        curatedTokens: {
          alias: "t",
          description: "Tokens list [token1, ...]",
          type: "string",
          demandOption: true,
        },
        outputFile: {
          alias: "o",
          description: "Output file for the list of retrieved pools",
          type: "string",
          demandOption: true,
        },
      },
      requestPoolsForCuratedTokens
    )
    .help()
    .alias("help", "h").argv;

  if (argv._.length === 0 || !["token", "token-pairs", "curated-tokens"].includes(argv._[0] as string)) {
    yargs.showHelp();
  }
}

main()
  .then(() => {
    // success message or other processing
    process.exitCode = 0;
    process.exit();
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
    process.exit();
  });
