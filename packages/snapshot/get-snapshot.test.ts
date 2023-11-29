import { describe, expect, jest, test } from "@jest/globals";
import { Network, ParsedUserSnapshot } from "common";
import {
  dailyRewardsDataWithCustomRatios,
  dailyRewardsSimpleData,
  dailyRewardsSimpleSnapshot,
  dailyRewardsSnapshotWithCustomRatios as expectedDailySnapshot,
  dailyRewardsSnapshotWithCustomRatiosPositions,
  weeklyRewardData,
  weeklyRewardSnapshot as expectedWeeklySnapshot,
} from "common/utils/data";
import { graphStub, setupGraphStub } from "common/utils/test.utils";
import { BigNumber } from "ethers";
import sinon from "sinon";

import { getDailySnapshot, getWeeklySnapshot } from "./get-snapshot";

describe("Process weekly snapshot", () => {
  beforeEach(async () => {
    setupGraphStub("weeklyPartner", [weeklyRewardData]);
  });
  afterEach(async () => {
    sinon.restore();
  });
  test("should verify the saved snapshot against calculation execution - mainnet only", async () => {
    const rewardDistributions = [
      { name: "RETH-DAI", address: "0x42d3f9C4dF0b98c3974Fd539A7EA9d0847F37Ef5", share: 0.1, network: Network.Mainnet },
      { name: "WBTC-DAI", address: "0xdB30a08Ebc49af1BaF87f57824f85056cEd33d5F", share: 0.1, network: Network.Mainnet },
      {
        name: "WSTETH-DAI",
        address: "0x8519bE08b8d83baEb11eBa52A7889967dCeD9Ae0",
        share: 0.1,
        network: Network.Mainnet,
      },
      {
        name: "ETH-USDC",
        address: "0x1C50ce3550D1846134F3B7c09785e7005F6A1566",
        share: 0.08,
        network: Network.Mainnet,
      },
      {
        name: "WBTC-USDC",
        address: "0x65374cD7db203e0c9EA8B7DA28A25dC770bEcB9e",
        share: 0.08,
        network: Network.Mainnet,
      },
      {
        name: "WSTETH-USDC",
        address: "0xE0FFABEa66627a588EFB6C870677Baa23a53b948",
        share: 0.08,
        network: Network.Mainnet,
      },
      {
        name: "USDC-ETH",
        address: "0x0Bc54b36d4Fa082eDe775Dd45f69FBbe360DDeb6",
        share: 0.05,
        network: Network.Mainnet,
      },
      {
        name: "USDC-WBTC",
        address: "0x1a9Cea49DaEB8c36EA707A9171EbDF4097796dD4",
        share: 0.05,
        network: Network.Mainnet,
      },
      {
        name: "CBETH-ETH",
        address: "0xad24FC773e125Edb223C38a39657cB64bc7C178e",
        share: 0.12,
        network: Network.Mainnet,
      },
      {
        name: "WSTETH-ETH",
        address: "0x37d3a44C905663d7B77C9b574b941D4FbF713A91",
        share: 0.12,
        network: Network.Mainnet,
      },
      {
        name: "RETH-ETH",
        address: "0xa2fFdC7EFeF98469d11370d91c0A17DC83EC2BDA",
        share: 0.12,
        network: Network.Mainnet,
      },
    ].map((x) => ({ ...x, address: x.address.toLowerCase() }));
    const parsedSnapshot = await getWeeklySnapshot(1, rewardDistributions);
    expect(parsedSnapshot).toEqual(expectedWeeklySnapshot);
    sinon.assert.calledOnce(graphStub);
    sinon.restore();
  });

  jest.setTimeout(100000); // 100 seconds
});

