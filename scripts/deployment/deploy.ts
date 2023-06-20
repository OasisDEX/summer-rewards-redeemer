import hre, { network } from "hardhat";

import { addresses } from "../common/config";
import { deployContract } from "../common/helpers";

async function main() {
  const networkName = network.name === "hardhat" ? "goerli" : network.name;
  const ajnaDripper = await deployContract("AjnaDripper", [
    addresses["ajnaToken"][networkName],
    addresses["admin"][networkName],
  ]);
  const ajnaRedeemer = await deployContract("AjnaRedeemer", [
    addresses["ajnaToken"][networkName],
    addresses["operator"][networkName],
    ajnaDripper.address,
  ]);

  if (network.name === "mainnet" || network.name === "goerli") {
    await hre.run("verify:verify", {
      address: ajnaRedeemer.address,
      constructorArguments: [
        addresses["ajnaToken"][networkName],
        addresses["operator"][networkName],
        ajnaDripper.address,
      ],
    });
    await hre.run("verify:verify", {
      address: ajnaDripper.address,
      constructorArguments: [addresses["ajnaToken"][networkName], addresses["admin"][networkName]],
    });
  }
  console.log(`Redeemer deployed to : ${ajnaRedeemer.address} on ${networkName}`);
  console.log(`Dripper deployed to : ${ajnaDripper.address} on ${networkName}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
