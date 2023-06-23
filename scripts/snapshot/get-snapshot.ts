import { BigNumber } from "ethers";

import {
  DailyRewardsDocument,
  DailyRewardsQuery,
  Day,
  execute,
  WeeklyRewardsDocument,
  WeeklyRewardsQuery,
} from "../../.graphclient";
import { config, getWeeklyReward, rewardDistributions } from "../common/config";
import { ZERO } from "../common/constants";
import {
  BorrowDailyRewards,
  DailyRewards,
  EarnDailyRewards,
  ParsedSnapshot,
  WeekDay,
  WeeklyRewards,
} from "../common/types";

export const getWeeklySnapshot = async (weekId: number): Promise<ParsedSnapshot> => {
  const res = await execute(WeeklyRewardsDocument, { week: weekId });
  const data = res.data as WeeklyRewardsQuery;

  return calculateWeeklySnapshot(data, weekId);
};
export const getDailySnapshot = async (dayId: number): Promise<ParsedSnapshot> => {
  const res = await execute(DailyRewardsDocument, { day: dayId });
  const data = res.data as DailyRewardsQuery;

  return calculateDailySnapshot(data, dayId);
};
export function calculateWeeklySnapshot(data: WeeklyRewardsQuery, weekId: number): ParsedSnapshot {
  if (!data.week) {
    throw new Error(`No weekly rewards found for week ${weekId}`);
  }

  const days = data.week!.days;

  const totalWeeklyDistribution = getWeeklyReward(weekId);
  const totalWeeklyDistributionPerPool: { [poolAddress: string]: BigNumber } = {};

  for (const pool of rewardDistributions[config.network]) {
    totalWeeklyDistributionPerPool[pool.address] = BigNumber.from(pool.share * 100)
      .mul(totalWeeklyDistribution)
      .div(100);
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
    address: entry.address,
    amount: entry.amount.toHexString(),
  }));
}
export function calculateDailySnapshot(data: DailyRewardsQuery, dayId: number): ParsedSnapshot {
  if (!data.day) {
    throw new Error(`No weekly rewards found for day ${dayId}`);
  }

  const day = data.day;
  const totalWeeklyDistributionPerPool: { [poolAddress: string]: BigNumber } = {};
  const totalWeeklyDistribution = getWeeklyReward(+data.day.week.id);
  const totalDailyDistribution = totalWeeklyDistribution.div(7);

  for (const pool of rewardDistributions[config.network]) {
    totalWeeklyDistributionPerPool[pool.address] = BigNumber.from(pool.share * 100)
      .mul(totalWeeklyDistribution)
      .div(100);
  }

  const dailyRewards = calculateDailyRewards(day, totalWeeklyDistributionPerPool);

  const dailyRewardsSnapshot = Object.keys(dailyRewards.dailyRewards).map((userAddress) => ({
    address: userAddress,
    amount: dailyRewards.dailyRewards[userAddress],
  }));

  validateTotalAmount(dailyRewardsSnapshot, totalDailyDistribution);
  return dailyRewardsSnapshot.map((entry) => ({
    address: entry.address,
    amount: entry.amount.toHexString(),
  }));
}
function calculateDailyRewards(
  day: WeekDay,
  totalWeeklyDistributionPerPool: { [poolAddress: string]: BigNumber }
): DailyRewards {
  const dailyUsersRewards: { [userAddress: string]: BigNumber } = {};

  if (day.borrowDailyRewards) {
    calculateUsersDailyRewards(
      day.borrowDailyRewards,
      totalWeeklyDistributionPerPool,
      dailyUsersRewards,
      config.borrowRewardsRatio
    );
  }
  if (day.earnDailyRewards) {
    calculateUsersDailyRewards(
      day.earnDailyRewards,
      totalWeeklyDistributionPerPool,
      dailyUsersRewards,
      config.earnRewardsRatio
    );
  }
  const totalDailyRewards = Object.values(dailyUsersRewards).reduce((a, b) => a.add(b), ZERO);
  const dailyRewards: DailyRewards = {
    id: day.id,
    dailyRewards: dailyUsersRewards,
    totalDailyRewards,
  };
  return dailyRewards;
}

function calculateUsersDailyRewards(
  rewardsArray: BorrowDailyRewards | EarnDailyRewards,
  weeklyRewardsPerPool: { [poolAddress: string]: BigNumber },
  dailyUserRewards: { [userAddress: string]: BigNumber },
  ratio: number
): void {
  for (const reward of rewardsArray) {
    const poolAddress = reward.pool.id;
    const poolWeeklyRewards = weeklyRewardsPerPool[poolAddress].mul(ratio * 100).div(100);
    const poolDailyRewards = poolWeeklyRewards.div(7);
    const userAddress = reward.user!.id;
    const userShare = BigNumber.from((reward.reward * config.multiplier).toFixed(0));
    const userPoolDailyRewards = poolDailyRewards.mul(userShare).div(config.multiplier);
    if (!dailyUserRewards[userAddress]) {
      dailyUserRewards[userAddress] = userPoolDailyRewards;
    } else {
      dailyUserRewards[userAddress] = dailyUserRewards[userAddress].add(userPoolDailyRewards);
    }
  }
}

function validateTotalAmount(
  weeklyRewardsSnapshot: { address: string; amount: BigNumber }[],
  totalWeeklyDistribution: BigNumber
) {
  const weeklyRewardsSnapshotTotal = weeklyRewardsSnapshot.reduce((a, b) => a.add(b.amount), ZERO);
  if (weeklyRewardsSnapshotTotal.gt(totalWeeklyDistribution)) {
    throw new Error("Weekly rewards snapshot total is greater than total weekly rewards");
  }
}
