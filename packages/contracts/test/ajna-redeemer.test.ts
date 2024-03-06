import { loadFixture, time } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { createMerkleTree } from "common";
import { config } from "common/config/config";
import { WEEK } from "common/constants/constants";
import { BASE_WEEKLY_AMOUNT, dummyProcessedSnaphot } from "common/utils/data";
import { BigNumber } from "ethers";
import { ethers, network } from "hardhat";
import { AjnaDripper, AjnaRedeemer, AjnaToken } from "typechain-types";

import { deployContract } from "../scripts/utils/hardhat.utils";

const { leaves, tree, root } = createMerkleTree(dummyProcessedSnaphot);

const dataForFirstUser = [dummyProcessedSnaphot[1].userAddress, dummyProcessedSnaphot[1].amount];

/* leaf and proof with index 1 -> address is the firstUser address from hardhat accounts 
 0 indexed user is saved for the owner */
const leaf = leaves[1];
const proof = tree.getHexProof(leaf);

// all rewards for a given week
const totalWeekAmount = dummyProcessedSnaphot.reduce((acc, cur) => acc.add(cur.amount), BigNumber.from(0));

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
  await ajnaDripper.connect(admin).setup(ajnaRedeemer.address, BASE_WEEKLY_AMOUNT);
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
  };
}

