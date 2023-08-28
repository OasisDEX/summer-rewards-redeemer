import { describe, expect, jest, test } from "@jest/globals";
import { getDailySnapshot, getWeeklySnapshot } from "./get-snapshot";
import { graphStub, setupGraphStub } from "common/utils/test.utils";
import {
  dailyRewardsDataWithCustomRatios,
  weeklyRewardSnapshot as expectedWeeklySnapshot,
  dailyRewardsSnapshotWithCustomRatios as expectedDailySnapshot,
  dailyRewardsSimpleSnapshot,
  dailyRewardsSimpleData,
  weeklyRewardData,
} from "common/utils/data";
import sinon from "sinon";
import { BigNumber } from "ethers";
import { ParsedSnapshot } from "common";

describe("Process weekly snapshot", () => {
  beforeEach(async () => {
    setupGraphStub(weeklyRewardData, "weekly");
  });
  afterEach(async () => {
    sinon.restore();
  });
  test("should verify the saved snapshot against calculation execution", async () => {
    const parsedSnapshot = await getWeeklySnapshot(1);
    expect(parsedSnapshot).toEqual(expectedWeeklySnapshot);
    sinon.assert.calledOnce(graphStub);
    sinon.restore();
  });

  jest.setTimeout(100000); // 100 seconds
});

describe("Process daily snapshot", () => {
  beforeEach(async () => {
    setupGraphStub(dailyRewardsDataWithCustomRatios, "daily");
  });
  afterEach(async () => {
    sinon.restore();
  });
  test("should verify the saved snapshot against calculation execution - custom earn/borrow ratio", async () => {
    const parsedSnapshot = await getDailySnapshot(19587);
    expect(parsedSnapshot).toEqual(expectedDailySnapshot);
    sinon.assert.calledOnce(graphStub);
    sinon.restore();
  });

  jest.setTimeout(100000); // 100 seconds
});

describe("Process daily snapshot - simple snapshot", () => {
  beforeEach(async () => {
    setupGraphStub(dailyRewardsSimpleData, "daily");
  });
  afterEach(async () => {
    sinon.restore();
  });
  test("should verify the saved snapshot against calculation execution - custom earn/borrow ratio #2", async () => {
    const parsedSnapshot = await getDailySnapshot(19588);
    expect(parsedSnapshot).toEqual(dailyRewardsSimpleSnapshot);

    sinon.assert.calledOnce(graphStub);

    const firstPoolEarnRatio = 0.95;
    const firstPoolBorrowRatio = 0.05;
    const secondPoolEarnRatio = 0.6;
    const secondPoolBorrowRatio = 0.4;

    const firstPoolMultiplier = firstPoolEarnRatio / firstPoolBorrowRatio;
    const secondPoolMultiplier = secondPoolEarnRatio / secondPoolBorrowRatio;

    // users in first pool with high ratio
    const borrowAmountHighRatio = getAmountByAddress("0x0000000000000000000000000000000000000003", parsedSnapshot);
    const earnAmountHighRatio = getAmountByAddress("0x0000000000000000000000000000000000000007", parsedSnapshot);
    // users in second pool with low ratio
    const borrowAmountLowRatio = getAmountByAddress("0x0000000000000000000000000000000000000001", parsedSnapshot);
    const earnAmountLowRatio = getAmountByAddress("0x0000000000000000000000000000000000000005", parsedSnapshot);

    if (borrowAmountHighRatio !== undefined && earnAmountHighRatio !== undefined) {
      expect(borrowAmountHighRatio).toEqual(Math.round(earnAmountHighRatio / firstPoolMultiplier));
    }

    if (borrowAmountLowRatio !== undefined && earnAmountLowRatio !== undefined) {
      expect(borrowAmountLowRatio).toEqual(Math.round(earnAmountLowRatio / secondPoolMultiplier));
    }

    sinon.restore();
  });

  jest.setTimeout(100000); // 100 seconds
});

function getAmountByAddress(address: string, array: ParsedSnapshot): number | undefined {
  const item = array.find((x) => x.address === address);
  return item ? BigNumber.from(item.amount).div(BigNumber.from("1000000000000000000")).toNumber() : undefined;
}
