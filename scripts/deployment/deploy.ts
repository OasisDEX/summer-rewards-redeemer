import { ethers, network } from "hardhat";

import { addresses } from "../common/config";
import { deployContract } from "../common/helpers";

async function main() {
  const ajnaDripper = await deployContract("AjnaDripper", [
    network.name === "mainnet" ? addresses.ajnaToken.mainnet : addresses.ajnaToken.goerli,
    addresses.admin,
  ]);
  const ajnaRedeemer = await deployContract("AjnaRedeemer", [
    network.name === "mainnet" ? addresses.ajnaToken.mainnet : addresses.ajnaToken.goerli,
    addresses.operator,
    ajnaDripper.address,
  ]);
  console.log(`Redeemer deployed to : ${ajnaRedeemer.address} on ${network.name}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
