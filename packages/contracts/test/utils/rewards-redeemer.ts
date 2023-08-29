import { RewardsRedeemer, RewardsRedeemerFactory, RewardsRedeemer__factory } from "typechain-types";
import { Signer } from "ethers";

export async function createRedeemer(
  factory: RewardsRedeemerFactory,
  partner: Signer,
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

  const rewardsRedeemer = new RewardsRedeemer__factory(partner).attach(rewardsRedeemerAddress);

  return rewardsRedeemer;
}
