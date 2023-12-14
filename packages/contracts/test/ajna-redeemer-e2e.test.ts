import { impersonateAccount, loadFixture, setBalance } from "@nomicfoundation/hardhat-network-helpers";
import { processWeeklyClaims } from "ajna-rewards-snapshot/process-weekly";
import { expect } from "chai";
import chalk from "chalk";
import { EligibleNetwork, Network, ONE } from "common";
import { config } from "common/config/config";
import {
  BASE_WEEKLY_AMOUNT,
  mockedDistributions,
  weeklyRewardDataBase,
  weeklyRewardDataMainnet,
} from "common/utils/data";
import { graphStub, setupGraphStub } from "common/utils/test.utils";
import { prisma } from "database";
import { BigNumber, Signer } from "ethers";
import { ethers } from "hardhat";
import sinon from "sinon";
import { AjnaDripper, AjnaRedeemer, AjnaToken } from "typechain-types";

import { deployContract, impersonate } from "../scripts/utils/hardhat.utils";

export async function getAddresses() {
  const [owner, admin, randomUser] = await ethers.getSigners();
  const ADMIN_ADDRESS = await admin.getAddress();
  const OPERATOR_ADDRESS = await owner.getAddress();
  return { ADMIN_ADDRESS, OPERATOR_ADDRESS, owner, admin, randomUser };
}

let owner: Signer;
let admin: Signer;
let configStub: sinon.SinonStub;
let ADMIN_ADDRESS: string;
let OPERATOR_ADDRESS: string;
let CURRENT_WEEK: BigNumber = BigNumber.from(0);

async function deployFixture() {
  // reset the hardhat fork to the latest block
  await ethers.provider.send("hardhat_reset", [
    {
      forking: {
        jsonRpcUrl: config.rpcUrl,
        blockNumber: 17950835,
      },
    },
  ]);

  setupGraphStub("weeklyPartner", [weeklyRewardDataMainnet, weeklyRewardDataBase]);

  configStub = sinon.stub(config, "getRewardDistributions");

  configStub.onCall(0).returns(mockedDistributions[0]);
  configStub.onCall(1).returns(mockedDistributions[1]);
  configStub.onCall(2).returns(mockedDistributions[0]);
  configStub.onCall(3).returns(mockedDistributions[1]);

  ({ ADMIN_ADDRESS, OPERATOR_ADDRESS, owner, admin } = await getAddresses());

  const ajnaToken = await deployContract<AjnaToken>("AjnaToken", []);
  const ajnaDripper = await deployContract<AjnaDripper>("AjnaDripper", [ajnaToken.address, ADMIN_ADDRESS]);
  const ajnaRedeemer = await deployContract<AjnaRedeemer>("AjnaRedeemer", [
    ajnaToken.address,
    OPERATOR_ADDRESS,
    ajnaDripper.address,
  ]);

  CURRENT_WEEK = await ajnaRedeemer.getCurrentWeek();
  await ajnaToken.mint(ajnaDripper.address, BASE_WEEKLY_AMOUNT.mul(100));
  await ajnaDripper.connect(admin).setup(ajnaRedeemer.address, BASE_WEEKLY_AMOUNT);
  config.currentlyConfiguredNetwork = Network.Goerli;
  config.addresses.ajnaDripper = ajnaDripper.address;
  config.addresses.ajnaToken = ajnaToken.address;
  config.addresses.ajnaRedeemer = ajnaRedeemer.address;
  config.addresses.operator = OPERATOR_ADDRESS;
  config.addresses.admin = ADMIN_ADDRESS;
  config.rewardStartWeek = CURRENT_WEEK.toNumber();
  console.table(config.addresses);

  await processWeeklyClaims(
    [CURRENT_WEEK.toNumber()],
    Network.Goerli, // network to porcess the tx on
    [...Object.values(EligibleNetwork)] as unknown as Network[], // networks to calcaulate the cliams for
    owner
  );
  sinon.assert.callCount(configStub, 4);
  sinon.assert.calledTwice(graphStub);
  return {
    ajnaToken,
    ajnaRedeemer,
    ajnaDripper,
  };
}
// using the following distributions:
// total rewards = 1 100 000
// total daily rewards = 157142
// reward responses avaialbe in common/utils/data.ts
// mainnet:
// { name: "RETH-ETH", address: "0xa2fFdC7EFeF98469d11370d91c0A17DC83EC2BDA", share: 0.1, lendRatio: 0.95 },
// { name: "YFI-DAI", address: "0x5b14144da6fd5e3b158d6df7b6ed8345829aab78", share: 0.025 },
// { name: "SDAI-USDC", address: "0xf4ab415e00ff0ed4f25d31d7e9140f3c75b69e7d", share: 0.1, lendRatio: 0.95 },
// base:
// { name: "ETH-USDC", address: "0x1C50ce3550D1846134F3B7c09785e7005F6A1567", share: 0.015 },
// { name: "CBETH-ETH", address: "0xad24FC773e125Edb223C38a39657cB64bc7C1787", share: 0.015, lendRatio: 0.95 },
// mainnet:
// for day 1:
// 0x0000000000000000000000000000000000000007 gets 100% of borrow allocation in pool 0xa2fFdC7EFeF98469d11370d91c0A17DC83EC2BDA
// 0.1 * 157142 * 0.05 = 785.7
// 0x0000000000000000000000000000000000000008 gets 100% of earn allocation in pool 0xf4ab415e00ff0ed4f25d31d7e9140f3c75b69e7d
// 0.1 * 157142 * 0.95 = 14928.49
// day 2:
// 0x0000000000000000000000000000000000000009 gets 30% of borrow allocation in pool 0xf4ab415e00ff0ed4f25d31d7e9140f3c75b69e7d
// 0.3 * 0.1 * 157142 * 0.05 = 235.71
// 0x0000000000000000000000000000000000000012 gets 70% of borrow allocation in pool 0x5b14144da6fd5e3b158d6df7b6ed8345829aab78
// 0.7 * 0.025 * 157142 * 0.4 = 1099.99
// 0x0000000000000000000000000000000000000009 gets 100% of earn allocation in pool 0x5b14144da6fd5e3b158d6df7b6ed8345829aab78
// 0.025 * 157142 * 0.6 = 2357.13

