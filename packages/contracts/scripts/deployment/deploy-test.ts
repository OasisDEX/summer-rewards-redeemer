import { ethers } from "hardhat";

import { deployContract } from "../utils/hardhat.utils";

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY_DEPLOY!);

async function main() {
  const ajnaToken = await deployContract("AjnaToken", []);
  const ajnaDripper = await deployContract("AjnaDripper", [ajnaToken.address, wallet.address]);
  const ajnaRedeemer = await deployContract("AjnaRedeemer", [ajnaToken.address, wallet.address, ajnaDripper.address]);
  const rewardsRedeemerFactory = await deployContract("RewardsRedeemerFactory", []);

  console.table({
    ajnaToken: ajnaToken.address,
    ajnaDripper: ajnaDripper.address,
    ajnaRedeemer: ajnaRedeemer.address,
    rewardsRedeemerFactory: rewardsRedeemerFactory.address,
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
