import { ajnaV1usersSnapshot, config, debug, getWeeklyReward, getWeeklyRewardForNetwork } from "common/config";
import { ZERO, ZERO_ADDRESS } from "common/constants";
import {
  BorrowDailyRewards,
  DailyBonusRewards,
  DailyRewards,
  Distribution,
  DistributionAmount,
  DistributionAmountWithLendRatio,
  EarnDailyRewards,
  ParsedPositionSnapshot,
  ParsedUserSnapshot,
  PositionRewardDetails,
  PositionSnapshot,
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
import { groupBy, map } from "lodash";

/**
 * Retrieves and returns a parsed weekly snapshot of user rewards for a specified week.
 *
 * @async
 * @param {number} weekId - The id of the week for which to retrieve the weekly snapshot.
 * @param {Distribution[]} rewardDistributions - An array of `Distribution` objects containing the reward distribution data for each pool.
 * @returns  - A promise that resolves to a `ParsedUserSnapshot` object representing the weekly rewards snapshot for core and bonus rewards.
 */
export const getWeeklySnapshot = async (
  weekId: number,
  rewardDistributions: Distribution[]
): Promise<{ weeklyCoreRewardsSnaphot: ParsedUserSnapshot; weeklyBonusRewardsSnaphot: ParsedUserSnapshot }> => {
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
): Promise<{
  parsedUserSnapshot: ParsedUserSnapshot;
  parsedPositionSnapshot: ParsedPositionSnapshot;
  parsedUserBonusSnapshot: ParsedUserSnapshot;
  parsedPositionBonusSnapshot: ParsedPositionSnapshot;
}> => {
  console.info(`Fetching daily data for day ${dayId}`);
  const data = await fetchDailyData(dayId, rewardDistributions);
  if (!data.day) {
    throw new Error(`No daily rewards found for day ${dayId}`);
  }
  return calculateDailySnapshot(data, dayId, rewardDistributions);
};

/**
 * Calculates the weekly snapshot of core rewards and bonus rewards.
 * @param data - The weekly rewards query data.
 * @param weekId - The ID of the week.
 * @param rewardDistributions - The reward distributions for each pool.
 * @param totalWeeklyDistribution - The total weekly distribution amount (optional).
 * @returns An object containing the weekly core rewards snapshot and weekly bonus rewards snapshot.
 * @throws Error if no weekly rewards found for the specified week.
 * @throws Error if an invalid pool address is encountered in the reward distributions.
 */
export function calculateWeeklySnapshot(
  data: WeeklyRewardsQuery,
  weekId: number,
  rewardDistributions: Distribution[],
  totalWeeklyDistribution?: BigNumber
): { weeklyCoreRewardsSnaphot: ParsedUserSnapshot; weeklyBonusRewardsSnaphot: ParsedUserSnapshot } {
  if (!data.week) {
    throw new Error(`No weekly rewards found for week ${weekId}`);
  }

  const days = data.week.days;
  totalWeeklyDistribution = totalWeeklyDistribution || getWeeklyReward(weekId);
  const totalWeeklyDistributionPerPool: DistributionAmount = {};

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
    const dailyRewards = calculateDailyRewards(day, totalWeeklyDistributionPerPool as DistributionAmountWithLendRatio);
    weeklyRewards.push(dailyRewards);
  }
  const weeklyUserRewards: UserRewardDetails = {};
  const weeklyUserBonusRewards: UserRewardDetails = {};
  for (const day of weeklyRewards) {
    for (const [userAddress, dailyRewards] of Object.entries(day.dailyUserRewards)) {
      if (!weeklyUserRewards[userAddress]) {
        weeklyUserRewards[userAddress] = { amount: dailyRewards.amount };
      } else {
        weeklyUserRewards[userAddress].amount = weeklyUserRewards[userAddress].amount.add(dailyRewards.amount);
      }
    }
    for (const [userAddress, dailyBonusRewards] of Object.entries(day.dailyUserBonusRewards)) {
      if (!weeklyUserBonusRewards[userAddress]) {
        weeklyUserBonusRewards[userAddress] = { amount: dailyBonusRewards.amount };
      } else {
        weeklyUserBonusRewards[userAddress].amount = weeklyUserBonusRewards[userAddress].amount.add(
          dailyBonusRewards.amount
        );
      }
    }
  }
  const weeklyRewardsSnapshot = Object.keys(weeklyUserRewards).map((userAddress) => ({
    userAddress,
    amount: weeklyUserRewards[userAddress].amount,
  }));

  const weeklyBonusRewardsSnapshot = Object.keys(weeklyUserBonusRewards).map((userAddress) => ({
    userAddress,
    amount: weeklyUserBonusRewards[userAddress].amount,
  }));

  // validate if the total amount of rewards distributed in the weekly snapshot does not exceed the total weekly rewards available.
  // it's processd network by netowrk so we need to validate the total amount for the network we are processing
  const totalWeeklyDistributionForProcessedNetwork = getWeeklyRewardForNetwork(weekId, rewardDistributions);
  validateTotalAmount(weeklyRewardsSnapshot, totalWeeklyDistributionForProcessedNetwork);
  validateTotalAmount(weeklyBonusRewardsSnapshot, totalWeeklyDistributionForProcessedNetwork);

  return {
    weeklyCoreRewardsSnaphot: weeklyRewardsSnapshot.map((entry) => ({
      userAddress: entry.userAddress.toLowerCase(),
      amount: entry.amount.toHexString(),
    })),
    weeklyBonusRewardsSnaphot:
      config.bonusRewardsEndWeek >= weekId
        ? weeklyBonusRewardsSnapshot.map((entry) => ({
            userAddress: entry.userAddress.toLowerCase(),
            amount: entry.amount.toHexString(),
          }))
        : [],
  };
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
): {
  parsedUserSnapshot: ParsedUserSnapshot;
  parsedPositionSnapshot: ParsedPositionSnapshot;
  parsedUserBonusSnapshot: ParsedUserSnapshot;
  parsedPositionBonusSnapshot: ParsedPositionSnapshot;
} {
  if (!data.day) {
    throw new Error(`No weekly rewards found for day ${dayId}`);
  }
  const weekId = +data.day.week.id;
  const day = data.day;
  const totalWeeklyDistributionPerPool: DistributionAmount = {};
  totalWeeklyDistribution = totalWeeklyDistribution || getWeeklyReward(weekId);

  const totalDailyDistributionForProcessedNetwork = getWeeklyRewardForNetwork(weekId, rewardDistributions).div(7);

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

  const dailyRewards = calculateDailyRewards(day, totalWeeklyDistributionPerPool as DistributionAmountWithLendRatio);

  const dailyUserRewardsSnapshot = Object.keys(dailyRewards.dailyUserRewards).map((userAddress) => ({
    userAddress,
    amount: dailyRewards.dailyUserRewards[userAddress].amount,
  }));
  const dailyPositionRewardsSnapshot = dailyRewards.dailyPositionRewards;

  const dailyUserBonusRewardsSnapshot = Object.keys(dailyRewards.dailyUserBonusRewards).map((userAddress) => ({
    userAddress,
    amount: dailyRewards.dailyUserBonusRewards[userAddress].amount,
  }));

  const dailyPositionBonusRewardsSnapshot = dailyRewards.dailyPositionBonusRewards.map((position) => ({
    userAddress: position.userAddress,
    accountAddress: position.accountAddress,
    poolAddress: position.poolAddress,
    positionType: position.positionType,
    amount: position.amount,
  }));

  validateTotalAmount(dailyUserRewardsSnapshot, totalDailyDistributionForProcessedNetwork);
  validateTotalAmount(dailyPositionRewardsSnapshot, totalDailyDistributionForProcessedNetwork);
  validateTotalAmount(dailyUserBonusRewardsSnapshot, totalDailyDistributionForProcessedNetwork);
  validateTotalAmount(dailyPositionBonusRewardsSnapshot, totalDailyDistributionForProcessedNetwork);

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
    parsedUserBonusSnapshot:
      config.bonusRewardsEndWeek >= weekId
        ? dailyUserBonusRewardsSnapshot.map((entry) => ({
            userAddress: entry.userAddress.toLowerCase(),
            amount: entry.amount.toHexString(),
          }))
        : [],
    parsedPositionBonusSnapshot:
      config.bonusRewardsEndWeek >= weekId
        ? dailyPositionBonusRewardsSnapshot.map((entry) => ({
            userAddress: entry.userAddress.toLowerCase(),
            accountAddress: entry.accountAddress.toLowerCase(),
            poolAddress: entry.poolAddress.toLowerCase(),
            positionType: entry.positionType,
            amount: entry.amount.toHexString(),
          }))
        : [],
  };
}