// BONUS:  is on the list of bonus claims
// 0x0000000000000000000000000000000000000012 gets 31.8%  (1099.99 / (1099.99+2357.13)) of the bonus allocation in pool 0x5b14144da6fd5e3b158d6df7b6ed8345829aab78 = 1249
// total 0x12 bonus = 1249
// 0x0000000000000000000000000000000000000009 gets 100% of the bonus allocation in pool 0xf4ab415e00ff0ed4f25d31d7e9140f3c75b69e7d = 15714
// and 68.2% of the bonus allocation in pool 0x5b14144da6fd5e3b158d6df7b6ed8345829aab78 = 2679
// total 0x9 bonus = 18393,2

// day 3:
// 0x0000000000000000000000000000000000000010 gets 100% of borrow allocation in pool 0xa2fFdC7EFeF98469d11370d91c0A17DC83EC2BDA
// 0.1 * 157142 * 0.05 = 785.7
// 0x0000000000000000000000000000000000000011 gets 100% of earn allocation in pool 0x5b14144da6fd5e3b158d6df7b6ed8345829aab78
// 0.025 * 157142 * 0.6 = 2357.13
// base:
// for day 1:
// 0x0000000000000000000000000000000000000002 gets 100% of borrow allocation in pool 0x1C50ce3550D1846134F3B7c09785e7005F6A1567
// 0.015 * 157142 * 0.4 = 942.85
// 0x0000000000000000000000000000000000000002 gets 100% of earn allocation in pool 0x1C50ce3550D1846134F3B7c09785e7005F6A1567
// 0.015 * 157142 * 0.6 = 1414.28
// for day 2:
// 0x0000000000000000000000000000000000000003 gets 100% of borrow allocation in pool 0xad24FC773e125Edb223C38a39657cB64bc7C1787
// 0.015 * 157142 * 0.05 = 117.85
// 0x0000000000000000000000000000000000000004 gets 100% of earn allocation in pool 0xad24FC773e125Edb223C38a39657cB64bc7C1787
// 0.015 * 157142 * 0.95 = 2239.27
// for day 3:
// 0x0000000000000000000000000000000000000005 gets 100% of borrow allocation in pool 0xad24FC773e125Edb223C38a39657cB64bc7C1787
// 0.015 * 157142 * 0.05 = 117.85
// 0x0000000000000000000000000000000000000006 gets 100% of earn allocation in pool 0x1C50ce3550D1846134F3B7c09785e7005F6A1567
// 0.015 * 157142 * 0.6 = 2239.27
// total:
// 0x0000000000000000000000000000000000000007 gets 785.7 ✅
// 0x0000000000000000000000000000000000000008 gets 14928.49 ✅
// 0x0000000000000000000000000000000000000009 gets 2592.84 ✅
// 0x0000000000000000000000000000000000000012 gets 1099.99 ✅
// 0x0000000000000000000000000000000000000010 gets 785.7 ✅
// 0x0000000000000000000000000000000000000011 gets 2357.13 ✅
// 0x0000000000000000000000000000000000000002 gets 2357.13 ✅
// 0x0000000000000000000000000000000000000003 gets 117.85 ✅
// 0x0000000000000000000000000000000000000004 gets 2239.27 ✅
// 0x0000000000000000000000000000000000000005 gets 117.85 ✅
// 0x0000000000000000000000000000000000000006 gets 1414.278 ✅

