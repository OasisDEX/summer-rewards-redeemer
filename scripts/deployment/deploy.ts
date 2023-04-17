import { ethers, network } from "hardhat";

import { addresses } from "../common/config";

async function main() {
  const MerkleRedeemer = await ethers.getContractFactory("MerkleRedeemer");
  const merkleRedeemer = await MerkleRedeemer.deploy(
    network.name === "mainnet" ? addresses.ajnaToken.mainnet : addresses.ajnaToken.goerli,
    addresses.admin,
    addresses.operator
  );
  await merkleRedeemer.deployed();
  console.log(`Redeemer deployed to : ${merkleRedeemer.address} on ${network.name}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