/**
 * Calculates the bonus daily rewards based on the provided parameters.
 *
 * @param dailyPositionRewardsSnapshot - The snapshot of position rewards for the day.
 * @param totalWeeklyDistributionPerPool - The total weekly distribution per pool.
 * @param dayId - The ID of the day.
 * @returns The daily rewards object containing the calculated rewards.
 */
function calculateBonusDailyRewards(
  dailyPositionRewardsSnapshot: PositionSnapshot,
  totalWeeklyDistributionPerPool: DistributionAmountWithLendRatio,
  dayId: string
): DailyBonusRewards {
  // we take all the daily position rewards and leave only the ones owned by Ajna v1 participants
  const filteredRewardsSnapshot = dailyPositionRewardsSnapshot.filter((position) =>
    ajnaV1usersSnapshot.map((address) => address.toLowerCase()).includes(position.userAddress.toLowerCase())
  );
  // we group the positions by the pool address
  const groupedByPoolAddress = groupBy(filteredRewardsSnapshot, "poolAddress");

  const dailyPositionBonusRewards = map(groupedByPoolAddress, (positions, poolAddress) => {
    // we sum the amount of rewards by v1 participants in the pool ( earn and borrow) - this will be used to calcualte new shares
    const summedPoolCoreRewards = positions.reduce((acc, position) => acc.add(position.amount), BigNumber.from(0));
    return positions
      .filter((position) => {
        const poolWeeklyRewards = getPoolWeeklyRewards(
          position.positionType === AjnaRewardsPositionType.earn,
          poolAddress,
          totalWeeklyDistributionPerPool
        );
        return !!poolWeeklyRewards;
      })
      .map((position) => {
        // we take the full weekly amount again becasue all the earn/borrow ratios etc are already taken ito account in the core rewards - we are generous in the first days if the pool is not fully utilized
        const poolWeeklyRewards = totalWeeklyDistributionPerPool[poolAddress].total;
        // we are sure it exists because of the filter statement above, we get the daily rewaeards for the pool
        const poolDailyRewards = poolWeeklyRewards!.div(7);
        // we calcualte the share of the position rewards in all rewards in the pool (for eligible positions) and multiply by multiplier (we operate on integers)
        const positionShare = position.amount.mul(config.multiplier).div(summedPoolCoreRewards);
        // we calculate the daily rewards for the user in the pool ( divide by the multiplier to get the correct amount)
        const userPoolDailyRewards = poolDailyRewards.mul(positionShare).div(config.multiplier);
        return {
          ...position,
          amount: userPoolDailyRewards,
        };
      });
  }).flat();

  const dailyUserBonusRewards = getDailyPerUserAwards(dailyPositionBonusRewards);
  const totalDailyBonusRewards = Object.values(dailyUserBonusRewards).reduce((a, b) => a.add(b.amount), ZERO);
  const dailyBonusRewards: DailyBonusRewards = {
    id: dayId,
    dailyUserBonusRewards,
    dailyPositionBonusRewards,
    totalDailyBonusRewards,
  };
  return dailyBonusRewards;
}

