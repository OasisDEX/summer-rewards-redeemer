import { BigNumber } from "ethers";

import { prisma } from "../../prisma/client";
import { createMerkleTree, getEpochDayId, getEpochWeekId } from "../common/helpers";
import { ParsedSnapshot, Snapshot } from "../common/types";
import { getDailySnapshot, getWeeklySnapshot } from "./get-snapshot";
import { processDailySnapshotInDb, processWeeklySnapshotInDb } from "./process-snapshot-in-db";
import { processTransaction } from "./process-tx";

/**
 * Processes weekly claims for a given array of week IDs.
 * If a week has already been processed, it skips the week and logs a message.
 * If not it will generate the snapshot again and proceed to process the claims.
 * @param weekIds An array of week IDs to process claims for. Defaults to the current epoch week ID.
 * @returns A Promise that resolves when the claims have been processed.
 */
export async function processWeeklyClaims(weekIds = [getEpochWeekId()]): Promise<void> {
  for (const weekId of weekIds) {
    const existingWeek = await prisma.ajnaRewardsMerkleTree.findFirst({
      where: { week_number: weekId, tx_processed: true },
    });

    if (existingWeek) {
      console.log(`Week ${weekId} has already been processed.`);
      continue;
    }

    console.log(`Processing weekly claims for day ${weekId}`);

    const parsedSnapshot: ParsedSnapshot = await getWeeklySnapshot(weekId);
    const snapshot: Snapshot = parsedSnapshot.map((entry) => ({
      address: entry.address,
      amount: BigNumber.from(entry.amount),
    }));
    const { tree, root } = createMerkleTree(snapshot);

    await processWeeklySnapshotInDb(snapshot, weekId, root, tree);
    await processTransaction(weekId, root);
  }
}
/**
 * Processes daily claims for a given array of day IDs.
 * @param dayIds An array of day IDs to process claims for. Defaults to the current epoch day ID.
 * @returns A Promise that resolves when the claims have been processed.
 */
export async function processDailyClaims(dayIds = [getEpochDayId()]): Promise<void> {
  for (const dayId of dayIds) {
    console.log(`Processing daily claims for day ${dayId}`);

    const parsedSnapshot: ParsedSnapshot = await getDailySnapshot(dayId);
    const snapshot: Snapshot = parsedSnapshot.map((entry) => ({
      address: entry.address,
      amount: BigNumber.from(entry.amount),
    }));

    await processDailySnapshotInDb(snapshot, dayId);
  }
}
