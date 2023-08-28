import { BigNumber } from "ethers";

import { DailyRewardsQuery, WeeklyRewardsQuery } from "graphclient";
import { config, getRewardDistributions, getWeeklyReward } from "common/config";
import { ZERO, ZERO_ADDRESS } from "common/constants";
import {
  BorrowDailyRewards,
  DailyRewards,
  DistributionAmount,
  EarnDailyRewards,
  ParsedSnapshot,
  Snapshot,
  UserRewardsAmount,
  WeekDay,
  WeeklyRewards,
} from "common/types";
import { roundToNearest } from "common/utils/time.utils";
import { fetchWeeklyData, fetchDailyData } from "common/utils/graph.utils";
/**
 * Retrieves and returns a parsed weekly snapshot of user rewards for a specified week.
 *
 * @async
 * @param {number} weekId - The id of the week for which to retrieve the weekly snapshot.
 *
 * @returns {Promise<ParsedSnapshot>} - A promise that resolves to a `ParsedSnapshot` object representing the weekly rewards snapshot.
 */
export const getWeeklySnapshot = async (weekId: number): Promise<ParsedSnapshot> => {
  const data = await fetchWeeklyData(weekId);
  if (!data.week) {
    throw new Error(`No weekly rewards found for day ${weekId}`);
  }
  return calculateWeeklySnapshot(data, weekId);
};
/**
 * Retrieves and returns a parsed daily snapshot of user rewards for a specified day.
 *
 * @async
 * @param {number} dayId - The id of the day for which to retrieve the daily snapshot.
 *
 * @returns {Promise<ParsedSnapshot>} - A promise that resolves to a `ParsedSnapshot` object representing the daily rewards snapshot.
 */
export const getDailySnapshot = async (dayId: number): Promise<ParsedSnapshot> => {
  console.log(`Fetching daily data for day ${dayId}`);
  const data = await fetchDailyData(dayId);
  if (!data.day) {
    throw new Error(`No daily rewards found for day ${dayId}`);
  }
  return calculateDailySnapshot(data, dayId);
};

/**
 * Calculates weekly rewards snapshot for a given week and returns it in a ParsedSnapshot object.
 *
 * @param {WeeklyRewardsQuery} data - A `WeeklyRewardsQuery` object containing the data needed to calculate the weekly snapshot.
 * @param {number} weekId - The id of the week for which to calculate the weekly snapshot.
 *
 * @returns {ParsedSnapshot} - A `ParsedSnapshot` object representing the weekly rewards snapshot.
 */
export function calculateWeeklySnapshot(data: WeeklyRewardsQuery, weekId: number): ParsedSnapshot {
  if (!data.week) {
    throw new Error(`No weekly rewards found for week ${weekId}`);
  }

  const days = data.week.days;

  const totalWeeklyDistribution = getWeeklyReward(weekId);
  const totalWeeklyDistributionPerPool: { [poolAddress: string]: { total: BigNumber; lendRatio?: number } } = {};
  const rewardDistributions = getRewardDistributions(+data.week.id);

  for (const pool of rewardDistributions) {
    if (pool.address === ZERO_ADDRESS) {
      throw new Error(`Invalid pool address: ${pool.address}. Fix the config`);
    }
    const total = BigNumber.from(pool.share * 1000)
      .mul(totalWeeklyDistribution)
      .div(1000);
    totalWeeklyDistributionPerPool[pool.address] = {
      total,
      lendRatio: pool.lendRatio ? pool.lendRatio : config.earnRewardsRatio,
    };
  }

  const weeklyRewards: WeeklyRewards = [];
  for (const day of days) {
    const dailyRewards = calculateDailyRewards(day, totalWeeklyDistributionPerPool);
    weeklyRewards.push(dailyRewards);
  }
  const weeklyUserRewards: { [userAddress: string]: BigNumber } = {};
  for (const day of weeklyRewards) {
    for (const [userAddress, dailyRewards] of Object.entries(day.dailyRewards)) {
      if (!weeklyUserRewards[userAddress]) {
        weeklyUserRewards[userAddress] = dailyRewards;
      } else {
        weeklyUserRewards[userAddress] = weeklyUserRewards[userAddress].add(dailyRewards);
      }
    }
  }
  const weeklyRewardsSnapshot = Object.keys(weeklyUserRewards).map((userAddress) => ({
    address: userAddress,
    amount: weeklyUserRewards[userAddress],
  }));
  validateTotalAmount(weeklyRewardsSnapshot, totalWeeklyDistribution);
  return weeklyRewardsSnapshot.map((entry) => ({
    address: entry.address.toLowerCase(),
    amount: entry.amount.toHexString(),
  }));
}
/**
 * Calculates daily rewards snapshot for a given day and returns it in a ParsedSnapshot object.
 *
 * @param {DailyRewardsQuery} data - A `DailyRewardsQuery` object containing the data needed to calculate the daily snapshot.
 * @param {number} dayId - The id of the day for which to calculate the daily snapshot.
 *
 * @returns {ParsedSnapshot} - A `ParsedSnapshot` object representing the daily rewards snapshot.
 */
