import { BigNumber, ethers } from "ethers";
import { prisma } from "database";
import {
  getEpochWeekId,
  createMerkleTree,
  config,
  EligibleNetwork,
  Network,
  getRewardsDistributionsForNetworks,
} from "common";
import { ParsedUserSnapshot, UserSnapshot } from "common";
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

    const userSnapshotMultipleNetworks: ParsedUserSnapshot = [];
    const promises = [...Object.values(EligibleNetwork)].map(async (network) => {
      console.info(`Processing weekly claims for week ${weekId} on ${network}.`);
      config.usedNetwork = network;
      const rewardDistributions = config.getRewardDistributions(weekId, network as unknown as Network);
      const parsedSnapshot: ParsedUserSnapshot = await getWeeklySnapshot(weekId, rewardDistributions);
      userSnapshotMultipleNetworks.push(...parsedSnapshot);
    });

    await Promise.all(promises);

    const summedUserSnapshots: UserSnapshot = userSnapshotMultipleNetworks.reduce((acc, curr) => {
      const existingEntry = acc.find((entry) => entry.userAddress === curr.userAddress);
      if (existingEntry) {
        existingEntry.amount = existingEntry.amount.add(BigNumber.from(curr.amount));
      } else {
        acc.push({ ...curr, amount: BigNumber.from(curr.amount) });
      }
      return acc;
    }, [] as UserSnapshot);
    const { tree, root } = createMerkleTree(summedUserSnapshots);
    config.usedNetwork = Network.Mainnet;
    await processWeeklySnapshotInDb(summedUserSnapshots, weekId, root, tree);
    await processTransaction(weekId, root, signer);
  }
}
