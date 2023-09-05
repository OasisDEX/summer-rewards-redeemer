import { RewardsRedeemer, RewardsRedeemerFactory, RewardsRedeemer__factory } from "typechain-types";
import { Signer } from "ethers";
import { processTx } from "common";

export async function createRedeemer(
  factory: RewardsRedeemerFactory,
  partner: Signer,
  rewardsTokenAddress: string
): Promise<RewardsRedeemer> {
  const result = await processTx(factory.connect(partner).createRewardsRedeemer(rewardsTokenAddress));
  if (!result.success) {
    console.log(result.error);
    console.log("ERROR: Creating redeemer, please check logs above");
    process.exit(1);
  }

  if (!result.receipt || !result.receipt.events) {
    throw new Error("No events in receipt");
  }

  const event = result.receipt.events?.find((event) => event.event === "RewardsRedeemerCreated");
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
