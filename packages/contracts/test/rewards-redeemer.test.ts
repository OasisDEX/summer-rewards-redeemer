import { loadFixture, time } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers, network } from "hardhat";

import { config } from "common/config/config";
import { WEEK } from "common/constants/constants";
import { deployContract } from "../scripts/utils/hardhat.utils";
import { createMerkleTree } from "common";
import { BASE_WEEKLY_AMOUNT, dummyProcessedSnaphot } from "common/utils/data";
import { RewardsRedeemerFactory, RewardsRedeemer, AjnaToken } from "typechain-types";
import { createRedeemer } from "./utils";

const { leaves, tree, root } = createMerkleTree(dummyProcessedSnaphot);

const dataForFirstUser = [dummyProcessedSnaphot[1].address, dummyProcessedSnaphot[1].amount];

/* leaf and proof with index 1 -> address is the firstUser address from hardhat accounts 
 0 indexed user is saved for the owner */
const leaf = leaves[1];
const proof = tree.getHexProof(leaf);

// All rewards for a given week
const totalWeekAmount = dummyProcessedSnaphot.reduce((acc, cur) => acc.add(cur.amount), BigNumber.from(0));

async function deployBaseFixture() {
  const [owner, partner, firstUser, randomUser] = await ethers.getSigners();

  const ajnaToken = await deployContract<AjnaToken>("AjnaToken", []);

  const redeemerFactory = await deployContract<RewardsRedeemerFactory>("RewardsRedeemerFactory", []);
  await redeemerFactory.addPartner(partner.address);

  const ajnaRedeemer = await createRedeemer(redeemerFactory, partner, ajnaToken.address);

  await ajnaToken.mint(owner.address, totalWeekAmount.mul(100));

  return {
    redeemerFactory,
    ajnaRedeemer,
    ajnaToken,
    owner,
    partner,
    firstUser,
    randomUser,
  };
}

describe("AjnaRedeemer", () => {
  describe("Add/Get/Remove Root", () => {
    it("Should allow only partner to add/remove roots", async () => {
      const { ajnaRedeemer, partner, firstUser } = await loadFixture(deployBaseFixture);

      expect(await ajnaRedeemer.owner()).to.be.equal(partner.address);

      await expect(ajnaRedeemer.connect(partner).addRoot(0, root)).to.be.not.reverted;
      expect(await ajnaRedeemer.getRoot(0)).to.equal(root);

      await expect(ajnaRedeemer.connect(partner).addRoot(1, root)).to.be.not.reverted;
      expect(await ajnaRedeemer.getRoot(1)).to.equal(root);

      await expect(ajnaRedeemer.connect(partner).removeRoot(0)).to.be.not.reverted;
      expect(await ajnaRedeemer.getRoot(0)).to.equal(ethers.utils.formatBytes32String(""));

      await expect(ajnaRedeemer.connect(firstUser).addRoot(2, root)).to.be.revertedWith(
        "Ownable: caller is not the owner"
      );
      await expect(ajnaRedeemer.connect(firstUser).removeRoot(1)).to.be.revertedWith(
        "Ownable: caller is not the owner"
      );
    });
    it("Shouldn't allow partner to add root for same index twice", async () => {
      const { ajnaRedeemer, partner } = await loadFixture(deployBaseFixture);

      await expect(ajnaRedeemer.connect(partner).addRoot(0, root)).to.be.not.reverted;
      await expect(ajnaRedeemer.connect(partner).addRoot(0, root))
        .to.be.revertedWith("RootAlreadyAdded")
        .withArgs(0, root);

      expect(await ajnaRedeemer.getRoot(0)).to.equal(root);
    });
  });
  describe("Can Claim", () => {
    it("Should return true (user=unclaimed, index=correct, amount=correct, proof=correct)", async () => {
      const currentIndex = 23;
      const { ajnaRedeemer, partner } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);

      const testUser = ethers.provider.getSigner(dataForFirstUser[0] as string);
      expect(await ajnaRedeemer.connect(testUser).canClaim(proof, currentIndex, dataForFirstUser[1])).to.equal(true);
    });
    it("Should return false (user=unclaimed, index=incorrect, amount=correct, proof=correct)", async () => {
      const currentIndex = 24;
      const { ajnaRedeemer, partner } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);

      const testUser = ethers.provider.getSigner(dataForFirstUser[0] as string);
      expect(await ajnaRedeemer.connect(testUser).canClaim(proof, currentIndex + 1, dataForFirstUser[1])).to.equal(
        false
      );
    });
    it("Should return false (user=unclaimed, index=correct, amount=correct, proof=incorrect)", async () => {
      const currentIndex = 26;
      const { ajnaRedeemer, partner } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);

      const wrongProof = tree.getHexProof(leaves[2]);

      const testUser = ethers.provider.getSigner(dataForFirstUser[0] as string);
      expect(await ajnaRedeemer.connect(testUser).canClaim(wrongProof, currentIndex + 1, dataForFirstUser[1])).to.equal(
        false
      );
    });
    it("Should return false (user=unclaimed, index=correct, amount=incorrect, proof=correct)", async () => {
      const currentIndex = 26;
      const { ajnaRedeemer, partner } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);

      const wrongAmount = (dataForFirstUser[1] as BigNumber).add(1);

      const testUser = ethers.provider.getSigner(dataForFirstUser[0] as string);
      expect(await ajnaRedeemer.connect(testUser).canClaim(proof, currentIndex, wrongAmount)).to.equal(false);
    });
    it("Should return false for wrong user", async () => {
      const currentIndex = 26;
      const { ajnaRedeemer, partner, randomUser } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);

      expect(
        await ajnaRedeemer.connect(randomUser.address).canClaim(proof, currentIndex, dataForFirstUser[1])
      ).to.equal(false);
    });
  });

  describe("Single Claim", () => {
    it.only("Should not claim if user is not correct", async () => {
      const currentIndex = 66;
      const { ajnaRedeemer, partner, randomUser } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);

      await expect(
        ajnaRedeemer.connect(ajnaRedeemer.address).claim(currentIndex, dataForFirstUser[1], proof)
      ).to.be.revertedWith("UserCannotClaim");
    });

    it("Should not claim if redeemer has not enough tokens", async () => {
      const currentIndex = 66;
      const { ajnaToken, ajnaRedeemer, firstUser, partner } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);

      const testUser = ethers.provider.getSigner(dataForFirstUser[0] as string);
      await expect(ajnaRedeemer.connect(testUser).claim(currentIndex, dataForFirstUser[1], proof)).to.be.revertedWith(
        "ERC20: transfer amount exceeds balance"
      );
    });

    it("should claim the reward and flip the hasClaimed flag - revert on second try - verify the users balance after claim", async () => {
      const currentIndex = 66;
      const { ajnaToken, ajnaRedeemer, firstUser, partner } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);

      await expect(ajnaRedeemer.connect(firstUser).claim(currentWeek, dataForFirstUser[1], proof)).to.not.be.reverted;
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
          params: [dummyProcessedSnaphot[i].address],
        });
        const randomUser = ethers.provider.getSigner(dummyProcessedSnaphot[i].address);
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
          params: [dummyProcessedSnaphot[i].address],
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

  describe("Multiple Claim", () => {
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
          params: [dummyProcessedSnaphot[i].address],
        });
        const randomUser = ethers.provider.getSigner(dummyProcessedSnaphot[i].address);
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
          params: [dummyProcessedSnaphot[i].address],
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
