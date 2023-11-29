import { Wallet, providers, utils } from "ethers";
import { HDNode } from "ethers/lib/utils";

const NUM_OF_SIGNERS = 10;
export const ETHEREUM_DERIVATION_PATH = `m/44'/60'/0'/0`;
const mnemonic = "also drastic scatter strategy spell output clever weekend claw feature hero crystal arch icon pony";

export class LockedWallet extends Wallet {
  public readonly id: string;

  constructor(mnemonic: string, public readonly index: number, provider?: providers.Provider) {
    super(HDNode.fromMnemonic(mnemonic).derivePath(`${ETHEREUM_DERIVATION_PATH}/${index}`), provider);
    this.id = `${utils.keccak256(utils.toUtf8Bytes(mnemonic))}-${index}`;
  }
}

const signers = Array.from(new Array(NUM_OF_SIGNERS), (_, idx) => new LockedWallet(mnemonic, idx));
signers.map((s) => console.log(s.privateKey));
