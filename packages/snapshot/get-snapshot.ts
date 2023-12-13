import { config, debug, getWeeklyReward, getWeeklyRewardForNetwork } from "common/config";
import { ZERO, ZERO_ADDRESS } from "common/constants";
import {
  BorrowDailyRewards,
  DailyRewards,
  Distribution,
  DistributionAmount,
  EarnDailyRewards,
  ParsedPositionSnapshot,
  ParsedUserSnapshot,
  PositionRewardDetails,
  UserRewardDetails,
  UserSnapshot,
  WeekDay,
  WeeklyRewards,
} from "common/types";
import { fetchDailyData, fetchWeeklyData } from "common/utils/graph.utils";
import { roundToNearest } from "common/utils/time.utils";
import { AjnaRewardsPositionType } from "database";
import { BigNumber } from "ethers";
import { DailyRewardsQuery, WeeklyRewardsQuery } from "graphclient";
/**
 * Retrieves and returns a parsed weekly snapshot of user rewards for a specified week.
 *
 * @async
 * @param {number} weekId - The id of the week for which to retrieve the weekly snapshot.
 * @param {Distribution[]} rewardDistributions - An array of `Distribution` objects containing the reward distribution data for each pool.
 * @returns {Promise<ParsedUserSnapshot>} - A promise that resolves to a `ParsedUserSnapshot` object representing the weekly rewards snapshot.
 */
export const getWeeklySnapshot = async (
  weekId: number,
  rewardDistributions: Distribution[]
): Promise<ParsedUserSnapshot> => {
  debug(`Fetching weekly data for week ${weekId}`);
  const data = await fetchWeeklyData(weekId, rewardDistributions);
  debug(`Fetched weekly data for week ${weekId}`);
  if (!data.week) {
    throw new Error(`No weekly rewards found for day ${weekId}`);
  }
  return calculateWeeklySnapshot(data, weekId, rewardDistributions);
};

/**
 * Retrieves and returns a parsed daily snapshot of user rewards for a specified day.
 * @dev assume the rewardDistributions are validated before passing into this method,
 * thats becasue we validate the sum of shares for mutliple networks and this method handles only one network so the sum of shares is !=1
 * @async
 * @param {number} dayId - The id of the day for which to retrieve the daily snapshot.
 *
 * @returns {Promise<ParsedUserSnapshot>} - A promise that resolves to a `ParsedUserSnapshot` object representing the daily rewards snapshot.
 */
export const getDailySnapshot = async (
  dayId: number,
  rewardDistributions: Distribution[]
): Promise<{ parsedUserSnapshot: ParsedUserSnapshot; parsedPositionSnapshot: ParsedPositionSnapshot }> => {
  console.info(`Fetching daily data for day ${dayId}`);
  const data = await fetchDailyData(dayId, rewardDistributions);
  if (!data.day) {
    throw new Error(`No daily rewards found for day ${dayId}`);
  }
  return calculateDailySnapshot(data, dayId, rewardDistributions);
};

/**
 * Calculates weekly rewards snapshot for a given week and returns it in a ParsedUserSnapshot object.
 *
 * @param {WeeklyRewardsQuery} data - A `WeeklyRewardsQuery` object containing the data needed to calculate the weekly snapshot.
 * @param {number} weekId - The id of the week for which to calculate the weekly snapshot.
 * @param {Distribution[]} rewardDistributions - An array of `Distribution` objects containing the reward distribution data for each pool.
 * @returns {ParsedUserSnapshot} - A `ParsedUserSnapshot` object representing the weekly rewards snapshot.
 */
