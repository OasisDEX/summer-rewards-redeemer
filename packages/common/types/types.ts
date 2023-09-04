import { BigNumber, ethers } from "ethers";
import { Options } from "merkletreejs/dist/MerkleTree";

import { BorrowDailyReward, Day, EarnDailyReward, Maybe, Pool, User, Week } from "graphclient";
import { type } from "os";

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

export type SnapshotWithProofsEntry = {
  address: string;
  amount: BigNumber;
  proof: string[];
};
export type SnapshotWithProofs = SnapshotWithProofsEntry[];

export type ParsedSnapshotWithProofsEntry = Omit<SnapshotWithProofsEntry, "amount"> & {
  amount: string;
};

export type ParsedSnapshotWithProofs = ParsedSnapshotWithProofsEntry[];

export interface Distribution {
  name: string;
  address: string;
  share: number;
  lendRatio?: number;
}
export interface DistributionAmount {
  [poolAddress: string]: { total: BigNumber; lendRatio?: number };
}
export interface UserRewardsAmount {
  [userAddress: string]: BigNumber;
}
export enum Network {
  Mainnet = "mainnet",
  Goerli = "goerli",
}

export type Addresses = {
  [network in Network]: {
    [contractName: string]: string;
  };
};

export interface Config {
  environment: string;
  loggingEnabled: boolean;
  earnRewardsRatio: number;
  borrowRewardsRatio: number;
  rewardStartWeek: number;
  multiplier: number;
  dryRun: boolean;
  usedNetwork: string | undefined;
  network: Network;
  weeksCount: number;
  merkleTreeOptions: Options;
  addresses: { [key: string]: string };
  chainId: number;
  subgraphUrl: string;
  rpcUrl: string | undefined;
  signer: Promise<ethers.Signer>;
  provider: Promise<ethers.providers.JsonRpcProvider>;
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

export type PoolRewardsConfig = {
  name: string; // Name of the pool, typically the token pair
  address: string; // Address of the pool contract
  share: number; // Percentage of the total rewards allocated to this pool
  lendRatio?: number; // Optional percentage of allocation between lending and borrowing
};

export type PoolRewardsDistributionRequest = {
  weekId: number; // Week ID since the start of the rewards program
  distribution: PoolRewardsConfig[]; // List of pools and their share of the rewards
  totalWeeklyRewards: string; // Total amount of rewards for the week
};

export type UserRewards = {
  address: string; // User address
  amount: string; // Amount of rewards
  proof: string[]; // Merkle proof
};

export type PoolRewardsDistributionResponse = {
  root: string; // Merkle root
  parsedSnapshotWithProofs: UserRewards[]; // List of users with their rewards and merkle proofs
};

export type RewardsType = "daily" | "weekly";

export type PoolsSingleTokenRequest = {
  token: string;
};

export type TokenPair = [string, string];
export type TokenPairList = TokenPair[];

export type PoolsTokenPairRequest = {
  pairs: TokenPairList;
};

export type PoolsCuratedTokensRequest = {
  tokens: string[];
};

export type PoolsRequest = PoolsSingleTokenRequest | PoolsTokenPairRequest | PoolsCuratedTokensRequest;

export type PoolsRequestResponse = {
  pools: string[];
};
