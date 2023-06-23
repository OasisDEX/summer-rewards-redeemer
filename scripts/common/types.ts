import { BigNumber } from "ethers";
import { BorrowDailyReward, Pool, Maybe, EarnDailyReward, User } from "../../.graphclient";

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