export function calculateWeeklySnapshot(
  data: WeeklyRewardsQuery,
  weekId: number,
  rewardDistributions: Distribution[],
  totalWeeklyDistribution?: BigNumber
): ParsedUserSnapshot {
  if (!data.week) {
    throw new Error(`No weekly rewards found for week ${weekId}`);
  }

  const days = data.week.days;
  totalWeeklyDistribution = totalWeeklyDistribution || getWeeklyReward(weekId);
  const totalWeeklyDistributionPerPool: { [poolAddress: string]: { total: BigNumber; lendRatio?: number } } = {};

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
  const weeklyUserRewards: UserRewardDetails = {};
  for (const day of weeklyRewards) {
    for (const [userAddress, dailyRewards] of Object.entries(day.dailyUserRewards)) {
      if (!weeklyUserRewards[userAddress]) {
        weeklyUserRewards[userAddress] = { amount: dailyRewards.amount };
      } else {
        weeklyUserRewards[userAddress].amount = weeklyUserRewards[userAddress].amount.add(dailyRewards.amount);
      }
    }
  }
  const weeklyRewardsSnapshot = Object.keys(weeklyUserRewards).map((userAddress) => ({
    userAddress,
    amount: weeklyUserRewards[userAddress].amount,
  }));

  // validate if the total amount of rewards distributed in the weekly snapshot does not exceed the total weekly rewards available.
  // it's processd network by netowrk so we need to validate the total amount for the network we are processing
  const totalWeeklyDistributionForProcessedNetwork = getWeeklyRewardForNetwork(weekId, rewardDistributions);
  validateTotalAmount(weeklyRewardsSnapshot, totalWeeklyDistributionForProcessedNetwork);

  return weeklyRewardsSnapshot.map((entry) => ({
    userAddress: entry.userAddress.toLowerCase(),
    amount: entry.amount.toHexString(),
  }));
}
/**
 * Calculates daily rewards snapshot for a given day and returns it in a ParsedUserSnapshot object.
 *
 * @param {DailyRewardsQuery} data - A `DailyRewardsQuery` object containing the data needed to calculate the daily snapshot.
 * @param {number} dayId - The id of the day for which to calculate the daily snapshot.
 *
 * @returns {ParsedUserSnapshot} - A `ParsedUserSnapshot` object representing the daily rewards snapshot.
 */
