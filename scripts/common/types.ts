import { BigNumber } from "ethers";
import { Options } from "merkletreejs/dist/MerkleTree";

import { BorrowDailyReward, Day, EarnDailyReward, Maybe, Pool, User, Week } from "../../.graphclient";

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

export interface Distribution {
  name: string;
  address: string;
  share: number;
}
export interface DistributionAmount {
  [poolAddress: string]: BigNumber;
}
export interface UserRewardsAmount {
  [userAddress: string]: BigNumber;
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
    [contractName: string]: string;
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
  addresses: { [key: string]: string };
  rewardDistributions: Distribution[];
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

export type BorrowDailyRewards = (Pick<BorrowDailyReward, "id" | "reward"> & {
  pool: Pick<Pool, "id">;
  user?: Maybe<Pick<User, "id">> | undefined;
})[];

export type EarnDailyRewards = (Pick<EarnDailyReward, "id" | "reward"> & {
  pool: Pick<Pool, "id">;
  user?: Maybe<Pick<User, "id">> | undefined;
})[];

export type WeekDay = Pick<Day, "id"> & {
  borrowDailyRewards?:
    | Maybe<
        (Pick<BorrowDailyReward, "id" | "reward"> & {
          pool: Pick<Pool, "id">;
          user?: Maybe<Pick<User, "id">> | undefined;
        })[]
      >
    | undefined;
  earnDailyRewards?: EarnDailyRewards | null;
  week: Pick<Week, "id">;
};

export interface DailyRewards {
  id: string;
  dailyRewards: {
    [userAddress: string]: BigNumber;
  };
  totalDailyRewards: BigNumber;
}

export type WeeklyRewards = DailyRewards[];

export enum TX_STATUS {
  "REVERTED" = 0,
  "SUCCESSFUL" = 1,
}