export function calculateDailySnapshot(data: DailyRewardsQuery, dayId: number): ParsedSnapshot {
  if (!data.day) {
    throw new Error(`No weekly rewards found for day ${dayId}`);
  }

  const day = data.day;
  const totalWeeklyDistributionPerPool: { [poolAddress: string]: { total: BigNumber; lendRatio?: number } } = {};
  const totalWeeklyDistribution = getWeeklyReward(+data.day.week.id);
  const totalDailyDistribution = totalWeeklyDistribution.div(7);
  const rewardDistributions = getRewardDistributions(+day.week.id);

  for (const pool of rewardDistributions) {
    if (pool.address === ZERO_ADDRESS) {
      throw new Error(`Invalid pool address: ${pool.address}. Fix the config`);
    }
    const total = BigNumber.from(pool.share * 1000)
      .mul(totalWeeklyDistribution)
      .div(1000);
    totalWeeklyDistributionPerPool[pool.address] = {
      total,
      lendRatio: pool.lendRatio ? pool.lendRatio : config.earnRewardsRatio,
    };
  }

  const dailyRewards = calculateDailyRewards(day, totalWeeklyDistributionPerPool);

  const dailyRewardsSnapshot = Object.keys(dailyRewards.dailyRewards).map((userAddress) => ({
    address: userAddress,
    amount: dailyRewards.dailyRewards[userAddress],
  }));

  validateTotalAmount(dailyRewardsSnapshot, totalDailyDistribution);
  return dailyRewardsSnapshot.map((entry) => ({
    address: entry.address.toLowerCase(),
    amount: entry.amount.toHexString(),
  }));
}
/**
 * Calculates rewards for a given day and total weekly distribution per pool.
 *
 * @param {WeekDay} day - A `WeekDay` object representing the day of the calculation.
 * @param {DistributionAmount} totalWeeklyDistributionPerPool - An object containing the total weekly reward distribution per pool address.
 *
 * @returns {DailyRewards} - A `DailyRewards` object that represents the daily rewards for the specified day, contains day id, total amount, and rewards for each user.
 */
