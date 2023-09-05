import { RewardsRedeemer, RewardsRedeemerFactory, RewardsRedeemer__factory } from "typechain-types";
import { Signer } from "ethers";
import { processTx } from "common";

function decodeRedeemerError(error?: string): string {
  if (!error) {
    return "Unknown error";
  }
  if (error.includes("AccessControl: account ")) {
    return "Partner is not authorized to create a redeemer";
  }
  if (error.includes("InvalidRewardsToken")) {
    return "Given rewards token address is the zero address";
  }
  return "Unknown error";
}

export async function createRedeemer(
  factory: RewardsRedeemerFactory,
  partner: Signer,
  rewardsTokenAddress: string
): Promise<RewardsRedeemer> {
  const result = await processTx(factory.connect(partner).createRewardsRedeemer(rewardsTokenAddress));
  if (!result.success) {
    console.log(`ERROR creating redeemer: ${decodeRedeemerError(result.error)}`);
    process.exit(1);
  }

  if (!result.receipt || !result.receipt.events) {
    throw new Error("No events in receipt, cannot fetch redeemer address");
  }

  const event = result.receipt.events?.find((event) => event.event === "RewardsRedeemerCreated");
  if (!event) {
    throw new Error("No RewardsRedeemerCreated event in receipt, cannot fetch redeemer address");
  }
  if (!event.args) {
    throw new Error("No args in RewardsRedeemerCreated event, cannot fetch redeemer address");
  }

  const [rewardsRedeemerAddress] = event?.args;

  const rewardsRedeemer = new RewardsRedeemer__factory(partner).attach(rewardsRedeemerAddress);

  return rewardsRedeemer;
}
