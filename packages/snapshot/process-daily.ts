import { BigNumber } from "ethers";

import { Network, ParsedSnapshot, Snapshot } from "common/types";
import { getEpochDayId } from "common/utils/time.utils";
import { getDailySnapshot } from "./get-snapshot";
import { processDailySnapshotInDb } from "./process-snapshot-in-db";
import { config } from "common/config";

/**
 * Processes daily claims for a given array of day IDs.
 * @param dayIds An array of day IDs to process claims for. Defaults to the previous epoch day ID.
 * @returns A Promise that resolves when the claims have been processed.
 */
export async function processDailyClaims(dayIds = [getEpochDayId() - 1]): Promise<void> {
  const currentDay = getEpochDayId();
  if (dayIds.length === 0) {
    throw new Error("No day IDs provided");
  }

  for (const dayId of dayIds) {
    if (dayId >= currentDay) {
      console.error(`Day ID ${dayId} - cant process current or future day`);
      continue;
    }
    console.log(`Processing daily claims for day ${dayId}`);

    const parsedSnapshot: ParsedSnapshot = await getDailySnapshot(dayId);
    const snapshot: Snapshot = parsedSnapshot.map((entry) => ({
      address: entry.address.toLowerCase(),
      amount: BigNumber.from(entry.amount),
    }));

    await processDailySnapshotInDb(snapshot, dayId);
  }
}

/**
 * Processes daily claims for all networks for a given array of day IDs.
 * @param dayIds An array of day IDs to process claims for. Defaults to the previous epoch day ID.
 * @returns A Promise that resolves when the claims have been processed.
 */
export async function processAllNetworksDailyClaims(dayIds = [getEpochDayId() - 1]): Promise<void> {
  for (const network of Object.values(Network)) {
    config.usedNetwork = network;
    await processDailyClaims(dayIds);
  }
}
