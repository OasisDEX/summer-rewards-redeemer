import { config, getRewardsDistributionsForNetworks } from "common/config";
import { EligibleNetwork, Network, PositionSnapshot } from "common/types";
import { getEpochDayId } from "common/utils/time.utils";
import { BigNumber } from "ethers";

import { getDailySnapshot } from "./get-snapshot";
import { processDailySnapshotInDb } from "./process-snapshot-in-db";

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

    // this will validate the reward distributions for all eligible networks
    getRewardsDistributionsForNetworks(weekId, [...Object.values(EligibleNetwork)] as unknown as Network[]);
    // get reward distributions for the network we are processing
    const rewardDistributions = getRewardsDistributionsForNetworks(weekId, [
      config.usedNetwork,
    ] as unknown as Network[]);
    // get the daily snapshot for the network we are processing
    const { parsedPositionSnapshot } = await getDailySnapshot(dayId, rewardDistributions);
    // convert the daily snapshot to the format we need for the DB
    const snapshot: PositionSnapshot = parsedPositionSnapshot.map((entry) => ({
      userAddress: entry.userAddress.toLowerCase(),
      accountAddress: entry.accountAddress.toLowerCase(),
      amount: BigNumber.from(entry.amount),
      poolAddress: entry.poolAddress.toLowerCase(),
      positionType: entry.positionType,
    }));
    // add the daily snapshot to the DB
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
