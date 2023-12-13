import { ethers } from "ethers";

export type TxResult = {
  success: boolean;
  txHash?: string;
  error?: string;
  receipt?: ethers.ContractReceipt;
};

export async function processTx(
  txPromise: Promise<ethers.ContractTransaction>,
  iface?: ethers.utils.Interface,
  logErrors = false
): Promise<TxResult> {
  let tx: ethers.ContractTransaction;
  let receipt: ethers.ContractReceipt;
  try {
    tx = await txPromise;
    receipt = await tx.wait();

    if (receipt.status === 0) {
      logErrors && console.error("TX failed");
      return {
        success: false,
        error: "TX failed",
      };
    }
  } catch (error: any) {
    logErrors && console.error("TX failed:", error);
    return {
      success: false,
      error: JSON.stringify(error),
    };
  }

  return {
    success: true,
    txHash: tx.hash,
    receipt,
  };
}
