import { describe, expect, jest, test } from "@jest/globals";
import { getWeeklySnapshot } from "./get-snapshot";
import { graphStub, setupGraphStub } from "common/utils/test.utils";
import { weeklyRewardSnapshot as expectedSnapshot } from "common/utils/data";
import sinon from "sinon";

describe("Process snapshot", () => {
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
