import { describe, expect, jest, test } from "@jest/globals";
import { config, Network, ParsedUserSnapshot } from "common";
import {
  dailyRewardsDataWithCustomRatios,
  dailyRewardsSimpleData,
  dailyRewardsSimpleData2,
  dailyRewardsSimpleDataBase2,
  dailyRewardsSimpleSnapshot,
  dailyRewardsSnapshotWithCustomRatios as expectedDailySnapshot,
  dailyRewardsSnapshotWithCustomRatiosPositions,
  mockedDistributions,
  weeklyRewardData,
  weeklyRewardSnapshot as expectedWeeklySnapshot,
} from "common/utils/data";
import { graphStub, setupGraphStub } from "common/utils/test.utils";
import { prisma } from "database";
import { BigNumber, ethers } from "ethers";
import sinon from "sinon";

import { getDailySnapshot, getWeeklySnapshot } from "./get-snapshot";
import { processEligibleNetworksDailyClaims } from "./process-daily";

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
describe("Process daily snapshot - simple snapshot - base and mainnet", () => {
  beforeEach(async () => {
    setupGraphStub("dailyPartner", [dailyRewardsSimpleData2, dailyRewardsSimpleDataBase2]);
    await prisma.ajnaRewardsWeeklyClaim.deleteMany({});
    await prisma.ajnaRewardsMerkleTree.deleteMany({});
    await prisma.ajnaRewardsDailyClaim.deleteMany({});
  });
  afterEach(async () => {
    await prisma.ajnaRewardsWeeklyClaim.deleteMany({});
    await prisma.ajnaRewardsMerkleTree.deleteMany({});
    await prisma.ajnaRewardsDailyClaim.deleteMany({});
    sinon.restore();
  });

  test("should verify the daily amounts for base and mainnet processing", async () => {
    const dayId = 1;

    // we need to set the total rewards for the week to be able to calculate the rewards for the day
    const totalTokens = ethers.utils.parseEther("1000000").div(7);
    const configStub = sinon.stub(config, "getRewardDistributions");

    // we mock the config.getRewardDistributions to return the mockedDistributions
    // in the order we want them to be processed, first two calls are to validate total shares for eligible networks
    // third to get the mainnet distribution
    // next 2 to again validate total shares
    // last one to get the base distribution
    configStub.onCall(0).returns(mockedDistributions[0]);
    configStub.onCall(1).returns(mockedDistributions[1]);
    configStub.onCall(2).returns(mockedDistributions[0]);
    configStub.onCall(3).returns(mockedDistributions[0]);
    configStub.onCall(4).returns(mockedDistributions[1]);
    configStub.onCall(5).returns(mockedDistributions[1]);

    const snapshots = await processEligibleNetworksDailyClaims([dayId]);
    // mainnet is processed first hence it has 0 index, base has index = 1
    // second index is the numer of day processed - we have only processed one day
    const { parsedUserSnapshot: parsedUserSnapshotMainnet } = snapshots[0][0];
    const { parsedUserSnapshot: parsedUserSnapshotBase } = snapshots[1][0];
    const { parsedPositionSnapshot: parsedPositionSnapshotMainnet } = snapshots[0][0];
    const { parsedPositionSnapshot: parsedPositionSnapshotBase } = snapshots[1][0];
    // calcualte totals per network
    const totalMainnet = parsedUserSnapshotMainnet.reduce(
      (acc, x) => acc.add(BigNumber.from(x.amount)),
      BigNumber.from(0)
    );
    const totalBase = parsedUserSnapshotBase.reduce((acc, x) => acc.add(BigNumber.from(x.amount)), BigNumber.from(0));

    sinon.assert.callCount(configStub, 6);
    // we expect the total rewards for mainnet to be 12.5% of the total rewards two pools with 2.5% and 10%
    // since there are only positions in those pools in processed snapshot
    // { name: "YFI-DAI", address: "0x5b14144da6fd5e3b158d6df7b6ed8345829aab78", share: 0.025 },
    // { name: "SDAI-USDC", address: "0xf4ab415e00ff0ed4f25d31d7e9140f3c75b69e7d", share: 0.1, lendRatio: 0.95 },
    expect(+totalMainnet.toString()).toBeCloseTo(
      +totalTokens
        .mul(0.125 * 1000)
        .div(1000)
        .toString(),
      10
    );
    // // we expect the total rewards for base to be 3% of the total rewards ( two pools with 1.5% each )
    // { name: "ETH-USDC", address: "0x1C50ce3550D1846134F3B7c09785e7005F6A1567", share: 0.015 },
    // { name: "CBETH-ETH", address: "0xad24FC773e125Edb223C38a39657cB64bc7C1787", share: 0.015, lendRatio: 0.95 },
    expect(+totalBase.toString()).toBeCloseTo(
      +totalTokens
        .mul(0.03 * 1000)
        .div(1000)
        .toString(),
      10
    );

    // find user 0x0000000000000000000000000000000000000002 in mainnet snapshot and in base snapshot and calcualte sum of rewards
    //                                                                                  daily_tokens * borrow ratio * share * user share
    // should get 50% of 0x1C50ce3550D1846134F3B7c09785e7005F6A1567 daily  borrow rewards    = 142857 * 0.4 * 0.015 * 0.5 = 428.571
    // and 50% of 0xad24FC773e125Edb223C38a39657cB64bc7C1787 daily borrow rewards            = 142857 * 0.05 * 0.015 * 0.5 = 53.571375
    // and 70% 0xad24FC773e125Edb223C38a39657cB64bc7C1787 daily earn rewards                 = 142857 * 0.95 * 0.015 * 0.7 = 1424.998575
    // and on mainnet 50% of 0x5b14144da6fd5e3b158d6df7b6ed8345829aab78 daily borrow rewards = 142857 * 0.4 * 0.025 * 0.5 = 714.285
    const expected1 = totalTokens.mul(Math.round(0.4 * 0.015 * 0.5 * 1000000)).div(1000000);
    const expected2 = totalTokens.mul(Math.round(0.05 * 0.015 * 0.5 * 1000000)).div(1000000);
    const expected3 = totalTokens.mul(Math.round(0.95 * 0.015 * 0.7 * 1000000)).div(1000000);
    const expected4 = totalTokens.mul(Math.round(0.4 * 0.025 * 0.5 * 1000000)).div(1000000);

    const expectedTotal = expected1.add(expected2).add(expected3).add(expected4);

    const userAddress = "0x0000000000000000000000000000000000000002";
    const allUserClaims = parsedPositionSnapshotMainnet
      .concat(parsedPositionSnapshotBase)
      .filter((x) => x.userAddress === userAddress);

    const totalUserClaims = allUserClaims.reduce((acc, x) => acc.add(BigNumber.from(x.amount)), BigNumber.from(0));

    const position1 = allUserClaims.filter(
      (x) => x.poolAddress === "0x1C50ce3550D1846134F3B7c09785e7005F6A1567".toLowerCase() && x.positionType === "borrow"
    );
    expect(+position1[0].amount.toString()).toBeCloseTo(+expected1.toString(), 10);
    const position2 = allUserClaims.filter(
      (x) => x.poolAddress === "0xad24FC773e125Edb223C38a39657cB64bc7C1787".toLowerCase() && x.positionType === "borrow"
    );
    expect(+position2[0].amount.toString()).toBeCloseTo(+expected2.toString(), 10);
    const position3 = allUserClaims.filter(
      (x) => x.poolAddress === "0xad24FC773e125Edb223C38a39657cB64bc7C1787".toLowerCase() && x.positionType === "earn"
    );
    expect(+position3[0].amount.toString()).toBeCloseTo(+expected3.toString(), 10);
    const position4 = allUserClaims.filter(
      (x) => x.poolAddress === "0x5b14144da6fd5e3b158d6df7b6ed8345829aab78".toLowerCase() && x.positionType === "borrow"
    );

    expect(+position4[0].amount.toString()).toBeCloseTo(+expected4.toString(), 10);
    expect(+totalUserClaims.toString()).toBeCloseTo(+expectedTotal.toString(), 10);

    sinon.restore();
  });

  jest.setTimeout(100000); // 100 seconds
});
function getAmountByAddress(address: string, array: ParsedUserSnapshot): number | undefined {
  const item = array.find((x) => x.userAddress === address);
  return item ? BigNumber.from(item.amount).div(BigNumber.from("1000000000000000000")).toNumber() : undefined;
}
