import { config, getRewardsDistributionsForNetworks } from "common/config";
import {
  EligibleNetwork,
  Network,
  ParsedPositionSnapshot,
  ParsedUserSnapshot,
  PositionSnapshot,
  TestNetwork,
} from "common/types";
import { getEpochDayId } from "common/utils/time.utils";
import { AjnaRewardsSource } from "database";
import { BigNumber } from "ethers";

import { getDailySnapshot } from "./get-snapshot";
import { processDailySnapshotInDb } from "./process-snapshot-in-db";

/**
 * Processes daily claims for the specified day IDs and networks.
 *
 * @param dayIds - An array of day IDs to process. Defaults to the previous day.
 * @param networksToProcess - An array of networks to process calims for.
 * @returns An array of objects containing parsed user and position snapshots for each day.
 * @throws Error if no day IDs are provided.
 */
export async function processDailyClaims(
  dayIds = [getEpochDayId() - 1],
  networksToProcess: Network[]
): Promise<
  {
    parsedUserSnapshot: ParsedUserSnapshot;
    parsedPositionSnapshot: ParsedPositionSnapshot;
    parsedUserBonusSnapshot: ParsedUserSnapshot;
    parsedPositionBonusSnapshot: ParsedPositionSnapshot;
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
    getRewardsDistributionsForNetworks(weekId, [...networksToProcess]);
    // get reward distributions for the network we are processing
    const rewardDistributions = config.getRewardDistributions(weekId, config.network);
    // get the daily snapshot for the network we are processing
    const { parsedPositionSnapshot, parsedUserSnapshot, parsedPositionBonusSnapshot, parsedUserBonusSnapshot } =
      await getDailySnapshot(dayId, rewardDistributions);
    // convert the daily snapshot to the format we need for the DB
    const coreSnapshot: PositionSnapshot = parsedPositionSnapshot.map((entry) => ({
      userAddress: entry.userAddress.toLowerCase(),
      accountAddress: entry.accountAddress.toLowerCase(),
      amount: BigNumber.from(entry.amount),
      poolAddress: entry.poolAddress.toLowerCase(),
      positionType: entry.positionType,
    }));
    const bonusSnapshot: PositionSnapshot = parsedPositionBonusSnapshot.map((entry) => ({
      userAddress: entry.userAddress.toLowerCase(),
      accountAddress: entry.accountAddress.toLowerCase(),
      amount: BigNumber.from(entry.amount),
      poolAddress: entry.poolAddress.toLowerCase(),
      positionType: entry.positionType,
    }));
    // add the daily snapshot to the DB
    await processDailySnapshotInDb(coreSnapshot, dayId);
    // TODO: cleanup bonus distributions
    // await processDailySnapshotInDb(bonusSnapshot, dayId, AjnaRewardsSource.bonus);
    snapshotsByDay.push({
      parsedPositionSnapshot,
      parsedUserSnapshot,
      parsedPositionBonusSnapshot,
      parsedUserBonusSnapshot,
    });
  }
  return snapshotsByDay;
}

/**
 * Processes daily claims for all networks for a given array of day IDs.
 *
 * @param dayIds - An array of day IDs to process. Defaults to the previous day ID.
 * @returns A Promise that resolves when all daily claims have been processed.
 */
export async function processAllNetworksDailyClaims(dayIds = [getEpochDayId() - 1]): Promise<void> {
  for (const network of Object.values(TestNetwork)) {
    config.currentlyConfiguredNetwork = network;
    await processDailyClaims(dayIds, [...Object.values(TestNetwork)] as unknown as Network[]);
  }
  await processEligibleNetworksDailyClaims(dayIds);
}

/**
 * Processes daily claims for eligible networks ( non testnets).
 *
 * @param dayIds - An array of day IDs to process. Defaults to the previous day ID.
 * @returns A promise that resolves to an array of parsed user and position snapshots for each network and multiple days.
 */
export async function processEligibleNetworksDailyClaims(
  dayIds = [getEpochDayId() - 1]
): Promise<{ parsedUserSnapshot: ParsedUserSnapshot; parsedPositionSnapshot: ParsedPositionSnapshot }[][]> {
  const snapshotsByNetwork = [];
  for (const network of Object.values(EligibleNetwork)) {
    config.currentlyConfiguredNetwork = network;
    const snapshot = await processDailyClaims(dayIds, [...Object.values(EligibleNetwork)] as unknown as Network[]);
    snapshotsByNetwork.push(snapshot);
  }
  return snapshotsByNetwork;
}
