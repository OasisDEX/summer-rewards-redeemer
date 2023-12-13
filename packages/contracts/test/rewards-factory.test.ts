import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { RewardsRedeemer, RewardsRedeemerFactory } from "typechain-types";

import { deployContract } from "../scripts/utils/hardhat.utils";

describe("Rewards Redeemer Factory", () => {
  let rewardsFactory: RewardsRedeemerFactory;

  let deployer: SignerWithAddress;
  let partner1: SignerWithAddress;
  let partner2: SignerWithAddress;
  const dummyTokenAddress = "0x7EA2be2df7BA6E54B1A9C70676f668455E329d29";

  const ADMIN_ROLE: string = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("ADMIN_ROLE"));
  const PARTNER_ROLE: string = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("PARTNER_ROLE"));

  beforeEach(async () => {
    rewardsFactory = await deployContract<RewardsRedeemerFactory>("RewardsRedeemerFactory", []);

    [deployer, partner1, partner2] = await ethers.getSigners();
  });

  describe("Adding/removing partners", () => {
    it("Should allow admin to add/remove partner", async () => {
      await expect(rewardsFactory.addPartner(partner1.address)).to.be.not.reverted;
      await expect(rewardsFactory.removePartner(partner1.address)).to.be.not.reverted;
    });

    it("Shouldn't allow non-admin to add/remove partner", async () => {
      await expect(rewardsFactory.connect(partner2).addPartner(partner1.address)).to.be.revertedWith(
        `AccessControl: account ${partner2.address.toLowerCase()} is missing role ${ADMIN_ROLE}`
      );
      await expect(rewardsFactory.connect(partner2).removePartner(partner1.address)).to.be.revertedWith(
        `AccessControl: account ${partner2.address.toLowerCase()} is missing role ${ADMIN_ROLE}`
      );
    });

    it("Should allow whitelisted partner to create new redeemer", async () => {
      await rewardsFactory.addPartner(partner1.address);

      const tx = await rewardsFactory.connect(partner1).createRewardsRedeemer(dummyTokenAddress);
      await expect(tx).to.be.not.reverted;

      const receipt = await tx.wait();

      if (!receipt.events) {
        throw new Error("No events in receipt");
      }
      const event = receipt.events?.find((event) => event.event === "RewardsRedeemerCreated");
      if (!event) {
        throw new Error("No RewardsRedeemerCreated event in receipt");
      }
      if (!event.args) {
        throw new Error("No args in RewardsRedeemerCreated event");
      }

      const [rewardsRedeemer, partner] = event?.args;

      expect(rewardsRedeemer).to.be.not.equal(ethers.constants.AddressZero);
      expect(partner).to.be.equal(partner1.address);
      expect(await rewardsFactory.redeemers(partner1.address)).to.be.equal(rewardsRedeemer);

      const redeemer = (await ethers.getContractAt("RewardsRedeemer", rewardsRedeemer)) as RewardsRedeemer;

      expect(await redeemer.owner()).to.be.equal(partner1.address);
    });

    it("Shouldn't allow non-whitelisted partner to create new redeemer", async () => {
      await expect(rewardsFactory.connect(partner1).createRewardsRedeemer(dummyTokenAddress)).to.be.revertedWith(
        `AccessControl: account ${partner1.address.toLowerCase()} is missing role ${PARTNER_ROLE}`
      );
    });
  });
});