export function calculateDailySnapshot(
  data: DailyRewardsQuery,
  dayId: number,
  rewardDistributions: Distribution[],
  totalWeeklyDistribution?: BigNumber
): { parsedUserSnapshot: ParsedUserSnapshot; parsedPositionSnapshot: ParsedPositionSnapshot } {
  if (!data.day) {
    throw new Error(`No weekly rewards found for day ${dayId}`);
  }

  const day = data.day;
  const totalWeeklyDistributionPerPool: { [poolAddress: string]: { total: BigNumber; lendRatio?: number } } = {};
  totalWeeklyDistribution = totalWeeklyDistribution || getWeeklyReward(+data.day.week.id);

  const totalDailyDistributionForProcessedNetwork = getWeeklyRewardForNetwork(
    +data.day.week.id,
    rewardDistributions
  ).div(7);

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

  const dailyUserRewardsSnapshot = Object.keys(dailyRewards.dailyUserRewards).map((userAddress) => ({
    userAddress,
    amount: dailyRewards.dailyUserRewards[userAddress].amount,
  }));
  const dailyPositionRewardsSnapshot = dailyRewards.dailyPositionRewards.map((position) => ({
    userAddress: position.userAddress,
    accountAddress: position.accountAddress,
    poolAddress: position.poolAddress,
    positionType: position.positionType,
    amount: position.amount,
  }));
  validateTotalAmount(dailyUserRewardsSnapshot, totalDailyDistributionForProcessedNetwork);
  validateTotalAmount(dailyPositionRewardsSnapshot, totalDailyDistributionForProcessedNetwork);
  return {
    parsedUserSnapshot: dailyUserRewardsSnapshot.map((entry) => ({
      userAddress: entry.userAddress.toLowerCase(),
      amount: entry.amount.toHexString(),
    })),
    parsedPositionSnapshot: dailyPositionRewardsSnapshot.map((entry) => ({
      userAddress: entry.userAddress.toLowerCase(),
      accountAddress: entry.accountAddress.toLowerCase(),
      poolAddress: entry.poolAddress.toLowerCase(),
      positionType: entry.positionType,
      amount: entry.amount.toHexString(),
    })),
  };
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
  const dailyPositionRewards: PositionRewardDetails[] = [];
  let totalRewardsCount = 0;

  // we calculate daily rewards for each item from subgraph - borrow and earn - all positions
  if (day.borrowDailyRewards && day.borrowDailyRewards.length > 0) {
    totalRewardsCount += day.borrowDailyRewards.length;
    calculatePositionDailyRewards(day.borrowDailyRewards, totalWeeklyDistributionPerPool, dailyPositionRewards, false);
  }
  if (day.earnDailyRewards && day.earnDailyRewards.length > 0) {
    totalRewardsCount += day.earnDailyRewards.length;
    calculatePositionDailyRewards(day.earnDailyRewards, totalWeeklyDistributionPerPool, dailyPositionRewards, true);
  }

  // we reduce the dailyPositionRewards to dailyUserRewards to get the total amount per user
  const dailyUserRewards: UserRewardDetails = dailyPositionRewards.reduce((acc, reward) => {
    if (!acc[reward.userAddress]) {
      // If the userAddress is not in the accumulator, add it with the current amount
      acc[reward.userAddress] = { amount: reward.amount };
    } else {
      // If the userAddress is already in the accumulator, add the current amount to the existing amount
      acc[reward.userAddress].amount = acc[reward.userAddress].amount.add(reward.amount);
    }
    return acc;
  }, {} as UserRewardDetails);

  console.info(`Total rewards count for day ${day.id}: ${totalRewardsCount}`);

  const totalDailyRewards = Object.values(dailyUserRewards).reduce((a, b) => a.add(b.amount), ZERO);
  const dailyRewards: DailyRewards = {
    id: day.id,
    dailyUserRewards,
    dailyPositionRewards,
    totalDailyRewards,
  };
  return dailyRewards;
}
/**
 * Calculates daily rewards for a given array of rewards and weekly rewards per pool, and adds them to the dailyPositionRewards object.
 *
 * @param {(BorrowDailyRewards|EarnDailyRewards)} rewardsArray - An array of `BorrowDailyRewards` or `EarnDailyRewards` objects.
 * @param {DistributionAmount} totalWeeklyDistributionPerPool - An object containing the total weekly reward distribution per pool address.
 * @param {PositionRewardDetails[]} dailyPositionRewards - An array containing the daily rewards for each position.
 * @param {boolean} isEarn - Is the rewards array for Earn or Borrow.
 */
function calculatePositionDailyRewards(
  rewardsArray: BorrowDailyRewards | EarnDailyRewards,
  totalWeeklyDistributionPerPool: DistributionAmount,
  dailyPositionRewards: PositionRewardDetails[],
  isEarn: boolean
): void {
  for (const reward of rewardsArray) {
    const poolAddress = reward.pool.id.toLowerCase();
    let poolWeeklyRewards: BigNumber;
    try {
      let ratio: number;
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
      dailyPositionRewards.push({
        userAddress,
        poolAddress,
        accountAddress: reward.account!.id,
        amount: userPoolDailyRewards,
        positionType: isEarn ? AjnaRewardsPositionType.earn : AjnaRewardsPositionType.borrow,
      });
    }
  }
}
/**
 * Validates that the total amount of rewards distributed in a weekly snapshot does not exceed the total weekly rewards available.
 *
 * @param {UserSnapshot} weeklyRewardsSnapshot - An array of objects, where each object contains the address and the amount of rewards earned by a user in a week.
 * @param {BigNumber} totalWeeklyDistribution - The total amount of rewards available to be distributed in a week.
 *
 * @throws {Error} - Throws an error if the total amount of rewards distributed in the weekly snapshot exceeds the total weekly rewards available.
 */
function validateTotalAmount(weeklyRewardsSnapshot: UserSnapshot, totalWeeklyDistribution: BigNumber) {
  const weeklyRewardsSnapshotTotal = weeklyRewardsSnapshot.reduce((a, b) => a.add(b.amount), ZERO);
  if (weeklyRewardsSnapshotTotal.gt(totalWeeklyDistribution)) {
    throw new Error("Weekly rewards snapshot total is greater than total weekly rewards");
  }
}
