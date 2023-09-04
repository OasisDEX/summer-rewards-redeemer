import yargs from "yargs";
import fs from "fs";

import { PoolRewardsDistributionRequest, PoolRewardsDistributionResponse, RewardsType } from "common";

import "common/bootstrap-env";

async function requestRewardsForUsers(
  endpointBaseUrl: string,
  apiKey: string,
  poolRequest: PoolRewardsDistributionRequest,
  type: RewardsType = "weekly"
): Promise<PoolRewardsDistributionResponse> {
  const endpointUrl = `${endpointBaseUrl}/snapshot/${type}`;

  console.log(endpointUrl);
  console.log(poolRequest);

  const response = await fetch(endpointUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
    body: JSON.stringify(poolRequest),
  });

  console.log(await response.json());
  if (!response.ok) {
    throw new Error(`Requesting the Merkle Tree: ${await response.text()}`);
  }

  return response.json();
}

async function main() {
  if (!process.env.PARTNER_REWARDS_ENDPOINT_BASE_URL) {
    throw new Error("Please copy '.env.example' to '.env' and fill the PARTNER_REWARDS_ENDPOINT_BASE_URL variable");
  }
  if (!process.env.PARTNER_REWARDS_ENDPOINT_API_KEY) {
    throw new Error("Please copy '.env.example' to '.env' and fill the PARTNER_REWARDS_ENDPOINT_API_KEY variable");
  }

  // Parse input arguments
  const args = await yargs
    .option("poolsConfig", {
      alias: "p",
      description:
        "File containing the pools configuration. See the PoolRewardsDistributionRequest type for the required structure",
      demandOption: true,
      type: "string",
    })
    .option("output", {
      alias: "o",
      description: "Output file for the merkle tree and the user proofs",
      demandOption: true,
      type: "string",
    })
    .option("type", {
      alias: "t",
      description: "Type of rewards to request",
      demandOption: false,
      type: "string",
      choices: ["daily", "weekly"],
      default: "weekly",
    })
    .help()
    .alias("help", "h").argv;

  let poolsRequestConfig: PoolRewardsDistributionRequest;
  try {
    poolsRequestConfig = JSON.parse(fs.readFileSync(args.poolsConfig, "utf8"));
  } catch (error) {
    throw new Error(`Error reading the pools configuration file ${args.poolsConfig}: ${error}`);
  }

  console.log(`Initiating request for Merkle Tree for week ${poolsRequestConfig.weekId}...`);
  console.log(` - Endpoint: ${process.env.PARTNER_REWARDS_ENDPOINT_BASE_URL}`);
  console.log(` - API Key: ${process.env.PARTNER_REWARDS_ENDPOINT_API_KEY}\n`);

  const merkleTreeData = await requestRewardsForUsers(
    process.env.PARTNER_REWARDS_ENDPOINT_BASE_URL,
    process.env.PARTNER_REWARDS_ENDPOINT_API_KEY,
    poolsRequestConfig,
    args.type as RewardsType
  );

  console.log(`Merkle Tree successfully requested for week ${poolsRequestConfig.weekId}`);
  console.log(` - Merkle Tree Root: ${merkleTreeData.root}`);
  console.log(` - Total Users: ${merkleTreeData.parsedSnapshotWithProofs.length}\n`);

  console.log(`Writing Merkle Tree data to ${args.output}...`);
  fs.writeFileSync(args.output, JSON.stringify(merkleTreeData, null, 2));
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
