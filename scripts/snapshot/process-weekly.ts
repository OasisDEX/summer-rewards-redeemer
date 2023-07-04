import { BigNumber } from "ethers";

import { prisma } from "../../prisma/client";
import { createMerkleTree } from "../common/helpers";
import { getEpochWeekId } from "../common/time-helpers";
import { ParsedSnapshot, Snapshot } from "../common/types";
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
export async function processWeeklyClaims(weekIds = [getEpochWeekId() - 1]): Promise<void> {
  const currentWeek = getEpochWeekId();

  for (const weekId of weekIds) {
    if (weekId >= currentWeek) {
      console.error(`Week ID ${weekId} - cant process current or future week`);
      continue;
    }
    const existingWeek = await prisma.ajnaRewardsMerkleTree.findFirst({
      where: { week_number: weekId, tx_processed: true },
    });

    if (existingWeek) {
      console.log(`Week ${weekId} has already been processed.`);
      continue;
    }

    console.log(`Processing weekly claims for week ${weekId}`);

    const parsedSnapshot: ParsedSnapshot = await getWeeklySnapshot(weekId);
    const snapshot: Snapshot = parsedSnapshot.map((entry) => ({
      address: entry.address.toLowerCase(),
      amount: BigNumber.from(entry.amount),
    }));
    const { tree, root } = createMerkleTree(snapshot);

    await processWeeklySnapshotInDb(snapshot, weekId, root, tree);
    await processTransaction(weekId, root);
  }
}
processWeeklyClaims();
