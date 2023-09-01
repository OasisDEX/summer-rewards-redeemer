import { ethers } from "ethers";

export type TxResult = {
  success: boolean;
  txHash?: string;
  error?: string;
};

export async function processTx(
  txPromise: Promise<ethers.ContractTransaction>,
  logErrors: boolean = false
): Promise<TxResult> {
  let tx: ethers.ContractTransaction;
  try {
    tx = await txPromise;
    const receipt = await tx.wait();

    if (receipt.status === 0) {
      logErrors && console.error("TX failed");
      return {
        success: false,
        error: "TX failed",
      };
    }
  } catch (error) {
    logErrors && console.error("TX failed:", error);
    return {
      success: false,
      error: error.message,
    };
  }

  return {
    success: true,
    txHash: tx.hash,
  };
}
