import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { RewardsRedeemer, RewardsRedeemerFactory } from "typechain-types";
import { ethers } from "hardhat";

export async function createRedeemer(
  factory: RewardsRedeemerFactory,
  partner: SignerWithAddress,
  rewardsTokenAddress: string
): Promise<RewardsRedeemer> {
  const tx = await factory.connect(partner).createRewardsRedeemer(rewardsTokenAddress);

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

  const [rewardsRedeemerAddress] = event?.args;

  const rewardsRedeemer = (await ethers.getContractAt("RewardsRedeemer", rewardsRedeemerAddress)) as RewardsRedeemer;

  return rewardsRedeemer;
}
