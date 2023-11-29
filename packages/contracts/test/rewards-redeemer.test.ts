import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { createMerkleTree } from "common";
import { dummyProcessedSnaphot } from "common/utils/data";
import { createRedeemer } from "contracts/utils";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { AjnaToken, RewardsRedeemerFactory } from "typechain-types";

import { deployContract } from "../scripts/utils/hardhat.utils";

const { leaves, tree, root } = createMerkleTree(dummyProcessedSnaphot);

const dataForFirstUser = [dummyProcessedSnaphot[1].userAddress, dummyProcessedSnaphot[1].amount];
const dataForSecondUser = [dummyProcessedSnaphot[2].userAddress, dummyProcessedSnaphot[2].amount];

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

describe("Rewards Redeemer Implementation", () => {
  describe("Deploy Time", () => {
    it("Should have deploy time in the past and non-zero", async () => {
      const { ajnaRedeemer } = await loadFixture(deployBaseFixture);

      const deployedAt = await ajnaRedeemer.deployedAt();

      expect(deployedAt).to.be.gt(0);

      const currentBlockTimestamp = (await ethers.provider.getBlock("latest")).timestamp;

      expect(deployedAt).to.be.lte(currentBlockTimestamp);
    });
  });
  describe("Ownable", () => {
    it("Should return partner as owner", async () => {
      const { ajnaRedeemer, partner } = await loadFixture(deployBaseFixture);

      expect(await ajnaRedeemer.owner()).to.be.equal(partner.address);
    });
    it("Should not allow anybody except partner to change owner", async () => {
      const { ajnaRedeemer, partner, randomUser } = await loadFixture(deployBaseFixture);

      await expect(ajnaRedeemer.connect(randomUser).transferOwnership(randomUser.address)).to.be.revertedWith(
        "Ownable: caller is not the owner"
      );
    });
    it("Should allow partner to change owner", async () => {
      const { ajnaRedeemer, partner, randomUser } = await loadFixture(deployBaseFixture);

      // eslint-disable-next-line no-unused-expressions
      expect(await ajnaRedeemer.connect(partner).transferOwnership(randomUser.address)).to.be.not.reverted;
      expect(await ajnaRedeemer.owner()).to.be.equal(randomUser.address);
    });
  });
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
      expect(await ajnaRedeemer.connect(testUser).canClaim(currentIndex, dataForFirstUser[1], proof)).to.equal(true);
    });
    it("Should return false (user=unclaimed, index=incorrect, amount=correct, proof=correct)", async () => {
      const currentIndex = 24;
      const { ajnaRedeemer, partner } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);

      const testUser = ethers.provider.getSigner(dataForFirstUser[0] as string);
      expect(await ajnaRedeemer.connect(testUser).canClaim(currentIndex + 1, dataForFirstUser[1], proof)).to.equal(
        false
      );
    });
    it("Should return false (user=unclaimed, index=correct, amount=correct, proof=incorrect)", async () => {
      const currentIndex = 26;
      const { ajnaRedeemer, partner } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);

      const wrongProof = tree.getHexProof(leaves[2]);

      const testUser = ethers.provider.getSigner(dataForFirstUser[0] as string);
      expect(await ajnaRedeemer.connect(testUser).canClaim(currentIndex + 1, dataForFirstUser[1], wrongProof)).to.equal(
        false
      );
    });
    it("Should return false (user=unclaimed, index=correct, amount=incorrect, proof=correct)", async () => {
      const currentIndex = 26;
      const { ajnaRedeemer, partner } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);

      const wrongAmount = (dataForFirstUser[1] as BigNumber).add(1);

      const testUser = ethers.provider.getSigner(dataForFirstUser[0] as string);
      expect(await ajnaRedeemer.connect(testUser).canClaim(currentIndex, wrongAmount, proof)).to.equal(false);
    });
    it("Should return false for wrong user", async () => {
      const currentIndex = 26;
      const { ajnaRedeemer, partner, randomUser } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);

      expect(
        await ajnaRedeemer.connect(randomUser.address).canClaim(currentIndex, dataForFirstUser[1], proof)
      ).to.equal(false);
    });
  });

  describe("Single Claim", () => {
    it("Should not claim if user is not correct", async () => {
      const currentIndex = 66;
      const { ajnaRedeemer, partner, randomUser } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);

      await expect(ajnaRedeemer.connect(randomUser).claim(currentIndex, dataForFirstUser[1], proof))
        .to.be.revertedWith("UserCannotClaim")
        .withArgs(randomUser.address, currentIndex, dataForFirstUser[1], proof);
    });
    it("Should not claim if index is not correct", async () => {
      const currentIndex = 66;
      const { ajnaRedeemer, partner, randomUser } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);

      const testUserAddress = dataForFirstUser[0] as string;
      const testUser = ethers.provider.getSigner(testUserAddress);

      await expect(ajnaRedeemer.connect(testUser).claim(currentIndex + 1, dataForFirstUser[1], proof))
        .to.be.revertedWith("UserCannotClaim")
        .withArgs(testUserAddress, currentIndex + 1, dataForFirstUser[1], proof);
    });
    it("Should not claim if amount is not correct", async () => {
      const currentIndex = 66;
      const { ajnaRedeemer, partner, randomUser } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);

      const wrongAmount = (dataForFirstUser[1] as BigNumber).add(1);

      const testUserAddress = dataForFirstUser[0] as string;
      const testUser = ethers.provider.getSigner(testUserAddress);

      await expect(ajnaRedeemer.connect(testUser).claim(currentIndex, wrongAmount, proof))
        .to.be.revertedWith("UserCannotClaim")
        .withArgs(testUserAddress, currentIndex, wrongAmount, proof);
    });
    it("Should not claim if proof is not correct", async () => {
      const currentIndex = 66;
      const { ajnaRedeemer, partner, randomUser } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);

      const wrongProof = tree.getHexProof(leaves[2]);

      const testUserAddress = dataForFirstUser[0] as string;
      const testUser = ethers.provider.getSigner(testUserAddress);

      await expect(ajnaRedeemer.connect(testUser).claim(currentIndex, dataForFirstUser[1], wrongProof))
        .to.be.revertedWith("UserCannotClaim")
        .withArgs(testUserAddress, currentIndex, dataForFirstUser[1], wrongProof);
    });

    it("Should not claim if redeemer has not enough tokens", async () => {
      const currentIndex = 66;
      const { ajnaToken, ajnaRedeemer, firstUser, partner } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);

      const testUser = ethers.provider.getSigner(dataForFirstUser[0] as string);
      await expect(ajnaRedeemer.connect(testUser).claim(currentIndex, dataForFirstUser[1], proof)).to.be.revertedWith(
        "ERC20: transfer amount exceeds balance"
      );

      await ajnaToken.transfer(ajnaRedeemer.address, dataForFirstUser[1].sub(1));
      await expect(ajnaRedeemer.connect(testUser).claim(currentIndex, dataForFirstUser[1], proof)).to.be.revertedWith(
        "ERC20: transfer amount exceeds balance"
      );
    });

    it("Should claim the reward and marked it as claimed, no second claimed allowed", async () => {
      const currentIndex = 66;

      const { ajnaToken, ajnaRedeemer, partner } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);

      const testUserAddress = dataForFirstUser[0] as string;
      const testUser = ethers.provider.getSigner(testUserAddress);

      await ajnaToken.transfer(ajnaRedeemer.address, dataForFirstUser[1]);

      expect(await ajnaRedeemer.hasClaimed(testUserAddress, currentIndex)).to.equal(false);
      expect(await ajnaRedeemer.connect(testUser).canClaim(currentIndex, dataForFirstUser[1], proof)).to.equal(true);

      await expect(ajnaRedeemer.connect(testUser).claim(currentIndex, dataForFirstUser[1], proof)).to.not.be.reverted;
      await expect(ajnaRedeemer.connect(testUser).claim(currentIndex, dataForFirstUser[1], proof))
        .to.be.revertedWith("UserAlreadyClaimed")
        .withArgs(testUserAddress, currentIndex, dataForFirstUser[1], proof);

      expect(await ajnaRedeemer.connect(testUser).canClaim(currentIndex, dataForFirstUser[1], proof)).to.equal(false);
      expect(await ajnaRedeemer.hasClaimed(testUserAddress, currentIndex)).to.equal(true);

      expect(await ajnaToken.balanceOf(testUserAddress)).to.eql(dataForFirstUser[1]);
    });

    it("Should claim for 2 users, 2 indices", async () => {
      const currentIndex = 66;

      const { ajnaToken, ajnaRedeemer, partner } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);
      await ajnaRedeemer.connect(partner).addRoot(currentIndex + 1, root);

      const user1Address = dataForFirstUser[0] as string;
      const user1 = ethers.provider.getSigner(user1Address);
      const user2Address = dataForSecondUser[0] as string;
      const user2 = ethers.provider.getSigner(user2Address);

      const totalAmount = (dataForFirstUser[1] as BigNumber).add(dataForSecondUser[1] as BigNumber).mul(2);

      await ajnaToken.transfer(ajnaRedeemer.address, totalAmount);

      // User 1
      const proofUser1 = tree.getHexProof(leaves[1]);

      expect(await ajnaRedeemer.hasClaimed(user1Address, currentIndex)).to.equal(false);
      expect(await ajnaRedeemer.connect(user1).canClaim(currentIndex, dataForFirstUser[1], proofUser1)).to.equal(true);
      expect(await ajnaRedeemer.hasClaimed(user1Address, currentIndex + 1)).to.equal(false);
      expect(await ajnaRedeemer.connect(user1).canClaim(currentIndex + 1, dataForFirstUser[1], proofUser1)).to.equal(
        true
      );

      await expect(ajnaRedeemer.connect(user1).claim(currentIndex, dataForFirstUser[1], proofUser1)).to.not.be.reverted;
      await expect(ajnaRedeemer.connect(user1).claim(currentIndex, dataForFirstUser[1], proofUser1))
        .to.be.revertedWith("UserAlreadyClaimed")
        .withArgs(user1Address, currentIndex, dataForFirstUser[1], proofUser1);
      await expect(ajnaRedeemer.connect(user1).claim(currentIndex + 1, dataForFirstUser[1], proofUser1)).to.not.be
        .reverted;
      await expect(ajnaRedeemer.connect(user1).claim(currentIndex + 1, dataForFirstUser[1], proofUser1))
        .to.be.revertedWith("UserAlreadyClaimed")
        .withArgs(user1Address, currentIndex + 1, dataForFirstUser[1], proofUser1);

      expect(await ajnaRedeemer.connect(user1).canClaim(currentIndex, dataForFirstUser[1], proofUser1)).to.equal(false);
      expect(await ajnaRedeemer.connect(user1).canClaim(currentIndex + 1, dataForFirstUser[1], proofUser1)).to.equal(
        false
      );
      expect(await ajnaRedeemer.hasClaimed(user1Address, currentIndex)).to.equal(true);
      expect(await ajnaRedeemer.hasClaimed(user1Address, currentIndex + 1)).to.equal(true);

      expect(await ajnaToken.balanceOf(user1Address)).to.eql((dataForFirstUser[1] as BigNumber).mul(2));

      // User 2
      const proofUser2 = tree.getHexProof(leaves[2]);

      expect(await ajnaRedeemer.hasClaimed(user2Address, currentIndex)).to.equal(false);
      expect(await ajnaRedeemer.connect(user2).canClaim(currentIndex, dataForSecondUser[1], proofUser2)).to.equal(true);
      expect(await ajnaRedeemer.hasClaimed(user2Address, currentIndex + 1)).to.equal(false);
      expect(await ajnaRedeemer.connect(user2).canClaim(currentIndex + 1, dataForSecondUser[1], proofUser2)).to.equal(
        true
      );

      await expect(ajnaRedeemer.connect(user2).claim(currentIndex, dataForSecondUser[1], proofUser2)).to.not.be
        .reverted;
      await expect(ajnaRedeemer.connect(user2).claim(currentIndex, dataForSecondUser[1], proofUser2))
        .to.be.revertedWith("UserAlreadyClaimed")
        .withArgs(user2Address, currentIndex, dataForSecondUser[1], proofUser2);
      await expect(ajnaRedeemer.connect(user2).claim(currentIndex + 1, dataForSecondUser[1], proofUser2)).to.not.be
        .reverted;
      await expect(ajnaRedeemer.connect(user2).claim(currentIndex + 1, dataForSecondUser[1], proofUser2))
        .to.be.revertedWith("UserAlreadyClaimed")
        .withArgs(user2Address, currentIndex + 1, dataForSecondUser[1], proofUser2);

      expect(await ajnaRedeemer.connect(user2).canClaim(currentIndex, dataForSecondUser[1], proofUser2)).to.equal(
        false
      );
      expect(await ajnaRedeemer.connect(user2).canClaim(currentIndex + 1, dataForSecondUser[1], proofUser2)).to.equal(
        false
      );
      expect(await ajnaRedeemer.hasClaimed(user2Address, currentIndex)).to.equal(true);
      expect(await ajnaRedeemer.hasClaimed(user2Address, currentIndex + 1)).to.equal(true);

      expect(await ajnaToken.balanceOf(user2Address)).to.eql((dataForSecondUser[1] as BigNumber).mul(2));
    });
  });

  describe("Multiple Claim", () => {
    it("Should not claim if parameters are empty", async () => {
      const { ajnaRedeemer, randomUser } = await loadFixture(deployBaseFixture);

      await expect(ajnaRedeemer.connect(randomUser).claimMultiple([], [], []))
        .to.be.revertedWith("ClaimMultipleEmpty")
        .withArgs([], [], []);
    });

    it("Should not claim if parameters have different lengths", async () => {
      const { ajnaRedeemer, randomUser } = await loadFixture(deployBaseFixture);

      // TODO: Cannot compare the return parameters of the ClaimMultipleLengthMismatch because the matchers get
      // TODO: confused with the format of the proof

      await expect(ajnaRedeemer.connect(randomUser).claimMultiple([77], [34, 35], [proof, proof])).to.be.revertedWith(
        "ClaimMultipleLengthMismatch"
      );

      await expect(ajnaRedeemer.connect(randomUser).claimMultiple([77, 78], [34], [proof, proof])).to.be.revertedWith(
        "ClaimMultipleLengthMismatch"
      );

      await expect(
        ajnaRedeemer.connect(randomUser).claimMultiple([77, 78], [dataForFirstUser[1], dataForFirstUser[1]], [proof])
      ).to.be.revertedWith("ClaimMultipleLengthMismatch");
    });

    it("Should not claim if user is not correct", async () => {
      const currentIndex = 66;
      const { ajnaRedeemer, partner, randomUser } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);
      await ajnaRedeemer.connect(partner).addRoot(currentIndex + 1, root);

      await expect(
        ajnaRedeemer
          .connect(randomUser)
          .claimMultiple([currentIndex, currentIndex + 1], [dataForFirstUser[1], dataForFirstUser[1]], [proof, proof])
      )
        .to.be.revertedWith("UserCannotClaim")
        .withArgs(randomUser.address, currentIndex, dataForFirstUser[1], proof);
    });

    it("Should not claim if index is not correct", async () => {
      const currentIndex = 66;
      const { ajnaRedeemer, partner } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);
      await ajnaRedeemer.connect(partner).addRoot(currentIndex + 1, root);

      const testUserAddress = dataForFirstUser[0] as string;
      const testUser = ethers.provider.getSigner(testUserAddress);

      await expect(
        ajnaRedeemer
          .connect(testUser)
          .claimMultiple(
            [currentIndex + 1, currentIndex + 2],
            [dataForFirstUser[1], dataForFirstUser[1]],
            [proof, proof]
          )
      )
        .to.be.revertedWith("UserCannotClaim")
        .withArgs(testUserAddress, currentIndex + 2, dataForFirstUser[1], proof);
    });

    it("Should not claim if amount is not correct", async () => {
      const currentIndex = 66;
      const { ajnaRedeemer, partner } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);
      await ajnaRedeemer.connect(partner).addRoot(currentIndex + 1, root);

      const wrongAmount = (dataForFirstUser[1] as BigNumber).add(1);

      const testUserAddress = dataForFirstUser[0] as string;
      const testUser = ethers.provider.getSigner(testUserAddress);

      await expect(ajnaRedeemer.connect(testUser).claim(currentIndex, wrongAmount, proof))
        .to.be.revertedWith("UserCannotClaim")
        .withArgs(testUserAddress, currentIndex, wrongAmount, proof);
    });

    it("Should not claim if proof is not correct", async () => {
      const currentIndex = 66;
      const { ajnaRedeemer, partner } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);
      await ajnaRedeemer.connect(partner).addRoot(currentIndex + 1, root);

      const wrongProof = tree.getHexProof(leaves[2]);

      const testUserAddress = dataForFirstUser[0] as string;
      const testUser = ethers.provider.getSigner(testUserAddress);

      await expect(ajnaRedeemer.connect(testUser).claim(currentIndex, dataForFirstUser[1], wrongProof))
        .to.be.revertedWith("UserCannotClaim")
        .withArgs(testUserAddress, currentIndex, dataForFirstUser[1], wrongProof);
    });

    it("Should not claim if redeemer has not enough tokens", async () => {
      const currentIndex = 66;
      const { ajnaToken, ajnaRedeemer, partner } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);
      await ajnaRedeemer.connect(partner).addRoot(currentIndex + 1, root);

      const testUser = ethers.provider.getSigner(dataForFirstUser[0] as string);
      await expect(
        ajnaRedeemer
          .connect(testUser)
          .claimMultiple([currentIndex, currentIndex + 1], [dataForFirstUser[1], dataForFirstUser[1]], [proof, proof])
      ).to.be.revertedWith("ERC20: transfer amount exceeds balance");

      const totalAmount = (dataForFirstUser[1] as BigNumber).mul(2);
      await ajnaToken.transfer(ajnaRedeemer.address, totalAmount.sub(1));

      await expect(
        ajnaRedeemer
          .connect(testUser)
          .claimMultiple([currentIndex, currentIndex + 1], [dataForFirstUser[1], dataForFirstUser[1]], [proof, proof])
      ).to.be.revertedWith("ERC20: transfer amount exceeds balance");
    });

    it("Should not be allowed to claim same week in same call", async () => {
      const currentIndex = 66;

      const { ajnaToken, ajnaRedeemer, partner } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);
      await ajnaRedeemer.connect(partner).addRoot(currentIndex + 1, root);

      const testUserAddress = dataForFirstUser[0] as string;
      const testUser = ethers.provider.getSigner(testUserAddress);

      const totalAmount = (dataForFirstUser[1] as BigNumber).mul(2);
      await ajnaToken.transfer(ajnaRedeemer.address, totalAmount);

      expect(await ajnaRedeemer.hasClaimed(testUserAddress, currentIndex)).to.equal(false);
      expect(await ajnaRedeemer.connect(testUser).canClaim(currentIndex, dataForFirstUser[1], proof)).to.equal(true);
      expect(await ajnaRedeemer.hasClaimed(testUserAddress, currentIndex + 1)).to.equal(false);
      expect(await ajnaRedeemer.connect(testUser).canClaim(currentIndex + 1, dataForFirstUser[1], proof)).to.equal(
        true
      );

      await expect(
        ajnaRedeemer
          .connect(testUser)
          .claimMultiple([currentIndex, currentIndex], [dataForFirstUser[1], dataForFirstUser[1]], [proof, proof])
      )
        .to.be.revertedWith("UserAlreadyClaimed")
        .withArgs(testUserAddress, currentIndex, dataForFirstUser[1], proof);
    });

    it("Should claim the reward and marked it as claimed, no second claimed allowed", async () => {
      const currentIndex = 66;

      const { ajnaToken, ajnaRedeemer, partner } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);
      await ajnaRedeemer.connect(partner).addRoot(currentIndex + 1, root);

      const testUserAddress = dataForFirstUser[0] as string;
      const testUser = ethers.provider.getSigner(testUserAddress);

      const totalAmount = (dataForFirstUser[1] as BigNumber).mul(2);
      await ajnaToken.transfer(ajnaRedeemer.address, totalAmount);

      expect(await ajnaRedeemer.hasClaimed(testUserAddress, currentIndex)).to.equal(false);
      expect(await ajnaRedeemer.connect(testUser).canClaim(currentIndex, dataForFirstUser[1], proof)).to.equal(true);
      expect(await ajnaRedeemer.hasClaimed(testUserAddress, currentIndex + 1)).to.equal(false);
      expect(await ajnaRedeemer.connect(testUser).canClaim(currentIndex + 1, dataForFirstUser[1], proof)).to.equal(
        true
      );

      await expect(
        ajnaRedeemer
          .connect(testUser)
          .claimMultiple([currentIndex, currentIndex + 1], [dataForFirstUser[1], dataForFirstUser[1]], [proof, proof])
      ).to.not.be.reverted;
      await expect(
        ajnaRedeemer
          .connect(testUser)
          .claimMultiple([currentIndex, currentIndex + 1], [dataForFirstUser[1], dataForFirstUser[1]], [proof, proof])
      )
        .to.be.revertedWith("UserAlreadyClaimed")
        .withArgs(testUserAddress, currentIndex, dataForFirstUser[1], proof);

      expect(await ajnaRedeemer.connect(testUser).canClaim(currentIndex, dataForFirstUser[1], proof)).to.equal(false);
      expect(await ajnaRedeemer.hasClaimed(testUserAddress, currentIndex)).to.equal(true);
      expect(await ajnaRedeemer.connect(testUser).canClaim(currentIndex + 1, dataForFirstUser[1], proof)).to.equal(
        false
      );
      expect(await ajnaRedeemer.hasClaimed(testUserAddress, currentIndex + 1)).to.equal(true);

      expect(await ajnaToken.balanceOf(testUserAddress)).to.eql(totalAmount);
    });

    it("Should claim for 2 users, 2 indices", async () => {
      const currentIndex = 66;

      const { ajnaToken, ajnaRedeemer, partner } = await loadFixture(deployBaseFixture);

      await ajnaRedeemer.connect(partner).addRoot(currentIndex, root);
      await ajnaRedeemer.connect(partner).addRoot(currentIndex + 1, root);

      const user1Address = dataForFirstUser[0] as string;
      const user1 = ethers.provider.getSigner(user1Address);
      const user2Address = dataForSecondUser[0] as string;
      const user2 = ethers.provider.getSigner(user2Address);

      const totalAmount = (dataForFirstUser[1] as BigNumber).add(dataForSecondUser[1] as BigNumber).mul(2);

      await ajnaToken.transfer(ajnaRedeemer.address, totalAmount);

      // User 1
      const proofUser1 = tree.getHexProof(leaves[1]);

      expect(await ajnaRedeemer.hasClaimed(user1Address, currentIndex)).to.equal(false);
      expect(await ajnaRedeemer.connect(user1).canClaim(currentIndex, dataForFirstUser[1], proofUser1)).to.equal(true);
      expect(await ajnaRedeemer.hasClaimed(user1Address, currentIndex + 1)).to.equal(false);
      expect(await ajnaRedeemer.connect(user1).canClaim(currentIndex + 1, dataForFirstUser[1], proofUser1)).to.equal(
        true
      );

      await expect(
        ajnaRedeemer
          .connect(user1)
          .claimMultiple(
            [currentIndex, currentIndex + 1],
            [dataForFirstUser[1], dataForFirstUser[1]],
            [proofUser1, proofUser1]
          )
      ).to.not.be.reverted;
      await expect(
        ajnaRedeemer
          .connect(user1)
          .claimMultiple(
            [currentIndex, currentIndex + 1],
            [dataForFirstUser[1], dataForFirstUser[1]],
            [proofUser1, proofUser1]
          )
      )
        .to.be.revertedWith("UserAlreadyClaimed")
        .withArgs(user1Address, currentIndex, dataForFirstUser[1], proofUser1);

      expect(await ajnaRedeemer.connect(user1).canClaim(currentIndex, dataForFirstUser[1], proofUser1)).to.equal(false);
      expect(await ajnaRedeemer.connect(user1).canClaim(currentIndex + 1, dataForFirstUser[1], proofUser1)).to.equal(
        false
      );
      expect(await ajnaRedeemer.hasClaimed(user1Address, currentIndex)).to.equal(true);
      expect(await ajnaRedeemer.hasClaimed(user1Address, currentIndex + 1)).to.equal(true);

      expect(await ajnaToken.balanceOf(user1Address)).to.eql((dataForFirstUser[1] as BigNumber).mul(2));

      // User 2
      const proofUser2 = tree.getHexProof(leaves[2]);

      expect(await ajnaRedeemer.hasClaimed(user2Address, currentIndex)).to.equal(false);
      expect(await ajnaRedeemer.connect(user2).canClaim(currentIndex, dataForSecondUser[1], proofUser2)).to.equal(true);
      expect(await ajnaRedeemer.hasClaimed(user2Address, currentIndex + 1)).to.equal(false);
      expect(await ajnaRedeemer.connect(user2).canClaim(currentIndex + 1, dataForSecondUser[1], proofUser2)).to.equal(
        true
      );

      await expect(
        ajnaRedeemer
          .connect(user2)
          .claimMultiple(
            [currentIndex, currentIndex + 1],
            [dataForSecondUser[1], dataForSecondUser[1]],
            [proofUser2, proofUser2]
          )
      ).to.not.be.reverted;

      await expect(
        ajnaRedeemer
          .connect(user2)
          .claimMultiple(
            [currentIndex, currentIndex + 1],
            [dataForSecondUser[1], dataForSecondUser[1]],
            [proofUser2, proofUser2]
          )
      )
        .to.be.revertedWith("UserAlreadyClaimed")
        .withArgs(user2Address, currentIndex, dataForSecondUser[1], proofUser2);

      expect(await ajnaRedeemer.connect(user2).canClaim(currentIndex, dataForSecondUser[1], proofUser2)).to.equal(
        false
      );
      expect(await ajnaRedeemer.connect(user2).canClaim(currentIndex + 1, dataForSecondUser[1], proofUser2)).to.equal(
        false
      );
      expect(await ajnaRedeemer.hasClaimed(user2Address, currentIndex)).to.equal(true);
      expect(await ajnaRedeemer.hasClaimed(user2Address, currentIndex + 1)).to.equal(true);

      expect(await ajnaToken.balanceOf(user2Address)).to.eql((dataForSecondUser[1] as BigNumber).mul(2));
    });

    describe("emergencyWithdraw", () => {
      it("Shouldn't allow a random user to withdraw", async () => {
        const { ajnaRedeemer, ajnaToken, randomUser } = await loadFixture(deployBaseFixture);

        await ajnaToken.transfer(ajnaRedeemer.address, totalWeekAmount);

        await expect(
          ajnaRedeemer.connect(randomUser).emergencyWithdraw(ajnaToken.address, randomUser.address, totalWeekAmount)
        ).to.be.revertedWith("Ownable: caller is not the owner");
      });
      it("Should allow partner to withdraw tokens", async () => {
        const { ajnaToken, ajnaRedeemer, partner, randomUser } = await loadFixture(deployBaseFixture);

        await ajnaToken.transfer(ajnaRedeemer.address, totalWeekAmount);

        expect(await ajnaToken.balanceOf(randomUser.address)).to.equal(0);

        await ajnaRedeemer.connect(partner).emergencyWithdraw(ajnaToken.address, randomUser.address, totalWeekAmount);

        expect(await ajnaToken.balanceOf(randomUser.address)).to.equal(totalWeekAmount);
      });
    });
  });
});