describe.only("AjnaRedeemer e2e", () => {
  afterEach(async () => {
    await prisma.ajnaRewardsMerkleTree.deleteMany({});
    await prisma.ajnaRewardsWeeklyClaim.deleteMany({});
    graphStub.reset();
    configStub.reset();
  });
  describe("canClaim", () => {
    it("should return true for verified leaf and unclaimed reward and correct week number, claim reward and confirm balance", async () => {
      const { ajnaRedeemer, ajnaToken } = await loadFixture(deployFixture);
      const currentWeek = CURRENT_WEEK.toNumber();
      console.debug(chalk.dim(`Current week: ${currentWeek}`));
      const randomClaims = await prisma.ajnaRewardsWeeklyClaim.findMany({
        where: {
          week_number: currentWeek,
          chain_id: config.chainId,
          source: "core",
        },
        take: 30,
      });
      const bonusClaims = await prisma.ajnaRewardsWeeklyClaim.findMany({
        where: {
          week_number: currentWeek,
          chain_id: config.chainId,
          source: "bonus",
        },
        take: 30,
      });
      console.log(
        `${BigNumber.from(bonusClaims[0].amount).div(ONE)} is the amount of the ${
          bonusClaims[0].user_address
        } bonus claim`
      );
      console.log(
        `${BigNumber.from(bonusClaims[1].amount).div(ONE)} is the amount of the ${
          bonusClaims[1].user_address
        } bonus claim`
      );
      for (const randomClaim of randomClaims) {
        console.log(chalk.dim(`Checking claim for ${randomClaim.user_address}`));
        const testUser = await impersonate(randomClaim.user_address);
        const res = await ajnaRedeemer.connect(testUser).canClaim(randomClaim!.proof, currentWeek, randomClaim!.amount);
        console.log(chalk.dim(`canClaim for ${randomClaim.user_address} is ${res}`));
        expect(res).to.equal(true);
      }
      expect(randomClaims.length).to.be.greaterThan(0);
      for (const randomClaim of randomClaims) {
        console.log(chalk.dim(`Claiming for ${randomClaim.user_address}`));
        const testUserAddress = randomClaim.user_address;
        await impersonateAccount(testUserAddress);
        const testUser = ethers.provider.getSigner(randomClaim?.user_address as string);
        await setBalance(testUserAddress, BigNumber.from(ethers.utils.parseEther("1000")));
        console.log(
          chalk.dim(
            `Claiming for ${randomClaim.user_address} with amount ${BigNumber.from(randomClaim.amount).div(ONE)} `
          )
        );
        await expect(
          ajnaRedeemer.connect(testUser).claimMultiple([currentWeek], [randomClaim!.amount], [randomClaim!.proof])
        ).to.not.be.reverted;
        expect(await ajnaToken.balanceOf(testUserAddress)).to.eql(BigNumber.from(randomClaim.amount));
      }
    });
  });
});
