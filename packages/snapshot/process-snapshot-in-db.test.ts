// eslint-disable-next-line node/no-extraneous-import
import { afterAll, beforeAll, describe, expect } from "@jest/globals";
import { BigNumber } from "ethers";
import fs from "fs";
import MerkleTree from "merkletreejs";
import path from "path";

import {
  createMerkleTree,
  config,
  PositionSnapshot,
  ParsedPositionSnapshot,
  ParsedPositionSnapshotEntry,
  PositionSnapshotEntry,
} from "common";
import { ParsedUserSnapshotEntry, UserSnapshot } from "common";
import { processDailySnapshotInDb, processWeeklySnapshotInDb } from "../snapshot/process-snapshot-in-db";
import { AjnaRewardsSource, prisma } from "database";

describe("processDailySnapshotInDb", () => {
  beforeEach(async () => {
    await prisma.ajnaRewardsWeeklyClaim.deleteMany({});
    await prisma.ajnaRewardsMerkleTree.deleteMany({});
    await prisma.ajnaRewardsDailyClaim.deleteMany({});
  });
  afterEach(async () => {
    await prisma.ajnaRewardsWeeklyClaim.deleteMany({});
    await prisma.ajnaRewardsMerkleTree.deleteMany({});
    await prisma.ajnaRewardsDailyClaim.deleteMany({});
  });

  it("should add snapshot entries to the database", async () => {
    const snapshotPath = path.join(__dirname, "test-data/daily/", "daily-snapshot-19587-positions.json");
    const snapshotData = fs.readFileSync(snapshotPath, "utf-8");
    const parsedSnapshot = JSON.parse(snapshotData);
    const snapshot: PositionSnapshot = parsedSnapshot.map((entry: ParsedPositionSnapshotEntry) => ({
      userAddress: entry.userAddress.toLowerCase(),
      accountAddress: entry.accountAddress.toLowerCase(),
      positionType: entry.positionType,
      poolAddress: entry.poolAddress.toLowerCase(),
      amount: BigNumber.from(entry.amount),
    }));
    const currentDay = 1;

    await processDailySnapshotInDb(snapshot, currentDay);

    const entries = await prisma.ajnaRewardsDailyClaim.findMany();
    expect(entries).toHaveLength(snapshot.length);
    snapshot.forEach((entry, index) => {
      expect(entries[index].user_address).toEqual(entry.userAddress.toLowerCase());
      expect(entries[index].amount).toEqual(entry.amount.toString());
    });
  });
  it("should add all weekly test snapshot entries to the database - no errors", async () => {
    const dataDir = path.join(__dirname, "test-data", "weekly");
    const files = fs.readdirSync(dataDir).filter((file: any) => /^weekly-data-\d+.json$/.test(file));
    const weekIds = files.map((file: any) => parseInt(file.match(/\d+/)[0]));
    const snapshots = files.map((file: any, index) =>
      fs.readFileSync(`${dataDir}/weekly-snapshot-${weekIds[index]}.json`, "utf8")
    );

    for (const [index, snapshotData] of snapshots.entries()) {
      const snapshot: UserSnapshot = JSON.parse(snapshotData).map((entry: ParsedUserSnapshotEntry) => ({
        userAddress: entry.userAddress.toLowerCase(),
        amount: BigNumber.from(entry.amount),
      }));
      const currentWeek = weekIds[index];
      const { root, tree } = createMerkleTree(snapshot);
      await processWeeklySnapshotInDb(snapshot, currentWeek, root, tree);
    }
  });
  it("should add all daily test snapshot entries to the database - no errors", async () => {
    const dataDir = path.join(__dirname, "test-data", "daily");

    const files = fs.readdirSync(dataDir).filter((file: any) => /^daily-data-\d+.json$/.test(file));
    const dayIds = files.map((file: any) => parseInt(file.match(/\d+/)[0]));
    const snapshots = files.map((file: any, index) =>
      fs.readFileSync(`${dataDir}/daily-snapshot-${dayIds[index]}-positions.json`, "utf8")
    );

    for (const [index, snapshotData] of snapshots.entries()) {
      const snapshot: PositionSnapshot = JSON.parse(snapshotData).map((entry: ParsedPositionSnapshotEntry) => ({
        userAddress: entry.userAddress.toLowerCase(),
        accountAddress: entry.accountAddress.toLowerCase(),
        positionType: entry.positionType,
        poolAddress: entry.poolAddress.toLowerCase(),
        amount: BigNumber.from(entry.amount),
      }));
      const currentDay = dayIds[index];
      await processDailySnapshotInDb(snapshot, currentDay);
    }
  });
  it("should process week - day by day - no error", async () => {
    const days = [19586, 19587, 19589, 19588, 19590, 19592, 19591];
    const week = 2798;
    for (const day of days) {
      const snapshotPath = path.join(__dirname, "test-data", "daily", `daily-snapshot-${day}-positions.json`);
      const snapshotData = fs.readFileSync(snapshotPath, "utf-8");
      const snapshot: PositionSnapshot = JSON.parse(snapshotData).map((entry: ParsedPositionSnapshotEntry) => ({
        userAddress: entry.userAddress.toLowerCase(),
        accountAddress: entry.accountAddress.toLowerCase(),
        positionType: entry.positionType,
        poolAddress: entry.poolAddress.toLowerCase(),
        amount: BigNumber.from(entry.amount),
      }));
      await processDailySnapshotInDb(snapshot, day);
    }

    const snapshotPath = path.join(__dirname, "test-data", "weekly", `weekly-snapshot-${week}.json`);
    const snapshotData = fs.readFileSync(snapshotPath, "utf-8");
    const snapshot: UserSnapshot = JSON.parse(snapshotData).map((entry: ParsedUserSnapshotEntry) => ({
      userAddress: entry.userAddress.toLowerCase(),
      amount: BigNumber.from(entry.amount),
    }));
    const total2 = Object.values(snapshot).reduce((acc, cur) => {
      return acc.add(cur.amount);
    }, BigNumber.from(0));

    const { root, tree } = createMerkleTree(snapshot);
    await processWeeklySnapshotInDb(snapshot, week, root, tree);

    const weekly = await prisma.ajnaRewardsWeeklyClaim.findMany({
      where: {
        week_number: week,
        chain_id: config.chainId,
      },
    });
    const total = weekly.reduce((acc, cur) => {
      return acc.add(BigNumber.from(cur.amount));
    }, BigNumber.from(0));

    expect(total).toEqual(total2);
  });
  it("should process week - day by day #2 - no error", async () => {
    const x = [19586, 19587, 19589, 19588, 19590, 19592, 19591];
    const days = x.map((day) => day + 7);
    const week = 2799;
    for (const day of days) {
      const snapshotPath = path.join(__dirname, "test-data", "daily", `daily-snapshot-${day}-positions.json`);
      const snapshotData = fs.readFileSync(snapshotPath, "utf-8");
      const snapshot: PositionSnapshot = JSON.parse(snapshotData).map((entry: ParsedPositionSnapshotEntry) => ({
        userAddress: entry.userAddress.toLowerCase(),
        accountAddress: entry.accountAddress.toLowerCase(),
        positionType: entry.positionType,
        poolAddress: entry.poolAddress.toLowerCase(),
        amount: BigNumber.from(entry.amount),
      }));
      await processDailySnapshotInDb(snapshot, day);
    }

    const snapshotPath = path.join(__dirname, "test-data", "weekly", `weekly-snapshot-${week}.json`);
    const snapshotData = fs.readFileSync(snapshotPath, "utf-8");
    const snapshot: UserSnapshot = JSON.parse(snapshotData).map((entry: ParsedUserSnapshotEntry) => ({
      userAddress: entry.userAddress.toLowerCase(),
      amount: BigNumber.from(entry.amount),
    }));
    const total2 = Object.values(snapshot).reduce((acc, cur) => {
      return acc.add(cur.amount);
    }, BigNumber.from(0));
    const { root, tree } = createMerkleTree(snapshot);
    await processWeeklySnapshotInDb(snapshot, week, root, tree);
    const weekly = await prisma.ajnaRewardsWeeklyClaim.findMany({
      where: {
        week_number: week,
        chain_id: config.chainId,
      },
    });
    const total = weekly.reduce((acc, cur) => {
      return acc.add(BigNumber.from(cur.amount));
    }, BigNumber.from(0));
    expect(total).toEqual(total2);
  });
});