describe("Process daily snapshot - positions - mainnet only", () => {
  beforeEach(async () => {
    setupGraphStub("dailyPartner", [dailyRewardsDataWithCustomRatios]);
  });
  afterEach(async () => {
    sinon.restore();
  });
  test("should verify the saved snapshot against calculation execution - custom earn/borrow ratio", async () => {
    const dayId = 19587;
    const rewardDistributions = [
      {
        name: "RETH-DAI",
        address: "0x42d3f9C4dF0b98c3974Fd539A7EA9d0847F37Ef5",
        share: 0.09,
        network: Network.Mainnet,
      },
      {
        name: "WBTC-DAI",
        address: "0xdB30a08Ebc49af1BaF87f57824f85056cEd33d5F",
        share: 0.07,
        network: Network.Mainnet,
      },
      {
        name: "WSTETH-DAI",
        address: "0x8519bE08b8d83baEb11eBa52A7889967dCeD9Ae0",
        share: 0.07,
        network: Network.Mainnet,
      },
      {
        name: "ETH-USDC",
        address: "0x1C50ce3550D1846134F3B7c09785e7005F6A1566",
        share: 0.065,
        network: Network.Mainnet,
      },
      {
        name: "WBTC-USDC",
        address: "0x65374cD7db203e0c9EA8B7DA28A25dC770bEcB9e",
        share: 0.09,
        network: Network.Mainnet,
      },
      {
        name: "WSTETH-USDC",
        address: "0xE0FFABEa66627a588EFB6C870677Baa23a53b948",
        share: 0.09,
        network: Network.Mainnet,
      },
      {
        name: "USDC-ETH",
        address: "0x0Bc54b36d4Fa082eDe775Dd45f69FBbe360DDeb6",
        share: 0.05,
        network: Network.Mainnet,
      },
      {
        name: "USDC-WBTC",
        address: "0x1a9Cea49DaEB8c36EA707A9171EbDF4097796dD4",
        share: 0.05,
        network: Network.Mainnet,
      },
      {
        name: "CBETH-ETH",
        address: "0xad24FC773e125Edb223C38a39657cB64bc7C178e",
        share: 0.1,
        lendRatio: 0.95,
        network: Network.Mainnet,
      },
      {
        name: "WSTETH-ETH",
        address: "0x37d3a44C905663d7B77C9b574b941D4FbF713A91",
        share: 0.1,
        lendRatio: 0.95,
        network: Network.Mainnet,
      },
      {
        name: "RETH-ETH",
        address: "0xa2fFdC7EFeF98469d11370d91c0A17DC83EC2BDA",
        share: 0.1,
        lendRatio: 0.95,
        network: Network.Mainnet,
      },
      {
        name: "YFI-DAI",
        address: "0x5b14144da6fd5e3b158d6df7b6ed8345829aab78",
        share: 0.025,
        network: Network.Mainnet,
      },
      {
        name: "SDAI-USDC",
        address: "0xf4ab415e00ff0ed4f25d31d7e9140f3c75b69e7d",
        share: 0.1,
        lendRatio: 0.95,
        network: Network.Mainnet,
      },
    ].map((x) => ({ ...x, address: x.address.toLowerCase() }));
    const { parsedUserSnapshot, parsedPositionSnapshot } = await getDailySnapshot(dayId, rewardDistributions);
    expect(parsedUserSnapshot).toEqual(expectedDailySnapshot);
    expect(parsedPositionSnapshot).toEqual(dailyRewardsSnapshotWithCustomRatiosPositions);
    sinon.assert.calledOnce(graphStub);
    sinon.restore();
  });

  jest.setTimeout(100000); // 100 seconds
});

