import { loadFixture, time } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";

import {
  HUNDRED,
  HUNDRED_THOUSAND,
  MILLION,
  TEN_THOUSAND,
  THOUSAND,
  TWO_THOUSAND,
  WEEK,
} from "../scripts/common/constants";
import { createMerkleTree, deployContract, impersonate } from "../scripts/common/helpers";
import { BASE_WEEKLY_AMOUNT, dummyProcessedSnaphot } from "../scripts/common/test-data";
import { AjnaDripper, AjnaRedeemer, AjnaToken } from "../typechain-types";

const { tree, leaves, root } = createMerkleTree(dummyProcessedSnaphot);
const leaf = leaves[1];
const proof = tree.getHexProof(leaf);
const totalWeekAmount = dummyProcessedSnaphot.reduce((acc, cur) => acc.add(cur.amount), BigNumber.from(0));

const dataForFirstUser = [dummyProcessedSnaphot[1].address, dummyProcessedSnaphot[1].amount];
async function deployBaseFixture() {
  const [owner, firstUser, randomUser, admin, operator] = await ethers.getSigners();

  const ownerAddress = await owner.getAddress();
  const firstUserAddress = await firstUser.getAddress();
  const adminAddress = await admin.getAddress();
  const operatorAddress = await operator.getAddress();

  const ajnaToken = await deployContract<AjnaToken>("AjnaToken", []);
  const ajnaDripper = await deployContract<AjnaDripper>("AjnaDripper", [ajnaToken.address, adminAddress]);
  const ajnaRedeemer = await deployContract<AjnaRedeemer>("AjnaRedeemer", [
    ajnaToken.address,
    operatorAddress,
    ajnaDripper.address,
  ]);
  await ajnaDripper.connect(admin).changeRedeemer(ajnaRedeemer.address, BASE_WEEKLY_AMOUNT);
  await ajnaToken.mint(ajnaDripper.address, totalWeekAmount.mul(100));
  console.table({
    ajnaToken: ajnaToken.address,
    ajnaRedeemer: ajnaRedeemer.address,
    owner: ownerAddress,
    firstUser: firstUserAddress,
    randomUser: randomUser.address,
    ajnaDripper: ajnaDripper.address,
  });
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
    operatorAddress,
    admin,
    adminAddress,
  };
}
async function deployBaseNoMintFixture() {
  const [owner, firstUser, randomUser, admin, operator] = await ethers.getSigners();

  const ownerAddress = await owner.getAddress();
  const firstUserAddress = await firstUser.getAddress();
  const adminAddress = await admin.getAddress();
  const operatorAddress = await operator.getAddress();

  const ajnaToken = await deployContract<AjnaToken>("AjnaToken", []);
  const ajnaDripper = await deployContract<AjnaDripper>("AjnaDripper", [ajnaToken.address, adminAddress]);
  const ajnaRedeemer = await deployContract<AjnaRedeemer>("AjnaRedeemer", [
    ajnaToken.address,
    operatorAddress,
    ajnaDripper.address,
  ]);
  await ajnaDripper.connect(admin).changeRedeemer(ajnaRedeemer.address, BASE_WEEKLY_AMOUNT);

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
    operatorAddress,
    admin,
    adminAddress,
  };
}
describe("AjnaDripper", () => {
  describe("changeWeeklyAmount", () => {
    it("should allow change of weekly amount by 5% up", async () => {
      const { ajnaDripper, admin } = await loadFixture(deployBaseFixture);
      await time.increase(WEEK * 4);
      const weeklyAmountBefore = await ajnaDripper.weeklyAmount();
      await ajnaDripper.connect(admin).changeWeeklyAmount(weeklyAmountBefore.mul(105).div(100));
      const weeklyAmountAfter = await ajnaDripper.weeklyAmount();
      expect(weeklyAmountBefore.mul(105).div(100)).to.equal(weeklyAmountAfter);
    });
    it("should allow change of weekly amount by 5% down", async () => {
      const { ajnaDripper, admin } = await loadFixture(deployBaseFixture);
      await time.increase(WEEK * 4);
      const weeklyAmountBefore = await ajnaDripper.weeklyAmount();
      await ajnaDripper.connect(admin).changeWeeklyAmount(weeklyAmountBefore.mul(95).div(100));
      const weeklyAmountAfter = await ajnaDripper.weeklyAmount();
      expect(weeklyAmountBefore.mul(95).div(100)).to.equal(weeklyAmountAfter);
    });
    it("should not allow change of weekly amount by 15% up", async () => {
      const { ajnaDripper, admin } = await loadFixture(deployBaseFixture);
      await time.increase(WEEK * 4);
      const weeklyAmountBefore = await ajnaDripper.weeklyAmount();
      const tx = ajnaDripper.connect(admin).changeWeeklyAmount(weeklyAmountBefore.mul(115).div(100));
      await expect(tx).to.be.revertedWith("drip/invalid-amount");
    });
    it("should not allow change of weekly amount by 15% down", async () => {
      const { ajnaDripper, admin } = await loadFixture(deployBaseFixture);
      await time.increase(WEEK * 4);
      const weeklyAmountBefore = await ajnaDripper.weeklyAmount();
      const tx = ajnaDripper.connect(admin).changeWeeklyAmount(weeklyAmountBefore.mul(85).div(100));
      await expect(tx).to.be.revertedWith("drip/invalid-amount");
    });
    it("should not allow change of weekly amount above max", async () => {
      const { ajnaDripper, admin } = await loadFixture(deployBaseFixture);
      await time.increase(WEEK * 4);
      const tx = ajnaDripper.connect(admin).changeWeeklyAmount(BASE_WEEKLY_AMOUNT.mul(2));
      await expect(tx).to.be.revertedWith("drip/amount-exceeds-max");
    });
    it("should not allow change of weekly amount to 0", async () => {
      const { ajnaDripper, admin } = await loadFixture(deployBaseFixture);
      await time.increase(WEEK * 4);
      const tx = ajnaDripper.connect(admin).changeWeeklyAmount(0);
      await expect(tx).to.be.revertedWith("drip/invalid-amount");
    });
    it("should not allow change changing weekly amount before 4 weeks pass", async () => {
      const { ajnaDripper, admin } = await loadFixture(deployBaseFixture);
      await time.increase(WEEK * 4);
      const weeklyAmountBefore = await ajnaDripper.weeklyAmount();
      await ajnaDripper.connect(admin).changeWeeklyAmount(weeklyAmountBefore.mul(105).div(100));
      const weeklyAmountAfter = await ajnaDripper.weeklyAmount();
      await time.increase(WEEK);
      await expect(
        ajnaDripper.connect(admin).changeWeeklyAmount(weeklyAmountAfter.mul(105).div(100))
      ).to.be.revertedWith("drip/invalid-timestamp");
    });
    it("should not allow change of weekly amount by not authorized user", async () => {
      const { ajnaDripper } = await loadFixture(deployBaseFixture);
      await time.increase(WEEK * 4);
      const weeklyAmountBefore = await ajnaDripper.weeklyAmount();
      await expect(ajnaDripper.changeWeeklyAmount(weeklyAmountBefore.mul(105).div(100))).to.be.reverted;
    });
    it("should allow change of weekly amount according to the rewards distribution scheme", async () => {
      const { ajnaDripper, admin } = await loadFixture(deployBaseFixture);

      const rewardsDistribution = {
        1: MILLION,
        2: HUNDRED_THOUSAND.mul(9),
        3: HUNDRED_THOUSAND.mul(8).add(TEN_THOUSAND),
        4: HUNDRED_THOUSAND.mul(7).add(TEN_THOUSAND.mul(2)).add(THOUSAND.mul(9)),
        5: HUNDRED_THOUSAND.mul(6).add(TEN_THOUSAND.mul(5)).add(THOUSAND.mul(6)).add(HUNDRED),
        6: HUNDRED_THOUSAND.mul(6),
        7: HUNDRED_THOUSAND.mul(5).add(TEN_THOUSAND.mul(5)),
        8: HUNDRED_THOUSAND.mul(5),
      };

      for (const [_, value] of Object.entries(rewardsDistribution)) {
        await time.increase(WEEK * 4);
        await ajnaDripper.connect(admin).changeWeeklyAmount(value);
      }
    });
    it("should NOT allow tochange of weekly amount according to the tempered rewards distribution scheme", async () => {
      const { ajnaDripper, admin } = await loadFixture(deployBaseFixture);

      const rewardsDistribution = {
        1: MILLION,
        2: HUNDRED_THOUSAND.mul(9),
        3: HUNDRED_THOUSAND.mul(8).add(TEN_THOUSAND),
        4: HUNDRED_THOUSAND.mul(7).add(TEN_THOUSAND.mul(2)).add(THOUSAND.mul(9)),
        5: HUNDRED_THOUSAND.mul(6).add(TEN_THOUSAND.mul(5)).add(THOUSAND.mul(6)).add(HUNDRED),
        6: HUNDRED_THOUSAND.mul(6),
        7: HUNDRED_THOUSAND.mul(5).add(TEN_THOUSAND.mul(5)),
      };
      const temperedFinalAmount = HUNDRED_THOUSAND.mul(4);
      for (const [_, value] of Object.entries(rewardsDistribution)) {
        await time.increase(WEEK * 4);
        await ajnaDripper.connect(admin).changeWeeklyAmount(value);
      }
      await time.increase(WEEK * 4);
      await expect(ajnaDripper.connect(admin).changeWeeklyAmount(temperedFinalAmount)).to.be.revertedWith(
        "drip/invalid-amount"
      );
    });
  });
  describe("drip", () => {
    it("should transfer 2000 AJNA to redeemer on addRoot and emit Transfer event", async () => {
      const { ajnaToken, ajnaRedeemer, ajnaDripper, operator } = await loadFixture(deployBaseFixture);
      await time.increase(WEEK * 4);
      const currentWeek = (await ajnaDripper.getCurrentWeek()).toNumber();

      const tx = await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);
      expect(tx).to.emit(ajnaToken, "Transfer").withArgs(ajnaDripper.address, ajnaRedeemer.address, BASE_WEEKLY_AMOUNT);
      expect(tx).to.emit(ajnaDripper, "Dripped").withArgs(currentWeek, BASE_WEEKLY_AMOUNT);
      expect(await ajnaToken.balanceOf(ajnaRedeemer.address)).to.equal(BASE_WEEKLY_AMOUNT); // Check if the redeemer received the tokens
    });
    it("should not transfer 2000 AJNA with insufficient funds", async () => {
      const { ajnaRedeemer, ajnaDripper, operator } = await loadFixture(deployBaseNoMintFixture);
      await time.increase(WEEK * 4);

      const currentWeek = (await ajnaDripper.getCurrentWeek()).toNumber();
      const tx = ajnaRedeemer.connect(operator).addRoot(currentWeek, root);
      await expect(tx).to.be.revertedWith("ERC20: transfer amount exceeds balance");
    });
    it("should fail to call drip", async () => {
      const { operator, ajnaDripper } = await loadFixture(deployBaseFixture);
      await time.increase(WEEK * 4);

      const currentWeek = (await ajnaDripper.getCurrentWeek()).toNumber();
      await expect(ajnaDripper.connect(operator).drip(currentWeek)).to.be.reverted;
    });
    it("should fail to call drip - wrong week number", async () => {
      const { ajnaRedeemer, ajnaDripper } = await loadFixture(deployBaseFixture);
      await time.increase(WEEK * 4);

      const currentWeek = (await ajnaDripper.getCurrentWeek()).toNumber();
      const signer = await impersonate(ajnaRedeemer.address);
      await expect(ajnaDripper.connect(signer).drip(currentWeek + 2)).to.be.revertedWith("drip/invalid-week");
    });
    it("should not fail to call drip by redeemer", async () => {
      const { ajnaRedeemer, ajnaDripper } = await loadFixture(deployBaseFixture);
      await time.increase(WEEK * 4);

      const currentWeek = (await ajnaDripper.getCurrentWeek()).toNumber();
      const signer = await impersonate(ajnaRedeemer.address);
      await expect(ajnaDripper.connect(signer).drip(currentWeek)).to.be.not.reverted;
    });
  });
  describe("changeRedeemer", () => {
    it("should allow admin role to change redeemer", async () => {
      const { ajnaToken, ajnaRedeemer, firstUser, operator, firstUserAddress, operatorAddress, ajnaDripper, admin } =
        await loadFixture(deployBaseFixture);
      await time.increase(WEEK * 4);
      const currentWeek = (await ajnaDripper.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      await expect(ajnaRedeemer.connect(firstUser).claimMultiple([currentWeek], [dataForFirstUser[1]], [proof])).to.not
        .be.reverted;
      expect(await ajnaToken.connect(firstUser).balanceOf(firstUserAddress)).to.eql(dataForFirstUser[1]);

      const newAjnaRedeemer = await deployContract("AjnaRedeemer", [
        ajnaToken.address,
        operatorAddress,
        ajnaDripper.address,
      ]);
      await expect(ajnaDripper.connect(admin).changeRedeemer(newAjnaRedeemer.address, BASE_WEEKLY_AMOUNT)).to.be.not
        .reverted;
      expect(await ajnaDripper.redeemer()).to.be.equal(newAjnaRedeemer.address);
    });
    it("should not allow admin role to change redeemer if _weeklyAmount is above max", async () => {
      const { ajnaToken, ajnaRedeemer, firstUser, operator, firstUserAddress, operatorAddress, ajnaDripper, admin } =
        await loadFixture(deployBaseFixture);
      await time.increase(WEEK * 4);
      const currentWeek = (await ajnaDripper.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      await expect(ajnaRedeemer.connect(firstUser).claimMultiple([currentWeek], [dataForFirstUser[1]], [proof])).to.not
        .be.reverted;
      expect(await ajnaToken.connect(firstUser).balanceOf(firstUserAddress)).to.eql(dataForFirstUser[1]);

      const newAjnaRedeemer = await deployContract("AjnaRedeemer", [
        ajnaToken.address,
        operatorAddress,
        ajnaDripper.address,
      ]);
      await expect(
        ajnaDripper.connect(admin).changeRedeemer(newAjnaRedeemer.address, BASE_WEEKLY_AMOUNT.mul(2))
      ).to.be.revertedWith("drip/amount-exceeds-max");
    });
    it("should not allow operator role to change redeemer", async () => {
      const { ajnaToken, ajnaRedeemer, firstUser, operator, firstUserAddress, operatorAddress, ajnaDripper } =
        await loadFixture(deployBaseFixture);
      await time.increase(WEEK * 4);
      const currentWeek = (await ajnaDripper.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      await expect(ajnaRedeemer.connect(firstUser).claimMultiple([currentWeek], [dataForFirstUser[1]], [proof])).to.not
        .be.reverted;
      expect(await ajnaToken.connect(firstUser).balanceOf(firstUserAddress)).to.eql(dataForFirstUser[1]);

      const newAjnaRedeemer = await deployContract("AjnaRedeemer", [
        ajnaToken.address,
        operatorAddress,
        ajnaDripper.address,
      ]);
      await expect(
        ajnaDripper.connect(operator).changeRedeemer(newAjnaRedeemer.address, BASE_WEEKLY_AMOUNT)
      ).to.be.revertedWith(
        "AccessControl: account 0x15d34aaf54267db7d7c367839aaf71a00a2c6a65 is missing role 0x0000000000000000000000000000000000000000000000000000000000000000"
      );
    });
    it("should not allow adding the same weekly root with new redeemer", async () => {
      const { ajnaToken, ajnaRedeemer, firstUser, operator, firstUserAddress, operatorAddress, ajnaDripper, admin } =
        await loadFixture(deployBaseFixture);
      await time.increase(WEEK * 4);
      const currentWeek = (await ajnaDripper.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      await expect(ajnaRedeemer.connect(firstUser).claimMultiple([currentWeek], [dataForFirstUser[1]], [proof])).to.not
        .be.reverted;
      expect(await ajnaToken.connect(firstUser).balanceOf(firstUserAddress)).to.eql(dataForFirstUser[1]);

      const newAjnaRedeemer = await deployContract("AjnaRedeemer", [
        ajnaToken.address,
        operatorAddress,
        ajnaDripper.address,
      ]);
      await ajnaDripper.connect(admin).changeRedeemer(newAjnaRedeemer.address, BASE_WEEKLY_AMOUNT);
      await expect(newAjnaRedeemer.connect(operator).addRoot(currentWeek, root)).to.be.revertedWith(
        "drip/already-dripped"
      );
    });

    it("should not allow adding new root for next week with new redeemer -  'redeemer/invalid-week' ", async () => {
      const { ajnaToken, ajnaRedeemer, firstUser, operator, firstUserAddress, operatorAddress, ajnaDripper, admin } =
        await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaDripper.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      await expect(ajnaRedeemer.connect(firstUser).claimMultiple([currentWeek], [dataForFirstUser[1]], [proof])).to.not
        .be.reverted;
      expect(await ajnaToken.connect(firstUser).balanceOf(firstUserAddress)).to.eql(dataForFirstUser[1]);

      const newAjnaRedeemer = await deployContract("AjnaRedeemer", [
        ajnaToken.address,
        operatorAddress,
        ajnaDripper.address,
      ]);
      await ajnaDripper.connect(admin).changeRedeemer(newAjnaRedeemer.address, BASE_WEEKLY_AMOUNT);
      await expect(newAjnaRedeemer.connect(operator).addRoot(currentWeek + 1, root)).to.be.revertedWith(
        "redeemer/invalid-week"
      );
    });
    it("should allow adding new root for next week with new redeemer - advance time by one week", async () => {
      const { ajnaToken, ajnaRedeemer, firstUser, operator, firstUserAddress, operatorAddress, ajnaDripper, admin } =
        await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaDripper.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      await expect(ajnaRedeemer.connect(firstUser).claimMultiple([currentWeek], [dataForFirstUser[1]], [proof])).to.not
        .be.reverted;
      expect(await ajnaToken.connect(firstUser).balanceOf(firstUserAddress)).to.eql(dataForFirstUser[1]);

      const newAjnaRedeemer = await deployContract("AjnaRedeemer", [
        ajnaToken.address,
        operatorAddress,
        ajnaDripper.address,
      ]);
      await ajnaDripper.connect(admin).changeRedeemer(newAjnaRedeemer.address, BASE_WEEKLY_AMOUNT);
      await time.increase(WEEK);
      await expect(newAjnaRedeemer.connect(operator).addRoot(currentWeek + 1, root)).to.be.not.reverted;
    });
  });
  describe("emergencyWithdraw", () => {
    it("should allow admin role to withdraw", async () => {
      const { ajnaToken, adminAddress, ajnaDripper, admin } = await loadFixture(deployBaseFixture);
      await time.increase(WEEK * 4);

      const adminBalanceBefore = await ajnaToken.balanceOf(adminAddress);
      const dripperBalanceBefore = await ajnaToken.balanceOf(ajnaDripper.address);
      await expect(ajnaDripper.connect(admin).emergencyWithdraw(TWO_THOUSAND)).to.be.not.reverted;
      expect(await ajnaToken.balanceOf(ajnaDripper.address)).to.eql(dripperBalanceBefore.sub(TWO_THOUSAND));
      expect(await ajnaToken.balanceOf(adminAddress)).to.eql(adminBalanceBefore.add(TWO_THOUSAND));
    });
    it("should NOT allow REDEEMER_ROLE to withdraw", async () => {
      const { ajnaDripper, ajnaRedeemer } = await loadFixture(deployBaseFixture);
      await time.increase(WEEK * 4);
      const signer = await impersonate(ajnaRedeemer.address);
      await expect(ajnaDripper.connect(signer).emergencyWithdraw(TWO_THOUSAND)).to.be.reverted;
    });
    it("should NOT allow random user to withdraw", async () => {
      const { ajnaDripper, operator } = await loadFixture(deployBaseFixture);
      await time.increase(WEEK * 4);
      await expect(ajnaDripper.connect(operator).emergencyWithdraw(TWO_THOUSAND)).to.be.reverted;
    });
  });
});
