import {
  config,
  createMerkleTree,
  EligibleNetwork,
  getEpochWeekId,
  getRewardsDistributionsForNetworks,
  Network,
  ParsedUserSnapshot,
  UserSnapshot,
} from "common";
import { prisma } from "database";
import { BigNumber, ethers } from "ethers";

import { getWeeklySnapshot } from "./get-snapshot";
import { processWeeklySnapshotInDb } from "./process-snapshot-in-db";
import { processTransaction } from "./process-tx";

/**
 * Processes weekly claims for a given array of week IDs.
 * If a week has already been processed, it skips the week and logs a message.
 * If not it will generate the snapshot again and proceed to process the claims.
 * @param weekIds An array of week IDs to process claims for. Defaults to the previous epoch week ID.
 * @returns A Promise that resolves when the claims have been processed.
 */
export async function processWeeklyClaims(weekIds = [getEpochWeekId() - 1], signer?: ethers.Signer): Promise<void> {
  const currentWeek = getEpochWeekId();

  for (const weekId of weekIds) {
    if (weekId >= currentWeek) {
      console.error(`Week ID ${weekId} - cant process current or future week.`);
      continue;
    }
    if (weekId < config.rewardStartWeek) {
      console.error(`Week ID ${weekId} - cant process week before reward start week.`);
      continue;
    }
    const existingWeek = await prisma.ajnaRewardsMerkleTree.findFirst({
      where: { week_number: weekId, tx_processed: true, chain_id: 1 },
    });

    if (existingWeek) {
      console.info(`Week ${weekId} has already been processed.`);
      continue;
    }

    console.info(`Processing weekly claims for week ${weekId}.`);
    // this will validate the reward distributions for all eligible networks
    getRewardsDistributionsForNetworks(weekId, [...Object.values(EligibleNetwork)] as unknown as Network[]);
    // initialize an empty array to hold the snapshot for each network
    const userSnapshotMultipleNetworks: ParsedUserSnapshot = [];
    // for each eligible network, get the reward distributions and generate the snapshot
    const promises = [...Object.values(EligibleNetwork)].map(async (network) => {
      console.info(`Processing weekly claims for week ${weekId} on ${network}.`);
      config.usedNetwork = network;
      const rewardDistributions = config.getRewardDistributions(weekId, network as unknown as Network);
      const parsedSnapshot: ParsedUserSnapshot = await getWeeklySnapshot(weekId, rewardDistributions);
      userSnapshotMultipleNetworks.push(...parsedSnapshot);
    });
    // wait for all snapshots to be generated
    await Promise.all(promises);
    // convert the daily snapshot to the format we need for the DB
    // iterate through all snapshots and sum up the amounts for each user
    const summedUserSnapshots: UserSnapshot = userSnapshotMultipleNetworks.reduce((acc, curr) => {
      const existingEntry = acc.find((entry) => entry.userAddress === curr.userAddress);
      if (existingEntry) {
        existingEntry.amount = existingEntry.amount.add(BigNumber.from(curr.amount));
      } else {
        acc.push({ ...curr, amount: BigNumber.from(curr.amount) });
      }
      return acc;
    }, [] as UserSnapshot);
    // create the merkle tree and process the snapshot in the DB
    const { tree, root } = createMerkleTree(summedUserSnapshots);
    // set the network to mainnet as we are adding the root to the contract only on mainnet
    config.usedNetwork = Network.Mainnet;
    // process the snapshot in the DB
    await processWeeklySnapshotInDb(summedUserSnapshots, weekId, root, tree);
    // process the snapshot on the blockchain
    await processTransaction(weekId, root, signer);
  }
}