describe("Process daily snapshot - simple snapshot - mainnet only", () => {
  beforeEach(async () => {
    setupGraphStub("dailyPartner", [dailyRewardsSimpleData]);
  });
  afterEach(async () => {
    sinon.restore();
  });
  test("should verify the saved snapshot against calculation execution - custom earn/borrow ratio #2", async () => {
    const dayId = 19587;
    const rewardDistributions = [
      {
        name: "RETH-DAI",
        address: "0x42d3f9C4dF0b98c3974Fd539A7EA9d0847F37Ef5",
        share: 0.09,
        network: Network.Mainnet,
      },
      {
        name: "WBTC-DAI",
        address: "0xdB30a08Ebc49af1BaF87f57824f85056cEd33d5F",
        share: 0.07,
        network: Network.Mainnet,
      },
      {
        name: "WSTETH-DAI",
        address: "0x8519bE08b8d83baEb11eBa52A7889967dCeD9Ae0",
        share: 0.07,
        network: Network.Mainnet,
      },
      {
        name: "ETH-USDC",
        address: "0x1C50ce3550D1846134F3B7c09785e7005F6A1566",
        share: 0.065,
        network: Network.Mainnet,
      },
      {
        name: "WBTC-USDC",
        address: "0x65374cD7db203e0c9EA8B7DA28A25dC770bEcB9e",
        share: 0.09,
        network: Network.Mainnet,
      },
      {
        name: "WSTETH-USDC",
        address: "0xE0FFABEa66627a588EFB6C870677Baa23a53b948",
        share: 0.09,
        network: Network.Mainnet,
      },
      {
        name: "USDC-ETH",
        address: "0x0Bc54b36d4Fa082eDe775Dd45f69FBbe360DDeb6",
        share: 0.05,
        network: Network.Mainnet,
      },
      {
        name: "USDC-WBTC",
        address: "0x1a9Cea49DaEB8c36EA707A9171EbDF4097796dD4",
        share: 0.05,
        network: Network.Mainnet,
      },
      {
        name: "CBETH-ETH",
        address: "0xad24FC773e125Edb223C38a39657cB64bc7C178e",
        share: 0.1,
        lendRatio: 0.95,
        network: Network.Mainnet,
      },
      {
        name: "WSTETH-ETH",
        address: "0x37d3a44C905663d7B77C9b574b941D4FbF713A91",
        share: 0.1,
        lendRatio: 0.95,
        network: Network.Mainnet,
      },
      {
        name: "RETH-ETH",
        address: "0xa2fFdC7EFeF98469d11370d91c0A17DC83EC2BDA",
        share: 0.1,
        lendRatio: 0.95,
        network: Network.Mainnet,
      },
      {
        name: "YFI-DAI",
        address: "0x5b14144da6fd5e3b158d6df7b6ed8345829aab78",
        share: 0.025,
        network: Network.Mainnet,
      },
      {
        name: "SDAI-USDC",
        address: "0xf4ab415e00ff0ed4f25d31d7e9140f3c75b69e7d",
        share: 0.1,
        lendRatio: 0.95,
        network: Network.Mainnet,
      },
    ].map((x) => ({ ...x, address: x.address.toLowerCase() }));
    const { parsedUserSnapshot } = await getDailySnapshot(dayId, rewardDistributions);
    expect(parsedUserSnapshot).toEqual(dailyRewardsSimpleSnapshot);
    expect(parsedUserSnapshot.length).toEqual(8);

    sinon.assert.calledOnce(graphStub);

    const firstPoolEarnRatio = 0.95;
    const firstPoolBorrowRatio = 0.05;
    const secondPoolEarnRatio = 0.6;
    const secondPoolBorrowRatio = 0.4;

    const firstPoolMultiplier = firstPoolEarnRatio / firstPoolBorrowRatio;
    const secondPoolMultiplier = secondPoolEarnRatio / secondPoolBorrowRatio;

    // users in first pool with high ratio
    const borrowAmountHighRatio = getAmountByAddress("0x0000000000000000000000000000000000000003", parsedUserSnapshot);
    const earnAmountHighRatio = getAmountByAddress("0x0000000000000000000000000000000000000007", parsedUserSnapshot);
    // users in second pool with low ratio
    const borrowAmountLowRatio = getAmountByAddress("0x0000000000000000000000000000000000000001", parsedUserSnapshot);
    const earnAmountLowRatio = getAmountByAddress("0x0000000000000000000000000000000000000005", parsedUserSnapshot);

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

function getAmountByAddress(address: string, array: ParsedUserSnapshot): number | undefined {
  const item = array.find((x) => x.userAddress === address);
  return item ? BigNumber.from(item.amount).div(BigNumber.from("1000000000000000000")).toNumber() : undefined;
}
