import { BigNumber, ethers } from "ethers";

import { prisma } from "database";
import { getEpochWeekId, createMerkleTree, config, getRewardDistributions } from "common";
import { ParsedSnapshot, Snapshot } from "common";
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
      console.error(`Week ID ${weekId} - cant process current or future week. Chain ID: ${config.chainId}`);
      continue;
    }
    if (weekId < config.rewardStartWeek) {
      console.error(`Week ID ${weekId} - cant process week before reward start week. Chain ID: ${config.chainId}`);
      continue;
    }
    const existingWeek = await prisma.ajnaRewardsMerkleTree.findFirst({
      where: { week_number: weekId, tx_processed: true, chain_id: config.chainId },
    });

    if (existingWeek) {
      console.info(`Week ${weekId} has already been processed. Chain ID: ${config.chainId}`);
      continue;
    }

    console.info(`Processing weekly claims for week ${weekId}. Chain ID: ${config.chainId}`);

    const rewardDistributions = getRewardDistributions(weekId);
    const parsedSnapshot: ParsedSnapshot = await getWeeklySnapshot(weekId, rewardDistributions);
    const snapshot: Snapshot = parsedSnapshot.map((entry) => ({
      address: entry.address.toLowerCase(),
      amount: BigNumber.from(entry.amount),
    }));
    const { tree, root } = createMerkleTree(snapshot);

    await processWeeklySnapshotInDb(snapshot, weekId, root, tree);
    await processTransaction(weekId, root, signer);
  }
}
