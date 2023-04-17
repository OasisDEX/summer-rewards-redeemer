import { increase } from "@nomicfoundation/hardhat-network-helpers/dist/src/helpers/time";
import { createMerkleTree, deployContract } from "../scripts/common/helpers";
import { dummyProcessedSnaphot } from "../scripts/common/test-data";
import { impersonateAccount, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { zeroAddress } from "ethereumjs-util";
import { BigNumber, Signer } from "ethers";
import { ethers, network } from "hardhat";
import keccak256 from "keccak256";
import { WEEK } from "../scripts/common/constants";
import { AjnaDripper } from "../typechain";
import hre from "hardhat";

const { tree, leaves, root } = createMerkleTree(dummyProcessedSnaphot);
const leaf = leaves[1];
const proof = tree.getHexProof(leaf);
/* leaf and proof with index 1 -> address is the firstUser address from hardhat accounts 
 0 indexed user is saved for the owner */
const totalWeekAmount = dummyProcessedSnaphot.reduce((acc, cur) => acc.add(cur.amount), BigNumber.from(0));
// all rewards for a given week
const dataForFirstUser = [dummyProcessedSnaphot[1].address, dummyProcessedSnaphot[1].amount];
async function deployBaseFixture() {
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
  const ajnaToken = await deployContract("AjnaToken", []);
  const ajnaDripper = await deployContract("AjnaDripper", [ajnaToken.address, adminAddress]);
  const ajnaRedeemer = await deployContract("AjnaRedeemer", [ajnaToken.address, operatorAddress, ajnaDripper.address]);
  await ajnaDripper.connect(admin).changeRedeemer(ajnaRedeemer.address);

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
    it("should allow change of weekly amount by 5%", async () => {
      const { ajnaDripper, admin } = await loadFixture(deployBaseFixture);
      const weeklyAmountBefore = await ajnaDripper.weeklyAmount();
      await ajnaDripper.connect(admin).changeWeeklyAmount(weeklyAmountBefore.mul(105).div(100));
      const weeklyAmountAfter = await ajnaDripper.weeklyAmount();
      expect(weeklyAmountBefore.mul(105).div(100)).to.equal(weeklyAmountAfter);
    });
    it("should not allow change of weekly amount by 15%", async () => {
      const { ajnaDripper, admin } = await loadFixture(deployBaseFixture);
      const weeklyAmountBefore = await ajnaDripper.weeklyAmount();
      const tx = ajnaDripper.connect(admin).changeWeeklyAmount(weeklyAmountBefore.mul(115).div(100));
      await expect(tx).to.be.revertedWith("drip/invalid-amount");
    });
    it("should not allow change of weekly amount to 0", async () => {
      const { ajnaDripper, admin } = await loadFixture(deployBaseFixture);
      const tx = ajnaDripper.connect(admin).changeWeeklyAmount(0);
      await expect(tx).to.be.revertedWith("drip/invalid-amount");
    });
    it("should not allow change changing weekly amount before 4 weeks pass", async () => {
      const { ajnaDripper, admin } = await loadFixture(deployBaseFixture);
      const weeklyAmountBefore = await ajnaDripper.weeklyAmount();
      await ajnaDripper.connect(admin).changeWeeklyAmount(weeklyAmountBefore.mul(105).div(100));
      const weeklyAmountAfter = await ajnaDripper.weeklyAmount();
      await increase(WEEK);
      await expect(
        ajnaDripper.connect(admin).changeWeeklyAmount(weeklyAmountAfter.mul(105).div(100))
      ).to.be.revertedWith("drip/invalid-timestamp");
    });
    it("should not allow change of weekly amount by not authorized user", async () => {
      const { ajnaDripper, admin } = await loadFixture(deployBaseFixture);
      const weeklyAmountBefore = await ajnaDripper.weeklyAmount();
      await expect(ajnaDripper.changeWeeklyAmount(weeklyAmountBefore.mul(105).div(100))).to.be.reverted;
    });
  });
  describe("emergencyWithdraw", () => {
    it("should allow the operator to withdraw to dripper contract - confirm company wallet balance after", async () => {
      const { ajnaToken, ajnaDripper, admin, adminAddress } = await loadFixture(deployBaseFixture);

      const beneficiaryBalanceBefore = await ajnaToken.balanceOf(adminAddress);
      const dripperBalanceBefore = await ajnaToken.balanceOf(ajnaDripper.address);

      await ajnaDripper.connect(admin).emergencyWithdraw();
      const beneficiaryBalanceAfter = await ajnaToken.balanceOf(adminAddress);

      expect(beneficiaryBalanceAfter.sub(beneficiaryBalanceBefore)).to.eql(dripperBalanceBefore);
    });
    it.skip("shouldn't allow REDEEMER_ROLE to withdraw", async () => {
      const { ajnaRedeemer, ajnaToken, ajnaDripper } = await loadFixture(deployBaseFixture);

      await impersonateAccount(ajnaRedeemer.address);
      await expect(ajnaDripper.emergencyWithdraw()).to.be.revertedWith(
        "AccessControl: account 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 is missing role 0x0000000000000000000000000000000000000000000000000000000000000000"
      );
    });
    it("shouldn't allow a random user to withdraw", async () => {
      const { ajnaDripper, randomUser } = await loadFixture(deployBaseFixture);
      await expect(ajnaDripper.connect(randomUser).emergencyWithdraw()).to.be.reverted;
    });
  });
  describe("drip", () => {
    it("should transfer 2000 AJNA to redeemer on addRoot and emit Transfer event", async () => {
      const { ajnaToken, ajnaRedeemer, ajnaDripper, operator } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      const tx = await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);
      expect(tx)
        .to.emit(ajnaToken, "Transfer")
        .withArgs(ajnaDripper.address, ajnaRedeemer.address, ethers.utils.parseEther("2000"));
      expect(tx).to.emit(ajnaDripper, "Dripped").withArgs(currentWeek, ethers.utils.parseEther("2000"));
      expect(await ajnaToken.balanceOf(ajnaRedeemer.address)).to.equal(ethers.utils.parseEther("2000")); // Check if the redeemer received the tokens
    });
    it("should not transfer 2000 AJNA with insufficient funds", async () => {
      const { ajnaRedeemer, operator } = await loadFixture(deployBaseNoMintFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      const tx = ajnaRedeemer.connect(operator).addRoot(currentWeek, root);
      await expect(tx).to.be.revertedWith("ERC20: transfer amount exceeds balance");
    });
    it("should fail to call drip", async () => {
      const { ajnaRedeemer, operator, ajnaDripper } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);
      await expect(ajnaDripper.connect(operator).drip()).to.be.reverted;
    });
    it.skip("should not fail to call drip by redeemer", async () => {
      const { ajnaRedeemer, operator, ajnaDripper } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();
      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      await impersonateAccount(ajnaRedeemer.address);
      await ajnaDripper.drip();
    });
    it.skip("should not fail to call drip by redeemer", async () => {
      const { ajnaRedeemer, operator, ajnaDripper } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();
      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      await impersonateAccount(ajnaRedeemer.address);
      await expect(ajnaDripper.drip()).to.be.reverted;
    });
  });
  describe("changeRedeemer", () => {
    it("should allow admin role to change redeemer", async () => {
      const { ajnaToken, ajnaRedeemer, firstUser, operator, firstUserAddress, operatorAddress, ajnaDripper, admin } =
        await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      await expect(ajnaRedeemer.connect(firstUser).claimMultiple([currentWeek], [dataForFirstUser[1]], [proof])).to.not
        .be.reverted;
      expect(await ajnaToken.connect(firstUser).balanceOf(firstUserAddress)).to.eql(dataForFirstUser[1]);

      const newAjnaRedeemer = await deployContract("AjnaRedeemer", [
        ajnaToken.address,
        operatorAddress,
        ajnaDripper.address,
      ]);
      await expect(ajnaDripper.connect(admin).changeRedeemer(newAjnaRedeemer.address)).to.be.not.reverted;
      expect(await ajnaDripper.redeemer()).to.be.equal(newAjnaRedeemer.address);
    });
    it("should not allow operator role to change redeemer", async () => {
      const { ajnaToken, ajnaRedeemer, firstUser, operator, firstUserAddress, operatorAddress, ajnaDripper } =
        await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      await expect(ajnaRedeemer.connect(firstUser).claimMultiple([currentWeek], [dataForFirstUser[1]], [proof])).to.not
        .be.reverted;
      expect(await ajnaToken.connect(firstUser).balanceOf(firstUserAddress)).to.eql(dataForFirstUser[1]);

      const newAjnaRedeemer = await deployContract("AjnaRedeemer", [
        ajnaToken.address,
        operatorAddress,
        ajnaDripper.address,
      ]);
      await expect(ajnaDripper.connect(operator).changeRedeemer(newAjnaRedeemer.address)).to.be.revertedWith(
        "AccessControl: account 0x15d34aaf54267db7d7c367839aaf71a00a2c6a65 is missing role 0x0000000000000000000000000000000000000000000000000000000000000000"
      );
    });
    it("should not allow adding the same weekly root with new redeemer", async () => {
      const { ajnaToken, ajnaRedeemer, firstUser, operator, firstUserAddress, operatorAddress, ajnaDripper, admin } =
        await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      await expect(ajnaRedeemer.connect(firstUser).claimMultiple([currentWeek], [dataForFirstUser[1]], [proof])).to.not
        .be.reverted;
      expect(await ajnaToken.connect(firstUser).balanceOf(firstUserAddress)).to.eql(dataForFirstUser[1]);

      const newAjnaRedeemer = await deployContract("AjnaRedeemer", [
        ajnaToken.address,
        operatorAddress,
        ajnaDripper.address,
      ]);
      await ajnaDripper.connect(admin).changeRedeemer(newAjnaRedeemer.address);
      await expect(newAjnaRedeemer.connect(operator).addRoot(currentWeek, root)).to.be.revertedWith(
        "drip/already-dripped"
      );
    });

    it("should not allow adding new root for next week with new redeemer -  'drip/already-dripped' ", async () => {
      const { ajnaToken, ajnaRedeemer, firstUser, operator, firstUserAddress, operatorAddress, ajnaDripper, admin } =
        await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      await expect(ajnaRedeemer.connect(firstUser).claimMultiple([currentWeek], [dataForFirstUser[1]], [proof])).to.not
        .be.reverted;
      expect(await ajnaToken.connect(firstUser).balanceOf(firstUserAddress)).to.eql(dataForFirstUser[1]);

      const newAjnaRedeemer = await deployContract("AjnaRedeemer", [
        ajnaToken.address,
        operatorAddress,
        ajnaDripper.address,
      ]);
      await ajnaDripper.connect(admin).changeRedeemer(newAjnaRedeemer.address);
      await expect(newAjnaRedeemer.connect(operator).addRoot(currentWeek + 1, root)).to.be.revertedWith(
        "drip/already-dripped"
      );
    });
    it("should allow adding new root for next week with new redeemer - advance time by one week", async () => {
      const { ajnaToken, ajnaRedeemer, firstUser, operator, firstUserAddress, operatorAddress, ajnaDripper, admin } =
        await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      await expect(ajnaRedeemer.connect(firstUser).claimMultiple([currentWeek], [dataForFirstUser[1]], [proof])).to.not
        .be.reverted;
      expect(await ajnaToken.connect(firstUser).balanceOf(firstUserAddress)).to.eql(dataForFirstUser[1]);

      const newAjnaRedeemer = await deployContract("AjnaRedeemer", [
        ajnaToken.address,
        operatorAddress,
        ajnaDripper.address,
      ]);
      await ajnaDripper.connect(admin).changeRedeemer(newAjnaRedeemer.address);
      await increase(WEEK);
      await expect(newAjnaRedeemer.connect(operator).addRoot(currentWeek + 1, root)).to.be.not.reverted;
    });
  });
});