function calculateDailyRewards(day: WeekDay, totalWeeklyDistributionPerPool: DistributionAmount): DailyRewards {
  const dailyUsersRewards: UserRewardsAmount = {};
  let totalRewardsCount = 0;

  if (day.borrowDailyRewards && day.borrowDailyRewards.length > 0) {
    totalRewardsCount += day.borrowDailyRewards.length;
    calculateUsersDailyRewards(day.borrowDailyRewards, totalWeeklyDistributionPerPool, dailyUsersRewards, false);
  }
  if (day.earnDailyRewards && day.earnDailyRewards.length > 0) {
    totalRewardsCount += day.earnDailyRewards.length;
    calculateUsersDailyRewards(day.earnDailyRewards, totalWeeklyDistributionPerPool, dailyUsersRewards, true);
  }
  console.log(`Total rewards count for day ${day.id}: ${totalRewardsCount}`);
  const totalDailyRewards = Object.values(dailyUsersRewards).reduce((a, b) => a.add(b), ZERO);
  const dailyRewards: DailyRewards = {
    id: day.id,
    dailyRewards: dailyUsersRewards,
    totalDailyRewards,
  };
  return dailyRewards;
}
/**
 * Calculates daily rewards for a given array of rewards and weekly rewards per pool, and adds them to the dailyUserRewards object.
 *
 * @param {(BorrowDailyRewards|EarnDailyRewards)} rewardsArray - An array of `BorrowDailyRewards` or `EarnDailyRewards` objects.
 * @param {DistributionAmount} totalWeeklyDistributionPerPool - An object containing the total weekly reward distribution per pool address.
 * @param {UserRewardsAmount} dailyUserRewards - An object containing the daily rewards for each user.
 * @param {boolean} isEarn - Is the rewards array for Earn or Borrow.
 */
function calculateUsersDailyRewards(
  rewardsArray: BorrowDailyRewards | EarnDailyRewards,
  totalWeeklyDistributionPerPool: DistributionAmount,
  dailyUserRewards: UserRewardsAmount,
  isEarn: boolean
): void {
  for (const reward of rewardsArray) {
    const poolAddress = reward.pool.id;
    let poolWeeklyRewards;

    try {
      let ratio;
      if (isEarn) {
        ratio = totalWeeklyDistributionPerPool[poolAddress].lendRatio!;
      } else {
        ratio = roundToNearest(1 - totalWeeklyDistributionPerPool[poolAddress].lendRatio!, 0.01);
      }
      poolWeeklyRewards = totalWeeklyDistributionPerPool[poolAddress].total.mul(ratio * 1000).div(1000);
    } catch (error) {
      console.warn(
        `No weekly rewards found for pool ${poolAddress} - check the config - rewardDistributions. Might be a network mismatch`
      );
      console.warn(error);
      continue;
    }
    const poolDailyRewards = poolWeeklyRewards.div(7);
    const userAddress = reward.user!.id;
    const userShare = BigNumber.from(Math.floor(reward.reward * config.multiplier));
    const userPoolDailyRewards = poolDailyRewards.mul(userShare).div(config.multiplier);
    if (!userPoolDailyRewards.isZero()) {
      if (!dailyUserRewards[userAddress]) {
        dailyUserRewards[userAddress] = userPoolDailyRewards;
      } else {
        dailyUserRewards[userAddress] = dailyUserRewards[userAddress].add(userPoolDailyRewards);
      }
    }
  }
}
/**
 * Validates that the total amount of rewards distributed in a weekly snapshot does not exceed the total weekly rewards available.
 *
 * @param {Snapshot} weeklyRewardsSnapshot - An array of objects, where each object contains the address and the amount of rewards earned by a user in a week.
 * @param {BigNumber} totalWeeklyDistribution - The total amount of rewards available to be distributed in a week.
 *
 * @throws {Error} - Throws an error if the total amount of rewards distributed in the weekly snapshot exceeds the total weekly rewards available.
 */
function validateTotalAmount(weeklyRewardsSnapshot: Snapshot, totalWeeklyDistribution: BigNumber) {
  const weeklyRewardsSnapshotTotal = weeklyRewardsSnapshot.reduce((a, b) => a.add(b.amount), ZERO);
  if (weeklyRewardsSnapshotTotal.gt(totalWeeklyDistribution)) {
    console.log("weeklyRewardsSnapshotTotal", weeklyRewardsSnapshotTotal.toString());
    console.log("totalWeeklyDistribution", totalWeeklyDistribution.toString());
    throw new Error("Weekly rewards snapshot total is greater than total weekly rewards");
  }
}