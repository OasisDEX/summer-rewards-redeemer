import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import chalk from "chalk";
import { ethers } from "hardhat";

import { prisma } from "../prisma/client";
import { config } from "../scripts/common/config";
import { getContract, impersonate } from "../scripts/common/helpers";
import { processWeeklyClaims } from "../scripts/snapshot/process";
import { AjnaDripper, AjnaRedeemer, AjnaToken } from "../typechain-types";
// all rewards for a given week
const CURRENT_WEEK = 2791;
async function deployFixture() {
  const [owner, firstUser, randomUser] = await ethers.getSigners();
  const ownerAddress = await owner.getAddress();
  const firstUserAddress = await firstUser.getAddress();
  const ajnaToken = await getContract<AjnaToken>("AjnaToken", config.addresses.ajnaToken);
  const ajnaDripper = await getContract<AjnaDripper>("AjnaDripper", config.addresses.ajnaDripper);
  const ajnaRedeemer = await getContract<AjnaRedeemer>("AjnaRedeemer", config.addresses.ajnaRedeemer);
  const operator = await impersonate(config.addresses.operator);

  return {
    ajnaToken,
    ajnaRedeemer,
    owner,
    firstUser,
    randomUser,
    ownerAddress,
    firstUserAddress,
    ajnaDripper,
    operator,
  };
}

describe("AjnaRedeemer e2e", () => {
  before(async () => {
    await processWeeklyClaims([CURRENT_WEEK]);
  });
  after(async () => {
    await prisma.ajnaRewardsMerkleTree.deleteMany({});
    await prisma.ajnaRewardsWeeklyClaim.deleteMany({});
  });
  describe("canClaim", () => {
    it("should return true for verified leaf and unclaimed reward and correct week number", async () => {
      const { ajnaRedeemer } = await loadFixture(deployFixture);
      const currentWeek = CURRENT_WEEK;
      const randomClaims = await prisma.ajnaRewardsWeeklyClaim.findMany({
        where: {
          week_number: currentWeek,
        },
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
      const { ajnaRedeemer } = await loadFixture(deployFixture);
      const currentWeek = CURRENT_WEEK;
      const randomClaims = await prisma.ajnaRewardsWeeklyClaim.findMany({
        where: {
          week_number: currentWeek,
        },
      });
      for (const randomClaim of randomClaims) {
        console.log(chalk.dim(`Claiming for ${randomClaim.user_address}`));
        const testUser = ethers.provider.getSigner(randomClaim?.user_address as string);
        await expect(
          ajnaRedeemer.connect(testUser).claimMultiple([currentWeek], [randomClaim!.amount], [randomClaim!.proof])
        ).to.not.be.reverted;
      }
    });
  });
});