/**
 * Calculates rewards for a given day and total weekly distribution per pool.
 *
 * @param {WeekDay} day - A `WeekDay` object representing the day of the calculation.
 * @param {DistributionAmountWithLendRatio} totalWeeklyDistributionPerPool - An object containing the total weekly reward distribution per pool address.
 *
 * @returns {DailyRewards} - A `DailyRewards` object that represents the daily rewards for the specified day, contains day id, total amount, and rewards for each user.
 */
function calculateDailyRewards(
  day: WeekDay,
  totalWeeklyDistributionPerPool: DistributionAmountWithLendRatio
): DailyRewards {
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
  const dailyUserRewards: UserRewardDetails = getDailyPerUserAwards(dailyPositionRewards);

  console.info(`Total rewards count for day ${day.id}: ${totalRewardsCount}`);

  const totalDailyRewards = Object.values(dailyUserRewards).reduce((a, b) => a.add(b.amount), ZERO);

  const dailyBonusRewards = calculateBonusDailyRewards(
    dailyPositionRewards,
    totalWeeklyDistributionPerPool as DistributionAmountWithLendRatio,
    day.id
  );

  const dailyRewards: DailyRewards = {
    id: day.id,
    dailyUserRewards,
    dailyPositionRewards,
    totalDailyRewards,
    dailyUserBonusRewards: dailyBonusRewards.dailyUserBonusRewards,
    dailyPositionBonusRewards: dailyBonusRewards.dailyPositionBonusRewards,
    totalDailyBonusRewards: dailyBonusRewards.totalDailyBonusRewards,
  };
  return dailyRewards;
}

