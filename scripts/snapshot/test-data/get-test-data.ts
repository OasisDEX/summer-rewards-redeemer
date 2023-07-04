import fs from "fs";

import {
  DailyRewardsDocument,
  DailyRewardsQuery,
  execute,
  WeeklyRewardsDocument,
  WeeklyRewardsQuery,
} from "../../../.graphclient";
import { calculateDailySnapshot, calculateWeeklySnapshot } from "../../../scripts/snapshot/get-snapshot";
async function getTestData() {
  // Define the weeks and days to generate snapshots for
  const weeks = [2791, 2790, 2789, 2788, 2787, 2786, 2785];

  // Generate snapshots for each week and day
  for (const week of weeks) {
    const res = await execute(WeeklyRewardsDocument, { week });
    const data = res.data as WeeklyRewardsQuery;
    const weeklySnapshot = calculateWeeklySnapshot(data, week);

    // Save the input data and resulting snapshot as JSON files
    const weeklyDataFilename = `weekly-data-${week}.json`;
    const weeklySnapshotFilename = `weekly-snapshot-${week}.json`;
    fs.writeFileSync(weeklyDataFilename, JSON.stringify(data));
    fs.writeFileSync(weeklySnapshotFilename, JSON.stringify(weeklySnapshot));
    data.week?.days?.forEach(async (d) => {
      const day = +d.id;
      const dailyRes = await execute(DailyRewardsDocument, { day });
      const dailyData = dailyRes.data as DailyRewardsQuery;
      console.log(`processing day ${day} from week : ${week}`);
      const dailySnapshot = calculateDailySnapshot(dailyData, day);

      // Save the input data and resulting snapshot as JSON files
      const weeklyDataFilename = `daily-data-${day}.json`;
      const weeklySnapshotFilename = `daily-snapshot-${day}.json`;
      fs.writeFileSync(weeklyDataFilename, JSON.stringify(dailyData));
      fs.writeFileSync(weeklySnapshotFilename, JSON.stringify(dailySnapshot));
    });
  }
}
getTestData();
