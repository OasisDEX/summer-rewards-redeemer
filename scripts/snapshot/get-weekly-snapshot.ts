import { PrismaClient } from "@prisma/client";
import { WeeklyRewardsQuery, WeeklyRewardsDocument, execute } from "../../.graphclient";
import { getWeeklyReward, rewardDistributions } from "../common/config";

const prisma = new PrismaClient();

export const getWeeklySnapshot = async (): Promise<{ [userAddress: string]: number }> => {
  const res = await execute(WeeklyRewardsDocument, { week: 2783 });
  const data = res.data as WeeklyRewardsQuery;
  const weeklyRewardsPerPool: { [poolAddress: string]: number } = {};
  const totalWeeklyRewards = getWeeklyReward(2785);

  for (const pool of rewardDistributions.goerli) {
    weeklyRewardsPerPool[pool.address] = pool.share * totalWeeklyRewards;
  }

  const days = data.week!.days;
  const weeklyRewardsArr = [];
  for (const day of days) {
    const dailyUserRewards: { [userAddress: string]: number } = {};

    for (const rewardArr of [day.borrowDailyRewards, day.earnDailyRewards]) {
      if (!Array.isArray(rewardArr)) {
        continue;
      }

      for (const reward of rewardArr) {
        const poolAddress = reward.pool.id;
        const poolWeeklyRewards = weeklyRewardsPerPool[poolAddress];
        const poolDailyRewards = poolWeeklyRewards / 7;
        const userAddress = reward.user!.id;
        const userShare = reward.reward;
        const userPoolDailyRewards = poolDailyRewards * userShare;
        if (!dailyUserRewards[userAddress]) {
          dailyUserRewards[userAddress] = userPoolDailyRewards;
        } else {
          dailyUserRewards[userAddress] += userPoolDailyRewards;
        }
      }
    }

    const totalDailyRewards = Object.values(dailyUserRewards).reduce((a, b) => a + b, 0);
    weeklyRewardsArr.push({ id: day.id, dailyRewards: dailyUserRewards, totalDailyRewards });
  }
  console.log(weeklyRewardsArr);
  const weeklyUserRewards: { [userAddress: string]: number } = {};
  for (const day of weeklyRewardsArr) {
    for (const [userAddress, dailyRewards] of Object.entries(day.dailyRewards)) {
      if (!weeklyUserRewards[userAddress]) {
        weeklyUserRewards[userAddress] = dailyRewards;
      } else {
        weeklyUserRewards[userAddress] += dailyRewards;
      }
    }
  }
  return weeklyUserRewards;
};

getWeeklySnapshot();