describe("processWeeklySnapshotInDb", () => {
  beforeEach(async () => {
    await prisma.ajnaRewardsWeeklyClaim.deleteMany({});
    await prisma.ajnaRewardsMerkleTree.deleteMany({});
    await prisma.ajnaRewardsDailyClaim.deleteMany({});
  });
  afterEach(async () => {
    await prisma.ajnaRewardsWeeklyClaim.deleteMany({});
    await prisma.ajnaRewardsMerkleTree.deleteMany({});
    await prisma.ajnaRewardsDailyClaim.deleteMany({});
  });

  it("should add snapshot entries and merkle tree to the database", async () => {
    const snapshotPath = path.join(__dirname, "test-data/weekly/", "weekly-snapshot-2798.json");
    const snapshotData = fs.readFileSync(snapshotPath, "utf-8");
    const weeklyUserSnapshot: UserSnapshot = JSON.parse(snapshotData).map((entry: ParsedUserSnapshotEntry) => ({
      userAddress: entry.userAddress.toLowerCase(),
      amount: BigNumber.from(entry.amount),
    }));
    const currentWeek = 1;
    const root = "0x123";
    const tree = new MerkleTree([]);

    await processWeeklySnapshotInDb(weeklyUserSnapshot, currentWeek, root, tree);

    const merkleTree = await prisma.ajnaRewardsMerkleTree.findUnique({
      where: {
        week_number_chain_id_source_unique_id: {
          week_number: 1,
          chain_id: config.chainId,
          source: AjnaRewardsSource.core,
        },
      },
    });
    expect(merkleTree).toBeDefined();
    expect(merkleTree!.tree_root).toEqual("0x123");

    const weeklyClaimsFromDb = await prisma.ajnaRewardsWeeklyClaim.findMany();

    expect(weeklyClaimsFromDb).toHaveLength(weeklyUserSnapshot.length);
    weeklyUserSnapshot.forEach((entry, index) => {
      const filteredWeeklyClaimsFromDb = weeklyClaimsFromDb.filter((claim) => claim.user_address === entry.userAddress);
      expect(filteredWeeklyClaimsFromDb).toHaveLength(1);
      expect(filteredWeeklyClaimsFromDb[0].user_address).toEqual(entry.userAddress.toLowerCase());
      expect(filteredWeeklyClaimsFromDb[0].amount).toEqual(entry.amount.toString());
      expect(filteredWeeklyClaimsFromDb[0].week_number).toEqual(1);
      expect(filteredWeeklyClaimsFromDb[0].proof).toBeDefined();
    });
  });

  it("should not add duplicate merkle tree to the database", async () => {
    const snapshotPath = path.join(__dirname, "test-data/weekly/", "weekly-snapshot-2798.json");
    const snapshotData = fs.readFileSync(snapshotPath, "utf-8");
    const snapshot: UserSnapshot = JSON.parse(snapshotData).map((entry: ParsedUserSnapshotEntry) => ({
      userAddress: entry.userAddress.toLowerCase(),
      amount: BigNumber.from(entry.amount),
    }));
    const currentWeek = 1;
    const root = "0x123";
    const tree = new MerkleTree([]);

    await processWeeklySnapshotInDb(snapshot, currentWeek, root, tree);
    await processWeeklySnapshotInDb(snapshot, currentWeek, root, tree);

    const merkleTrees = await prisma.ajnaRewardsMerkleTree.findMany();
    expect(merkleTrees).toHaveLength(1);
  });
});
