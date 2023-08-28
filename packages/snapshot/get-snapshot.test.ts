import { describe, expect, jest, test } from "@jest/globals";
import { getDailySnapshot, getWeeklySnapshot } from "./get-snapshot";
import { graphStub, setupGraphStub } from "common/utils/test.utils";
import { dailyRewardsDataWithCustomRatios, weeklyRewardSnapshot as expectedWeeklySnapshot, dailyRewardsSnapshotWithCustomRatios as expectedDailySnapshot } from "common/utils/data";
import sinon from "sinon";

describe("Process snapshot", () => {
  afterEach(async () => {
    sinon.restore();
  });
  test("should verify the saved snapshot against calculation execution", async () => {
    setupGraphStub();
    const parsedSnapshot = await getWeeklySnapshot(1);
    expect(parsedSnapshot).toEqual(expectedWeeklySnapshot);
    sinon.assert.calledOnce(graphStub);
  });
  test("should verify the saved snapshot against calculation execution - custom earn/borrow ratio", async () => {
    setupGraphStub(dailyRewardsDataWithCustomRatios);
    const parsedSnapshot = await getDailySnapshot(19587);
    expect(parsedSnapshot).toEqual(expectedDailySnapshot);
    sinon.assert.calledOnce(graphStub);
  });
  jest.setTimeout(100000); // 100 seconds
});
