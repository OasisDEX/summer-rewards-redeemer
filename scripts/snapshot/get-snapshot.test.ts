import { describe, expect, jest, test } from "@jest/globals";
import { calculateWeeklySnapshot, getWeeklySnapshot } from "./get-snapshot";
import { graphStub, setupGraphStub } from "../common/utils/test.utils";
import { weeklyRewardSnapshot as expectedSnapshot } from "./test-data/data";
import sinon from "sinon";

describe("First", () => {
  beforeEach(async () => {
    setupGraphStub();
  });
  afterEach(async () => {
    sinon.restore();
  });
  test("should verify the saved snapshot against calculation execution", async () => {
    const parsedSnapshot = await getWeeklySnapshot(1);
    expect(parsedSnapshot).toEqual(expectedSnapshot);
    sinon.assert.calledOnce(graphStub);
  });
  jest.setTimeout(100000); // 100 seconds
});
