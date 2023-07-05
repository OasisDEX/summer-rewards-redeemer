import { ContractReceipt, ContractTransaction } from "@ethersproject/contracts";
import { network } from "hardhat";

import { prisma } from "../../prisma/client";
import { AjnaDripper, AjnaRedeemer, AjnaToken } from "../../typechain-types";
import { config } from "../common/config";
import { getContract, getOrDeployContract, impersonate, setTokenBalance } from "../common/helpers";
import { BASE_WEEKLY_AMOUNT } from "../common/test-data";
import { TX_STATUS } from "../common/types";

export async function processTransaction(weekId: number, root: string) {
  const ajnaToken = await getContract<AjnaToken>("AjnaToken", config.addresses.ajnaToken);
  const ajnaDripper = await getOrDeployContract<AjnaDripper>("AjnaDripper", [
    config.addresses.ajnaToken,
    config.addresses.admin,
  ]);
  const ajnaRedeemer = await getOrDeployContract<AjnaRedeemer>("AjnaRedeemer", [
    config.addresses.ajnaToken,
    config.addresses.operator,
    ajnaDripper.address,
  ]);

  try {
    let tx: ContractTransaction;
    if (network.name === "hardhat") {
      const operator = await prepareHardhatEnv(ajnaDripper, ajnaToken, ajnaRedeemer);
      tx = await ajnaRedeemer.connect(operator).addRoot(Number(weekId), root);
    } else {
      tx = await ajnaRedeemer.addRoot(Number(weekId), root);
    }
    const receipt = await tx.wait();
    await updateAjnaRewardsMerkleTree(receipt, weekId);
  } catch (error) {
    console.error(error);
  }
}
async function prepareHardhatEnv(ajnaDripper: AjnaDripper, ajnaToken: AjnaToken, ajnaRedeemer: AjnaRedeemer) {
  const operator = await impersonate(config.addresses.operator);
  const admin = await impersonate(config.addresses.admin);
  await setTokenBalance(ajnaDripper.address, ajnaToken.address, BASE_WEEKLY_AMOUNT);
  await (await ajnaDripper.connect(admin).setup(ajnaRedeemer.address, BASE_WEEKLY_AMOUNT)).wait();
  return operator;
}

async function updateAjnaRewardsMerkleTree(receipt: ContractReceipt, weekId: number) {
  if (receipt.status === TX_STATUS.SUCCESSFUL) {
    await prisma.ajnaRewardsMerkleTree.update({
      where: { week_number_chain_id_unique_id: { week_number: Number(weekId), chain_id: config.chainId } },
      data: { tx_processed: true },
    });
  } else {
    console.log(`Transaction failed for week ${weekId}.`);
  }
}
