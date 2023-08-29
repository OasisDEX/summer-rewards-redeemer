import { impersonateAccount, loadFixture, setBalance } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import chalk from "chalk";
import { ethers } from "hardhat";

import { prisma } from "database";
import { config } from "common/config/config";
import { deployContract, impersonate } from "../scripts/utils/hardhat.utils";
import { processWeeklyClaims } from "ajna-rewards-snapshot/process-weekly";
import { AjnaDripper, AjnaRedeemer, AjnaToken } from "typechain-types";
import { BigNumber, Signer } from "ethers";
import { BASE_WEEKLY_AMOUNT, weeklyRewardData } from "common/utils/data";
import { graphStub, setupGraphStub } from "common/utils/test.utils";
import sinon from "sinon";

export async function getAddresses() {
  const [owner, admin, randomUser] = await ethers.getSigners();
  const ADMIN_ADDRESS = await admin.getAddress();
  const OPERATOR_ADDRESS = await owner.getAddress();
  return { ADMIN_ADDRESS, OPERATOR_ADDRESS, owner, admin, randomUser };
}

let owner: Signer;
let admin: Signer;
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

  setupGraphStub(weeklyRewardData, "weeklyPartner");
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

  config.addresses.ajnaDripper = ajnaDripper.address;
  config.addresses.ajnaToken = ajnaToken.address;
  config.addresses.ajnaRedeemer = ajnaRedeemer.address;
  config.addresses.operator = OPERATOR_ADDRESS;
  config.addresses.admin = ADMIN_ADDRESS;
  config.rewardStartWeek = CURRENT_WEEK.toNumber();
  console.table(config.addresses);

  await processWeeklyClaims([CURRENT_WEEK.toNumber()], owner);
  sinon.assert.calledOnce(graphStub);
  return {
    ajnaToken,
    ajnaRedeemer,
    ajnaDripper,
  };
}

describe("AjnaRedeemer e2e", () => {
  afterEach(async () => {
    await prisma.ajnaRewardsMerkleTree.deleteMany({});
    await prisma.ajnaRewardsWeeklyClaim.deleteMany({});
    graphStub.reset();
  });
  describe("canClaim", () => {
    it("should return true for verified leaf and unclaimed reward and correct week number", async () => {
      const { ajnaRedeemer } = await loadFixture(deployFixture);
      const currentWeek = CURRENT_WEEK.toNumber();
      const randomClaims = await prisma.ajnaRewardsWeeklyClaim.findMany({
        where: {
          week_number: currentWeek,
          chain_id: config.chainId,
        },
        take: 30,
      });
      for (const randomClaim of randomClaims) {
        console.log(chalk.dim(`Checking claim for ${randomClaim.user_address}`));
        const testUser = await impersonate(randomClaim.user_address);
        expect(
          await ajnaRedeemer.connect(testUser).canClaim(randomClaim!.proof, currentWeek, randomClaim!.amount)
        ).to.equal(true);
      }
    });
    it("should claim the reward for a random claim", async () => {
      const { ajnaRedeemer, ajnaToken } = await loadFixture(deployFixture);
      const currentWeek = CURRENT_WEEK.toNumber();
      const randomClaims = await prisma.ajnaRewardsWeeklyClaim.findMany({
        where: {
          week_number: currentWeek,
          chain_id: config.chainId,
        },
        take: 30,
      });
      for (const randomClaim of randomClaims) {
        console.log(chalk.dim(`Claiming for ${randomClaim.user_address}`));
        const testUserAddress = randomClaim.user_address;
        await impersonateAccount(testUserAddress);
        const testUser = ethers.provider.getSigner(randomClaim?.user_address as string);
        await setBalance(testUserAddress, BigNumber.from(ethers.utils.parseEther("1000")));
        await expect(
          ajnaRedeemer.connect(testUser).claimMultiple([currentWeek], [randomClaim!.amount], [randomClaim!.proof])
        ).to.not.be.reverted;
        expect(await ajnaToken.balanceOf(testUserAddress)).to.eql(BigNumber.from(randomClaim.amount));
      }
    });
  });
});