describe("AjnaRedeemer", () => {
  describe("token", () => {
    it("should mint", async () => {
      const { ajnaToken, operator } = await loadFixture(deployBaseFixture);
      const balanceBefore = await ajnaToken.balanceOf(operator.address);
      await ajnaToken.mint(operator.address, 100);
      const balanceAfter = await ajnaToken.balanceOf(operator.address);
      expect(balanceAfter.sub(balanceBefore)).to.equal(100);
    });
    it("should burn", async () => {
      const { ajnaToken, operator } = await loadFixture(deployBaseFixture);
      await ajnaToken.mint(operator.address, 1000);
      const balanceBefore = await ajnaToken.balanceOf(operator.address);
      await ajnaToken.burn(operator.address, 100);
      const balanceAfter = await ajnaToken.balanceOf(operator.address);
      expect(balanceBefore.sub(balanceAfter)).to.equal(100);
    });
    it("should not mint", async () => {
      const { ajnaToken, operator } = await loadFixture(deployBaseFixture);
      await expect(ajnaToken.connect(operator).mint(operator.address, 100)).to.be.reverted;
    });
    it("should not burn", async () => {
      const { ajnaToken, operator } = await loadFixture(deployBaseFixture);
      await ajnaToken.mint(operator.address, 1000);
      await expect(ajnaToken.connect(operator).burn(operator.address, 100)).to.be.reverted;
    });
  });
  describe("addRoot", () => {
    it("should add root (by operator), revert on second try (same week number)", async () => {
      const { ajnaRedeemer, operator } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await expect(ajnaRedeemer.connect(operator).addRoot(currentWeek, root)).to.be.not.reverted;
      await expect(ajnaRedeemer.connect(operator).addRoot(currentWeek, root)).to.be.revertedWith(
        "redeemer/root-already-added"
      );
      expect(await ajnaRedeemer.getRoot(currentWeek)).to.equal(root);
    });
    it("should add root (by operator), with number lower than deployment week", async () => {
      const { ajnaRedeemer, operator } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await expect(ajnaRedeemer.connect(operator).addRoot(currentWeek - 1, root)).to.be.revertedWith(
        "drip/invalid-week"
      );
    });
    it("should not add root (by admin), revert on second try (same week number)", async () => {
      const { ajnaRedeemer, firstUser } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await expect(ajnaRedeemer.connect(firstUser).addRoot(currentWeek, root)).to.be.reverted;
      await expect(ajnaRedeemer.connect(firstUser).addRoot(currentWeek, root)).to.be.reverted;
    });
    it("should add root (by operator), revert on second try (diff week number)", async () => {
      const { ajnaRedeemer, operator } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await expect(ajnaRedeemer.connect(operator).addRoot(currentWeek, root)).to.be.not.reverted;
      await expect(ajnaRedeemer.connect(operator).addRoot(currentWeek + 1, root)).to.be.revertedWith(
        "drip/invalid-week"
      );
      expect(await ajnaRedeemer.getRoot(currentWeek)).to.equal(root);
    });
    it("should revert add root (by non operator)", async () => {
      const { ajnaRedeemer, firstUser } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await expect(ajnaRedeemer.connect(firstUser).addRoot(currentWeek, root)).to.be.reverted;
    });
  });

  describe("getRoot", () => {
    it("should return the same weekly root as added by operator", async () => {
      const { ajnaRedeemer, operator } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      expect(await ajnaRedeemer.getRoot(currentWeek)).to.equal(root);
    });
    it("should revert if there is no root for given week", async () => {
      const { ajnaRedeemer, operator } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);
      const res = await ajnaRedeemer.getRoot(currentWeek + 1);
      expect(res).to.be.equal(ethers.utils.formatBytes32String(""));
    });
  });
  describe("canClaim", () => {
    it("should return true for verified leaf and unclaimed reward and correct week number", async () => {
      const { ajnaRedeemer, operator } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      const testUser = ethers.provider.getSigner(dataForFirstUser[0] as string);
      expect(await ajnaRedeemer.connect(testUser).canClaim(proof, currentWeek, dataForFirstUser[1])).to.equal(true);
    });
    it("should return false for verified leaf and unclaimed reward and wrong week number", async () => {
      const { ajnaRedeemer, operator } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      const testUser = ethers.provider.getSigner(dataForFirstUser[0] as string);
      expect(await ajnaRedeemer.connect(testUser).canClaim(proof, currentWeek + 1, dataForFirstUser[1])).to.equal(
        false
      );
    });
    it("should return false for diff users leaf and unclaimed reward", async () => {
      const { ajnaRedeemer, operator } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);
      const diffUsersProof = tree.getHexProof(leaves[2]);
      const testUser = ethers.provider.getSigner(dataForFirstUser[0] as string);
      expect(
        await ajnaRedeemer.connect(testUser).canClaim(diffUsersProof, currentWeek + 1, dataForFirstUser[1])
      ).to.equal(false);
    });
  });

  describe("claimMultiple", () => {
    it("should claim the reward and flip the hasClaimed flag - revert on second try - verify the users balance after claim", async () => {
      const { ajnaToken, ajnaRedeemer, firstUser, firstUserAddress, operator } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      await expect(ajnaRedeemer.connect(firstUser).claimMultiple([currentWeek], [dataForFirstUser[1]], [proof])).to.not
        .be.reverted;
      await expect(
        ajnaRedeemer.connect(firstUser).claimMultiple([currentWeek], [dataForFirstUser[1]], [proof])
      ).to.be.revertedWith("redeemer/already-claimed");
      expect(await ajnaToken.connect(firstUser).balanceOf(firstUserAddress)).to.eql(dataForFirstUser[1]);
    });
    it("shouldn't claim if insufficient funds", async () => {
      const { ajnaRedeemer, ajnaToken, firstUser, operator } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      const balanceToBurn = await ajnaToken.balanceOf(ajnaRedeemer.address);
      await ajnaToken.burn(ajnaRedeemer.address, balanceToBurn);

      await expect(
        ajnaRedeemer.connect(firstUser).claimMultiple([currentWeek], [dataForFirstUser[1]], [proof])
      ).to.be.revertedWith("ERC20: transfer amount exceeds balance");
    });
    it("shouldn't claim if there are no week numbers provided", async () => {
      const { ajnaRedeemer, firstUser, operator } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      await expect(
        ajnaRedeemer.connect(firstUser).claimMultiple([], [dataForFirstUser[1]], [proof])
      ).to.be.revertedWith("redeemer/cannot-claim-zero");
    });
    it("shouldn't claim with mismatched data lengths", async () => {
      const { ajnaRedeemer, firstUser, operator } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      await expect(
        ajnaRedeemer.connect(firstUser).claimMultiple([currentWeek, currentWeek], [dataForFirstUser[1]], [proof])
      ).to.be.revertedWith("redeemer/invalid-params");
    });
    it("shouldn't allow a random user to use someone's elses claim, using same input", async () => {
      const { ajnaToken, ajnaRedeemer, randomUser, firstUserAddress, operator } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      await expect(
        ajnaRedeemer.connect(randomUser).claimMultiple([currentWeek], [dataForFirstUser[1]], [proof])
      ).to.be.revertedWith("redeemer/cannot-claim");

      expect(await ajnaToken.connect(randomUser).balanceOf(firstUserAddress)).to.eql(ethers.utils.parseEther("0"));
    });
    it("not allow to claim twice the same week - in one call", async () => {
      const { ajnaToken, ajnaRedeemer, firstUserAddress, firstUser, operator } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      await expect(
        ajnaRedeemer
          .connect(firstUser)
          .claimMultiple([currentWeek, currentWeek], [dataForFirstUser[1], dataForFirstUser[1]], [proof, proof])
      ).to.be.reverted;
      await expect(
        ajnaRedeemer
          .connect(firstUser)
          .claimMultiple([currentWeek, currentWeek], [dataForFirstUser[1], dataForFirstUser[1]], [proof, proof])
      ).to.be.reverted;
      expect(await ajnaToken.connect(firstUser).balanceOf(firstUserAddress)).to.eql(ethers.utils.parseEther("0"));
    });
    it("should claim the reward and flip the hasClaimed flag - revert on second try - verify ALL users balances after claim - contract balance to be 0", async () => {
      const { ajnaToken, ajnaRedeemer, operator } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      for (let i = 0; i < dummyProcessedSnaphot.length; i++) {
        await network.provider.request({
          method: "hardhat_impersonateAccount",
          params: [dummyProcessedSnaphot[i].userAddress],
        });
        const randomUser = ethers.provider.getSigner(dummyProcessedSnaphot[i].userAddress);
        const randomUserAddress = await randomUser.getAddress();
        const proofForRandomUserFromDummyProcessedSnaphot = tree.getHexProof(leaves[i]);
        await expect(
          ajnaRedeemer
            .connect(randomUser)
            .claimMultiple(
              [currentWeek],
              [dummyProcessedSnaphot[i].amount],
              [proofForRandomUserFromDummyProcessedSnaphot]
            )
        ).to.not.be.reverted;

        await expect(
          ajnaRedeemer
            .connect(randomUser)
            .claimMultiple(
              [currentWeek],
              [dummyProcessedSnaphot[i].amount],
              [proofForRandomUserFromDummyProcessedSnaphot]
            )
        ).to.be.reverted;
        expect(await ajnaToken.connect(randomUser).balanceOf(randomUserAddress)).to.eql(
          dummyProcessedSnaphot[i].amount
        );
        await network.provider.request({
          method: "hardhat_stopImpersonatingAccount",
          params: [dummyProcessedSnaphot[i].userAddress],
        });
      }
      expect(await ajnaToken.balanceOf(ajnaRedeemer.address)).to.eql(BigNumber.from(0));
    });
    it(`should NOT claim ${config.weeksCount} past weeks (gas check)`, async () => {
      const { ajnaToken, ajnaRedeemer, firstUserAddress, firstUser, operator } = await loadFixture(deployBaseFixture);

      let currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();
      const weeks = [];
      const amounts = [];
      const proofs = [];

      for (let i = 0; i < config.weeksCount; i++) {
        await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);
        await time.increase(WEEK);
        weeks.push(currentWeek);
        currentWeek = Number(currentWeek) + 1;
        amounts.push(dataForFirstUser[1]);
        proofs.push(proof);
      }
      await expect(ajnaRedeemer.connect(firstUser).claimMultiple([weeks[0]], [amounts[0]], [proofs[0]])).to.not.be
        .reverted;
      await expect(ajnaRedeemer.connect(firstUser).claimMultiple(weeks, amounts, proofs)).to.be.revertedWith(
        "redeemer/already-claimed"
      );

      expect(await ajnaToken.connect(firstUser).balanceOf(firstUserAddress)).to.eql(
        BigNumber.from(dataForFirstUser[1])
      );
    });

    it(`should claim ${config.weeksCount} past weeks (gas check)`, async () => {
      const { ajnaToken, ajnaRedeemer, firstUserAddress, firstUser, operator } = await loadFixture(deployBaseFixture);

      let currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();
      const weeks = [];
      const amounts = [];
      const proofs = [];

      for (let i = 0; i < config.weeksCount; i++) {
        await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);
        await time.increase(WEEK);
        weeks.push(currentWeek);
        currentWeek = Number(currentWeek) + 1;
        amounts.push(dataForFirstUser[1]);
        proofs.push(proof);
      }

      await expect(ajnaRedeemer.connect(firstUser).claimMultiple(weeks, amounts, proofs)).to.not.be.reverted;

      expect(await ajnaToken.connect(firstUser).balanceOf(firstUserAddress)).to.eql(
        BigNumber.from(dataForFirstUser[1]).mul(config.weeksCount)
      );
    });
  });
  describe("AccessControl", () => {
    it("should return no admin for DEFAULT_ADMIN_ROLE", async () => {
      const { ajnaRedeemer } = await loadFixture(deployBaseFixture);

      expect(
        await ajnaRedeemer.getRoleAdmin(ethers.utils.solidityKeccak256(["string"], ["DEFAULT_ADMIN_ROLE"]))
      ).to.be.equal("0x0000000000000000000000000000000000000000000000000000000000000000");
    });
  });
  describe("emergencyWithdraw", () => {
    it("should allow the operator to withdraw to dripper contract - confirm company wallet balance after", async () => {
      const { ajnaToken, ajnaRedeemer, owner, ajnaDripper, operator } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);
      const beneficiaryBalanceBefore = await ajnaToken.balanceOf(ajnaDripper.address);
      const redeemerBalanceBefore = await ajnaToken.balanceOf(ajnaRedeemer.address);

      await ajnaRedeemer.connect(owner).emergencyWithdraw();
      const beneficiaryBalanceAfter = await ajnaToken.balanceOf(ajnaDripper.address);

      expect(beneficiaryBalanceAfter.sub(beneficiaryBalanceBefore)).to.eql(redeemerBalanceBefore);
    });
    it("shouldn't allow a random user to withdraw", async () => {
      const { ajnaRedeemer, randomUser, operator } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);

      await expect(ajnaRedeemer.connect(randomUser).emergencyWithdraw()).to.be.reverted;
    });
  });
  describe("changeOperator", () => {
    it("should not allow the operator (deployer) to grant operator role", async () => {
      const { ajnaRedeemer, firstUserAddress, owner, operator } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);
      await expect(
        ajnaRedeemer
          .connect(owner)
          .grantRole(ethers.utils.solidityKeccak256(["string"], ["DEFAULT_ADMIN_ROLE"]), firstUserAddress)
      ).to.be.reverted;
    });
    it("should not allow the operator (deployer) to grant admin role", async () => {
      const { ajnaRedeemer, firstUserAddress, owner, operator } = await loadFixture(deployBaseFixture);
      const currentWeek = (await ajnaRedeemer.getCurrentWeek()).toNumber();

      await ajnaRedeemer.connect(operator).addRoot(currentWeek, root);
      await expect(
        ajnaRedeemer
          .connect(owner)
          .grantRole(ethers.utils.solidityKeccak256(["string"], ["DEFAULT_ADMIN_ROLE"]), firstUserAddress)
      ).to.be.reverted;
    });
  });
});
