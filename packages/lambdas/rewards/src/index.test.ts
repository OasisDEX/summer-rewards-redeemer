import { describe, jest, test } from "@jest/globals";
import { graphStub, setupGraphStub } from "common/utils/test.utils";
import { weeklyRewardData } from "common/utils/data";
import sinon from "sinon";
import { handler } from "./index";
import testEvent from "../../events/unit-test-event.json";
import { APIGatewayProxyEvent } from "aws-lambda";

describe("Run handler", () => {
  let inputEvent: APIGatewayProxyEvent = testEvent;
  beforeEach(() => {
    inputEvent = testEvent;
  });
  beforeEach(async () => {
    setupGraphStub(weeklyRewardData, "weeklyPartner");
  });
  afterEach(async () => {
    sinon.restore();
  });
  test("log", async () => {
    inputEvent.body = JSON.stringify({ day: 2795, pools: ["0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6"] });
    await handler(inputEvent);
    sinon.assert.calledOnce(graphStub);
    sinon.restore();
  });

  jest.setTimeout(100000); // 100 seconds
});