/**
 * Calculates the weekly rewards for a pool.
 *
 * @param isEarn - Indicates whether the pool is for earning or lending.
 * @param poolAddress - The address of the pool.
 * @param totalWeeklyDistributionPerPool - The total weekly distribution per pool.
 * @returns The calculated weekly rewards for the pool, or null if no rewards are found.
 */
const getPoolWeeklyRewards = (
  isEarn: boolean,
  poolAddress: string,
  totalWeeklyDistributionPerPool: DistributionAmountWithLendRatio
): BigNumber | null => {
  let poolWeeklyRewards: BigNumber;
  try {
    let ratio: number;
    if (isEarn) {
      ratio = totalWeeklyDistributionPerPool[poolAddress].lendRatio;
    } else {
      ratio = roundToNearest(1 - totalWeeklyDistributionPerPool[poolAddress].lendRatio, 0.01);
    }
    poolWeeklyRewards = totalWeeklyDistributionPerPool[poolAddress].total.mul(ratio * 1000).div(1000);
    return poolWeeklyRewards;
  } catch (error) {
    console.warn(
      `No weekly rewards found for pool ${poolAddress} - check the config - rewardDistributions. Might be a network mismatch`
    );
    console.warn(error);
    return null;
  }
};

function getDailyPerUserAwards(dailyPositionRewards: PositionRewardDetails[]): UserRewardDetails {
  return dailyPositionRewards.reduce((acc, reward) => {
    if (!acc[reward.userAddress]) {
      // If the userAddress is not in the accumulator, add it with the current amount
      acc[reward.userAddress] = { amount: reward.amount };
    } else {
      // If the userAddress is already in the accumulator, add the current amount to the existing amount
      acc[reward.userAddress].amount = acc[reward.userAddress].amount.add(reward.amount);
    }
    return acc;
  }, {} as UserRewardDetails);
}

/**
 * Calculates daily rewards for a given array of rewards and weekly rewards per pool, and adds them to the dailyPositionRewards object.
 *
 * @param {(BorrowDailyRewards|EarnDailyRewards)} rewardsArray - An array of `BorrowDailyRewards` or `EarnDailyRewards` objects.
 * @param {DistributionAmountWithLendRatio} totalWeeklyDistributionPerPool - An object containing the total weekly reward distribution per pool address.
 * @param {PositionRewardDetails[]} dailyPositionRewards - An array containing the daily rewards for each position.
 * @param {boolean} isEarn - Is the rewards array for Earn or Borrow.
 */
function calculatePositionDailyRewards(
  rewardsArray: BorrowDailyRewards | EarnDailyRewards,
  totalWeeklyDistributionPerPool: DistributionAmountWithLendRatio,
  dailyPositionRewards: PositionRewardDetails[],
  isEarn: boolean
): void {
  for (const reward of rewardsArray) {
    const poolAddress = reward.pool.id.toLowerCase();
    const poolWeeklyRewards = getPoolWeeklyRewards(isEarn, poolAddress, totalWeeklyDistributionPerPool);
    if (!poolWeeklyRewards) {
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
