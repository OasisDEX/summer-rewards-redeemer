import { WeeklyRewardsQuery, WeeklyRewardsDocument, execute } from "../../.graphclient";
import { config, getWeeklyReward, rewardDistributions } from "../common/config";
import { BorrowDailyRewards, EarnDailyRewards, ParsedSnapshot, SnapshotEntry } from "../common/types";
import { BigNumber } from "ethers";
import { ZERO } from "../common/constants";

export const getWeeklySnapshot = async (weekId: number): Promise<ParsedSnapshot> => {
  const res = await execute(WeeklyRewardsDocument, { week: weekId });
  const data = res.data as WeeklyRewardsQuery;

  return calculateWeeklySnapshot(data, weekId);
};

export function calculateWeeklySnapshot(data: WeeklyRewardsQuery, weekId: number): ParsedSnapshot {
  if (!data.week) {
    throw new Error(`No weekly rewards found for week ${weekId}`);
  }

  const days = data.week!.days;
  const totalWeeklyRewardsPerPool: { [poolAddress: string]: BigNumber } = {};
  const totalWeeklyRewards = getWeeklyReward(weekId);

  for (const pool of rewardDistributions[config.network]) {
    totalWeeklyRewardsPerPool[pool.address] = BigNumber.from(pool.share * 100)
      .mul(totalWeeklyRewards)
      .div(100);
  }

  const weeklyRewardsArr = [];
  for (const day of days) {
    const dailyUserRewards: { [userAddress: string]: BigNumber } = {};

    if (day.borrowDailyRewards) {
      calculateUserDailyRewards(
        day.borrowDailyRewards,
        totalWeeklyRewardsPerPool,
        dailyUserRewards,
        config.borrowRewardsRatio
      );
    }
    if (day.earnDailyRewards) {
      calculateUserDailyRewards(
        day.earnDailyRewards,
        totalWeeklyRewardsPerPool,
        dailyUserRewards,
        config.earnRewardsRatio
      );
    }
    const totalDailyRewards = Object.values(dailyUserRewards).reduce((a, b) => a.add(b), ZERO);
    weeklyRewardsArr.push({ id: day.id, dailyRewards: dailyUserRewards, totalDailyRewards });
  }
  const weeklyUserRewards: { [userAddress: string]: BigNumber } = {};
  for (const day of weeklyRewardsArr) {
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

  validateTotalAmount(weeklyRewardsSnapshot, totalWeeklyRewards);
  return weeklyRewardsSnapshot.map((entry) => ({
    address: entry.address,
    amount: entry.amount.toHexString(),
  }));
}

function calculateUserDailyRewards(
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
  totalWeeklyRewards: BigNumber
) {
  const weeklyRewardsSnapshotTotal = weeklyRewardsSnapshot.reduce((a, b) => a.add(b.amount), ZERO);
  if (weeklyRewardsSnapshotTotal.gt(totalWeeklyRewards)) {
    throw new Error("Weekly rewards snapshot total is greater than total weekly rewards");
  }
}
