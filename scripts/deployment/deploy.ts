import hre, { network } from "hardhat";

import { addresses, config } from "../common/config";
import { deployContract, getContract, getOrDeployContract } from "../common/helpers";
import { Contract, ethers } from "ethers";
import chalk from "chalk";
import { AjnaDripper, AjnaRedeemer } from "../../typechain-types";

async function main() {
  let ajnaDripper = await getOrDeployContract<AjnaDripper>("AjnaDripper", [
    addresses[config.network]["ajnaToken"],
    addresses[config.network]["admin"],
  ]);
  let ajnaRedeemer = await getOrDeployContract<AjnaRedeemer>("AjnaRedeemer", [
    addresses[config.network]["ajnaToken"],
    addresses[config.network]["operator"],
    ajnaDripper.address,
  ]);

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
  console.log(`Redeemer deployed to : ${chalk.green(ajnaRedeemer.address)} on ${chalk.green(config.network)}`);
  console.log(`Dripper deployed to : ${chalk.green(ajnaDripper.address)} on ${chalk.green(config.network)}`);
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
