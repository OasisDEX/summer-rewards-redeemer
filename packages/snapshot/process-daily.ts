import { config, getRewardsDistributionsForNetworks } from "common/config";
import { EligibleNetwork, Network, ParsedPositionSnapshot, ParsedUserSnapshot, PositionSnapshot } from "common/types";
import { getEpochDayId } from "common/utils/time.utils";
import { BigNumber } from "ethers";

import { getDailySnapshot } from "./get-snapshot";
import { processDailySnapshotInDb } from "./process-snapshot-in-db";

/**
 * Processes daily claims for a given array of day IDs.
 * @param dayIds An array of day IDs to process claims for. Defaults to the previous epoch day ID.
 * @returns Returns an array of objects containing the parsed user and position snapshots for multiple days and single network.
 */
export async function processDailyClaims(dayIds = [getEpochDayId() - 1]): Promise<
  {
    parsedUserSnapshot: ParsedUserSnapshot;
    parsedPositionSnapshot: ParsedPositionSnapshot;
  }[]
> {
  const currentDay = getEpochDayId();
  if (dayIds.length === 0) {
    throw new Error("No day IDs provided");
  }
  const snapshotsByDay = [];
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
    const rewardDistributions = config.getRewardDistributions(weekId, config.network);
    // get the daily snapshot for the network we are processing
    const { parsedPositionSnapshot, parsedUserSnapshot } = await getDailySnapshot(dayId, rewardDistributions);
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
    snapshotsByDay.push({ parsedPositionSnapshot, parsedUserSnapshot });
  }
  return snapshotsByDay;
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

/**
 * Processes daily claims for eligible networks.
 *
 * @param dayIds - An array of day IDs to process. Defaults to the previous day ID.
 * @returns A promise that resolves to an array of parsed user and position snapshots for each network and multiple days.
 */
export async function processEligibleNetworksDailyClaims(
  dayIds = [getEpochDayId() - 1]
): Promise<{ parsedUserSnapshot: ParsedUserSnapshot; parsedPositionSnapshot: ParsedPositionSnapshot }[][]> {
  const snapshotsByNetwork = [];
  for (const network of Object.values(EligibleNetwork)) {
    config.usedNetwork = network;
    const snapshot = await processDailyClaims(dayIds);
    snapshotsByNetwork.push(snapshot);
  }
  return snapshotsByNetwork;
}
