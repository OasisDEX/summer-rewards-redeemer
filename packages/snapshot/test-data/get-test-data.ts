import { getRewardsDistributionsForNetworks, Network } from "common";
import { fetchDailyData, fetchWeeklyData } from "common/utils/graph.utils";
import fs from "fs";

import { calculateDailySnapshot, calculateWeeklySnapshot } from "../get-snapshot";
async function getTestData() {
  // Define the weeks and days to generate snapshots for
  const weeks = [2798, 2799];

  // Generate snapshots for each week and day
  for (const week of weeks) {
    const rewardDistributions = getRewardsDistributionsForNetworks(week, [Network.Mainnet]);
    const data = await fetchWeeklyData(week, rewardDistributions);
    const weeklySnapshot = calculateWeeklySnapshot(data, week, rewardDistributions);

    // Save the input data and resulting snapshot as JSON files
    const weeklyDataFilename = `weekly-data-${week}.json`;
    const weeklySnapshotFilename = `weekly-snapshot-${week}.json`;
    fs.writeFileSync(weeklyDataFilename, JSON.stringify(data));
    fs.writeFileSync(weeklySnapshotFilename, JSON.stringify(weeklySnapshot));
    data.week?.days?.forEach(async (d) => {
      const day = +d.id;
      const dailyData = await fetchDailyData(day, rewardDistributions);
      console.log(`processing day ${day} from week : ${week}`);
      const dailySnapshot = calculateDailySnapshot(dailyData, day, rewardDistributions);

      // Save the input data and resulting snapshot as JSON files
      const dailyDataFilename = `daily-data-${day}.json`;
      const dailySnapshotFilename = `daily-snapshot-${day}.json`;
      const dailyPositionSnapshotFilename = `daily-snapshot-${day}-positions.json`;
      fs.writeFileSync(dailyDataFilename, JSON.stringify(dailyData));
      fs.writeFileSync(dailySnapshotFilename, JSON.stringify(dailySnapshot.parsedUserSnapshot));
      fs.writeFileSync(dailyPositionSnapshotFilename, JSON.stringify(dailySnapshot.parsedPositionSnapshot));
    });
  }
}
getTestData();
