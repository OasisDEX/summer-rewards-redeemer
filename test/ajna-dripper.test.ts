import { createMerkleTree, deployContract } from "../scripts/common/helpers";
import { dummyProcessedSnaphot } from "../scripts/common/test-data";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { zeroAddress } from "ethereumjs-util";
import { BigNumber } from "ethers";
import { ethers, network } from "hardhat";
import keccak256 from "keccak256";

const { leaves, root } = createMerkleTree(dummyProcessedSnaphot);

/* leaf and proof with index 1 -> address is the firstUser address from hardhat accounts 
 0 indexed user is saved for the owner */
const totalWeekAmount = dummyProcessedSnaphot.reduce((acc, cur) => acc.add(cur.amount), BigNumber.from(0));
// all rewards for a given week
async function deployTokenFixture() {
  const [owner, firstUser, randomUser, admin, operator] = await ethers.getSigners();
  const ownerAddress = await owner.getAddress();
  const firstUserAddress = await firstUser.getAddress();
  const adminAddress = await admin.getAddress();
  const operatorAddress = await operator.getAddress();
  const ajnaToken = await deployContract("AjnaToken", []);
  const ajnaDripper = await deployContract("AjnaDripper", [ajnaToken.address, adminAddress]);
  const ajnaRedeemer = await deployContract("AjnaRedeemer", [ajnaToken.address, operatorAddress, ajnaDripper.address]);
  await ajnaDripper.connect(admin).changeRedeemer(ajnaRedeemer.address);
  await ajnaToken.mint(ajnaDripper.address, totalWeekAmount.mul(100));

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
    admin,
    adminAddress,
  };
}
describe("AjnaDripper", () => {
  describe("changeWeeklyAmount", () => {
    it("should allow change of weekly amount by 5%", async () => {
      const { ajnaDripper, admin } = await loadFixture(deployTokenFixture);
      const weeklyAmountBefore = await ajnaDripper.weeklyAmount();
      await ajnaDripper.connect(admin).changeWeeklyAmount(weeklyAmountBefore.mul(105).div(100));
      const weeklyAmountAfter = await ajnaDripper.weeklyAmount();
      expect(weeklyAmountBefore.mul(105).div(100)).to.equal(weeklyAmountAfter);
    });
    it("should not allow change of weekly amount by 15%", async () => {
      const { ajnaDripper, admin } = await loadFixture(deployTokenFixture);
      const weeklyAmountBefore = await ajnaDripper.weeklyAmount();
      const tx = ajnaDripper.connect(admin).changeWeeklyAmount(weeklyAmountBefore.mul(115).div(100));
      await expect(tx).to.be.revertedWith("drip/invalid-amount");
    });
    it("should not allow change of weekly amount to 0", async () => {
      const { ajnaDripper, admin } = await loadFixture(deployTokenFixture);
      const tx = ajnaDripper.connect(admin).changeWeeklyAmount(0);
      await expect(tx).to.be.revertedWith("drip/invalid-amount");
    });
  });
  describe("emergencyWithdraw", () => {
    it("should allow the operator to withdraw to dripper contract - confirm company wallet balance after", async () => {
      const { ajnaToken, ajnaDripper, admin, adminAddress } = await loadFixture(deployTokenFixture);

      const beneficiaryBalanceBefore = await ajnaToken.balanceOf(adminAddress);
      const dripperBalanceBefore = await ajnaToken.balanceOf(ajnaDripper.address);

      await ajnaDripper.connect(admin).emergencyWithdraw();
      const beneficiaryBalanceAfter = await ajnaToken.balanceOf(adminAddress);

      expect(beneficiaryBalanceAfter.sub(beneficiaryBalanceBefore)).to.eql(dripperBalanceBefore);
    });

    it("shouldn't allow a random user to withdraw", async () => {
      const { ajnaRedeemer, randomUser } = await loadFixture(deployTokenFixture);
      await expect(ajnaRedeemer.connect(randomUser).emergencyWithdraw()).to.be.reverted;
    });
  });
  describe("drip", () => {
    it("should transfer 2000 AJNA to redeemer on addRoot and emit Transfer event", async () => {
      const { ajnaToken, ajnaRedeemer, ajnaDripper, operator } = await loadFixture(deployTokenFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      const tx = await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);
      expect(tx)
        .to.emit(ajnaToken, "Transfer")
        .withArgs(ajnaDripper.address, ajnaRedeemer.address, ethers.utils.parseEther("2000"));
      expect(await ajnaToken.balanceOf(ajnaRedeemer.address)).to.equal(ethers.utils.parseEther("2000")); // Check if the redeemer received the tokens
    });
  });
});
