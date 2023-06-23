import hre, { network } from "hardhat";

import { addresses, config } from "../common/config";
import { deployContract, getContract } from "../common/helpers";
import { Contract, ethers } from "ethers";

async function main() {
  let ajnaRedeemer: Contract;
  let ajnaDripper: Contract ;
  if (addresses[config.network].ajnaDripper === ethers.constants.AddressZero) {
    ajnaDripper = await deployContract("AjnaDripper", [
      addresses[config.network]["ajnaToken"],
      addresses[config.network]["admin"],
    ]);
  } else {
    console.info("AjnaDripper already deployed");
    ajnaDripper = await getContract("AjnaDripper", addresses[config.network]["ajnaDripper"]);
  }
  if (addresses[config.network].ajnaRedeemer === ethers.constants.AddressZero) {
    ajnaRedeemer = await deployContract("AjnaRedeemer", [
      addresses[config.network]["ajnaToken"],
      addresses[config.network]["operator"],
      ajnaDripper.address,
    ]);
  } else {
    console.info("AjnaRedeemer already deployed");
    ajnaRedeemer = await getContract("AjnaRedeemer", addresses[config.network]["ajnaRedeemer"]);
  }

  if (network.name === "mainnet" || network.name === "goerli") {
    await hre.run("verify:verify", {
      address: ajnaRedeemer.address,
      constructorArguments: [
        addresses[config.network]["ajnaToken"],
        addresses[config.network]["operator"],
        ajnaDripper.address,
      ],
    });
    await hre.run("verify:verify", {
      address: ajnaDripper.address,
      constructorArguments: [addresses[config.network]["ajnaToken"], addresses[config.network]["admin"]],
    });
  }
  console.log(`Redeemer deployed to : ${ajnaRedeemer.address} on ${config.network}`);
  console.log(`Dripper deployed to : ${ajnaDripper.address} on ${config.network}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// async function getOrDeployContract(contractName: string) {
//   let ajnaDripper: Contract;
//   if (addresses[config.network]["ajnaDripper"] === ethers.constants.AddressZero) {
//     ajnaDripper = await deployContract(contractName, [
//       addresses[config.network]["ajnaToken"],
//       addresses[config.network]["admin"],
//     ]);
//   } else {
//     console.info("AjnaDripper already deployed");
//     ajnaDripper = await getContract("AjnaDripper", addresses[config.network]["ajnaDripper"]);
//   }
//   return ajnaDripper;
// }
