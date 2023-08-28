import { getBuiltGraphSDK } from "graphclient";
import { config } from "../config/config";

export const graphClient = getBuiltGraphSDK({
  url: config.subgraphUrl,
});
export async function fetchDailyData(dayId: number, pools: string[]) {
  try {
    const res = await graphClient.DailyPartnerRewards(
      { day: dayId.toString(), pools },
      {
        url: config.subgraphUrl,
      }
    );
    return res;
  } catch (error) {
    throw new Error(`Error fetching daily data for day ${dayId}: ${error}. Graph client error.`);
  }
}

export async function fetchWeeklyData(weekId: number, pools: string[]) {
  try {
    const res = await graphClient.WeeklyPartnerRewards(
      { week: weekId.toString(), pools },
      {
        url: config.subgraphUrl,
      }
    );
    return res;
  } catch (error) {
    throw new Error(`Error fetching weekly data for week ${weekId}: ${error}. Graph client error.`);
  }
}
