import { ContractReceipt } from "@ethersproject/contracts";

import { prisma } from "database";
import { AjnaDripper__factory, AjnaRedeemer__factory, AjnaToken__factory } from "../../typechain-types";
import { config } from "common/config/config";
import { TX_STATUS } from "common/types/types";
import { ethers } from "ethers";

export async function processTransaction(weekId: number, root: string, signer?: ethers.Signer) {
  const contracts = await getContracts(signer);

  try {
    const tx = await contracts.ajnaRedeemer.addRoot(Number(weekId), root);
    const receipt = await tx.wait();
    await updateAjnaRewardsMerkleTree(receipt, weekId);
  } catch (error) {
    console.error(error);
  }
}

async function updateAjnaRewardsMerkleTree(receipt: ContractReceipt, weekId: number) {
  if (receipt.status === TX_STATUS.SUCCESSFUL) {
    await prisma.ajnaRewardsMerkleTree.update({
      where: { week_number_chain_id_unique_id: { week_number: Number(weekId), chain_id: config.chainId } },
      data: { tx_processed: true },
    });
  } else {
    console.log(`Transaction failed for week ${weekId}. Chain ID: ${config.chainId}`);
  }
}
/**
 * Creates a contract object for each contract in the config.addresses object
 * @param signer signer is passed from hardhat tests so that we can use the same signer for all transactions and decouple
 * the contract deployment from the transaction processing
 * @returns object containing relevant contracts
 */
export async function getContracts(signer: ethers.Signer | undefined) {
  signer = signer || (await config.signer);

  const redeemerFactory = new AjnaRedeemer__factory(signer);
  const tokenFactory = new AjnaToken__factory(signer);
  const dripperFactory = new AjnaDripper__factory(signer);
  const contracts = {
    ajnaRedeemer: redeemerFactory.attach(config.addresses.ajnaRedeemer),
    ajnaToken: tokenFactory.attach(config.addresses.ajnaToken),
    ajnaDripper: dripperFactory.attach(config.addresses.ajnaDripper),
  };

  return contracts;
}
