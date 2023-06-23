import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

import { addresses, config } from "../scripts/common/config";
import { getContract, impersonate } from "../scripts/common/helpers";
import { processWeeklyClaims } from "../scripts/snapshot/process";
import { prisma } from "../scripts/snapshot/process-snapshot-in-db";
import { AjnaDripper, AjnaRedeemer, AjnaToken } from "../typechain-types";
// all rewards for a given week
const CURRENT_WEEK = 2789;
async function deployFixture() {
  const [owner, firstUser, randomUser] = await ethers.getSigners();
  const ownerAddress = await owner.getAddress();
  const firstUserAddress = await firstUser.getAddress();
  const ajnaToken = await getContract<AjnaToken>("AjnaToken", addresses[config.network].ajnaToken);
  const ajnaDripper = await getContract<AjnaDripper>("AjnaDripper", addresses[config.network].ajnaDripper);
  const ajnaRedeemer = await getContract<AjnaRedeemer>("AjnaRedeemer", addresses[config.network].ajnaRedeemer);
  const operator = await impersonate(addresses[config.network].operator);

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
    await processWeeklyClaims(CURRENT_WEEK);
  });
  after(async () => {
    await prisma.ajnaRewardsMerkleTree.deleteMany({});
    await prisma.ajnaRewardsWeeklyClaim.deleteMany({});
  });
  describe("canClaim", () => {
    it("should return true for verified leaf and unclaimed reward and correct week number", async () => {
      const { ajnaRedeemer } = await loadFixture(deployFixture);
      const currentWeek = CURRENT_WEEK;
      const randomClaim = await prisma.ajnaRewardsWeeklyClaim.findFirst({
        where: {
          week_number: currentWeek,
        },
      });
      const testUser = ethers.provider.getSigner(randomClaim?.user_address as string);
      expect(
        await ajnaRedeemer.connect(testUser).canClaim(randomClaim!.proof, currentWeek, randomClaim!.amount)
      ).to.equal(true);
    });
    it("should claim the reward for a random claim", async () => {
      const { ajnaRedeemer } = await loadFixture(deployFixture);
      const currentWeek = CURRENT_WEEK;
      const randomClaim = await prisma.ajnaRewardsWeeklyClaim.findFirst({
        where: {
          week_number: currentWeek,
        },
      });
      const testUser = ethers.provider.getSigner(randomClaim?.user_address as string);
      await expect(
        ajnaRedeemer.connect(testUser).claimMultiple([currentWeek], [randomClaim!.amount], [randomClaim!.proof])
      ).to.not.be.reverted;
    });
  });
});
