import fs from "fs";

import { calculateDailySnapshot, calculateWeeklySnapshot } from "../get-snapshot";
import { fetchWeeklyData, fetchDailyData } from "common/utils/graph.utils";
import { get } from "http";
import { getRewardDistributions } from "common";
async function getTestData() {
  // Define the weeks and days to generate snapshots for
  const weeks = [2791, 2790, 2789, 2788, 2787, 2786, 2785];

  // Generate snapshots for each week and day
  for (const week of weeks) {
    const rewardDistributions = getRewardDistributions(week);
    const data = await fetchWeeklyData(
      week,
      rewardDistributions.map((pool) => pool.address)
    );
    const weeklySnapshot = calculateWeeklySnapshot(data, week, rewardDistributions);

    // Save the input data and resulting snapshot as JSON files
    const weeklyDataFilename = `weekly-data-${week}.json`;
    const weeklySnapshotFilename = `weekly-snapshot-${week}.json`;
    fs.writeFileSync(weeklyDataFilename, JSON.stringify(data));
    fs.writeFileSync(weeklySnapshotFilename, JSON.stringify(weeklySnapshot));
    data.week?.days?.forEach(async (d) => {
      const day = +d.id;
      const dailyData = await fetchDailyData(
        day,
        rewardDistributions.map((pool) => pool.address)
      );
      console.log(`processing day ${day} from week : ${week}`);
      const dailySnapshot = calculateDailySnapshot(dailyData, day, rewardDistributions);

      // Save the input data and resulting snapshot as JSON files
      const weeklyDataFilename = `daily-data-${day}.json`;
      const weeklySnapshotFilename = `daily-snapshot-${day}.json`;
      fs.writeFileSync(weeklyDataFilename, JSON.stringify(dailyData));
      fs.writeFileSync(weeklySnapshotFilename, JSON.stringify(dailySnapshot));
    });
  }
}
getTestData();
