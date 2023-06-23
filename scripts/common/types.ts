import { BigNumber } from "ethers";
import { BorrowDailyReward, Pool, Maybe, EarnDailyReward, User } from "../../.graphclient";
import { Options } from "merkletreejs/dist/MerkleTree";

export interface ParsedSnapshotEntry {
  address: string;
  amount: string;
}
export type ParsedSnapshot = ParsedSnapshotEntry[];
export interface SnapshotEntry {
  address: string;
  amount: BigNumber;
}
export type Snapshot = SnapshotEntry[];

export type BorrowDailyRewards = (Pick<BorrowDailyReward, "id" | "reward"> & {
  pool: Pick<Pool, "id">;
  user?: Maybe<Pick<User, "id">> | undefined;
})[];

export type EarnDailyRewards = (Pick<EarnDailyReward, "id" | "reward"> & {
  pool: Pick<Pool, "id">;
  user?: Maybe<Pick<User, "id">> | undefined;
})[];

export interface Distribution {
  name: string;
  address: string;
  share: number;
}
export enum Network {
  Mainnet = "mainnet",
  Goerli = "goerli",
}

export type RewardDistributions = {
  [network in Network]: Distribution[];
};

export type Addresses = {
  [network in Network]: {
    [key: string]: string;
  };
};

export interface Config {
  earnRewardsRatio: number;
  borrowRewardsRatio: number;
  rewardStartWeek: number;
  multiplier: number;
  dryRun: boolean;
  network: Network;
  merkleTreeOptions: Options;
}

export type EthersError = {
  reason: string;
  code: string;
  transactionHash: string;
  method: string;
  transaction?: {
    hash: string;
    from: string;
    to: string;
    data: string;
    nonce: number;
    gasLimit: BigNumber;
    gasPrice: BigNumber;
    value: BigNumber;
    chainId: number;
  };  
};