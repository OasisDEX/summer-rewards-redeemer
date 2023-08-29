import sinon from "sinon";
import { APIGatewayProxyEvent } from "aws-lambda";
import { describe, test } from "@jest/globals";
import { graphStub, setupGraphStub } from "common/utils/test.utils";
import { weeklyRewardData } from "common/utils/data";
import { ParsedSnapshotWithProofs } from "common";
import testEvent from "../../events/unit-test-event.json";
import { handler } from "./index";

const testDistributions = [
  { name: "RETH-DAI", address: "0x42d3f9C4dF0b98c3974Fd539A7EA9d0847F37Ef5", share: 0.09 },
  { name: "WBTC-DAI", address: "0xdB30a08Ebc49af1BaF87f57824f85056cEd33d5F", share: 0.07 },
  { name: "WSTETH-DAI", address: "0x8519bE08b8d83baEb11eBa52A7889967dCeD9Ae0", share: 0.07 },
  { name: "ETH-USDC", address: "0x1C50ce3550D1846134F3B7c09785e7005F6A1566", share: 0.065 },
  { name: "WBTC-USDC", address: "0x65374cD7db203e0c9EA8B7DA28A25dC770bEcB9e", share: 0.09 },
  { name: "WSTETH-USDC", address: "0xE0FFABEa66627a588EFB6C870677Baa23a53b948", share: 0.09 },
  { name: "USDC-ETH", address: "0x0Bc54b36d4Fa082eDe775Dd45f69FBbe360DDeb6", share: 0.05 },
  { name: "USDC-WBTC", address: "0x1a9Cea49DaEB8c36EA707A9171EbDF4097796dD4", share: 0.05 },
  { name: "CBETH-ETH", address: "0xad24FC773e125Edb223C38a39657cB64bc7C178e", share: 0.1, lendRatio: 0.95 },
  { name: "WSTETH-ETH", address: "0x37d3a44C905663d7B77C9b574b941D4FbF713A91", share: 0.1, lendRatio: 0.95 },
  { name: "RETH-ETH", address: "0xa2fFdC7EFeF98469d11370d91c0A17DC83EC2BDA", share: 0.1, lendRatio: 0.95 },
  { name: "YFI-DAI", address: "0x5b14144da6fd5e3b158d6df7b6ed8345829aab78", share: 0.025 },
  { name: "SDAI-USDC", address: "0xf4ab415e00ff0ed4f25d31d7e9140f3c75b69e7d", share: 0.1, lendRatio: 0.95 },
];

describe("Run handler", () => {
  let inputEvent: APIGatewayProxyEvent = testEvent;
  beforeEach(() => {
    inputEvent = testEvent;
  });
  beforeAll(async () => {
    setupGraphStub(weeklyRewardData, "weeklyPartner");
  });
  afterAll(async () => {
    sinon.restore();
  });
  test("should return a success response if a valid body is provided", async () => {
    inputEvent.body = JSON.stringify({
      weekId: 2795,
      distribution: testDistributions.map((distribution) => ({
        ...distribution,
        address: distribution.address.toLowerCase(),
      })),
      totalWeeklyRewards: "1000000000000000000000000",
    });
    const response = await handler(inputEvent);
    const parsedResponse: { root: string; parsedSnapshotWithProofs: ParsedSnapshotWithProofs } = JSON.parse(
      response.body
    );
    expect(response.statusCode).toEqual(200);
    expect(JSON.parse(response.body)).toHaveProperty("root");
    expect(JSON.parse(response.body)).toHaveProperty("parsedSnapshotWithProofs");
    expect(parsedResponse.root).toEqual("0x6fc461f80dfd08cb6fcd7cf2d7c7e066ec27c1a8e4b58248e338f0c22119cf38");

    sinon.assert.calledOnce(graphStub);
    sinon.restore();
  });

  it("should return an error response if no body is provided", async () => {
    inputEvent.body = "";
    const response = await handler(inputEvent);
    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.body)).toEqual({ error: "No body provided" });
  });

  it("should return an error response if an invalid body is provided", async () => {
    inputEvent.body = '{ "invalid": "body" }';
    const response = await handler(inputEvent);
    expect(response.statusCode).toEqual(400);
    expect(JSON.parse(response.body)).toEqual({ error: "Invalid body provided" });
  });
});
