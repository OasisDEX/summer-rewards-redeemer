import { BigNumber } from "ethers";

import {
  EligibleNetwork,
  Network,
  ParsedUserSnapshot,
  ParsedPositionSnapshot,
  UserSnapshot,
  PositionSnapshot,
} from "common/types";
import { getEpochDayId } from "common/utils/time.utils";
import { getDailySnapshot } from "./get-snapshot";
import { processDailySnapshotInDb } from "./process-snapshot-in-db";
import { config, getRewardDistributions, getRewardsDistributionsForNetworks } from "common/config";

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
    console.info(`Processing daily claims for day ${dayId}`);
    const weekId = Math.floor(dayId / 7);

    const rewardDistributionsForEligilbeNetworks = getRewardsDistributionsForNetworks(weekId, [
      ...Object.values(EligibleNetwork),
    ] as unknown as Network[]);

    const { parsedPositionSnapshot } = await getDailySnapshot(dayId, rewardDistributionsForEligilbeNetworks);
    const snapshot: PositionSnapshot = parsedPositionSnapshot.map((entry) => ({
      userAddress: entry.userAddress.toLowerCase(),
      accountAddress: entry.accountAddress.toLowerCase(),
      amount: BigNumber.from(entry.amount),
      poolAddress: entry.poolAddress.toLowerCase(),
      positionType: entry.positionType,
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
