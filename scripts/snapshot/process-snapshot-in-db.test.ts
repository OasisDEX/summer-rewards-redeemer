// eslint-disable-next-line node/no-extraneous-import
import { afterAll, beforeAll, describe, expect } from "@jest/globals";
import { BigNumber } from "ethers";
import fs from "fs";
import MerkleTree from "merkletreejs";
import path from "path";

import { prisma } from "../../prisma/client";
import { createMerkleTree } from "../common/helpers";
import { ParsedSnapshotEntry, Snapshot } from "../common/types";
import { processDailySnapshotInDb, processWeeklySnapshotInDb } from "../snapshot/process-snapshot-in-db";

describe("processDailySnapshotInDb", () => {
  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });
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
    const snapshotPath = path.join(__dirname, "test-data", "weekly-snapshot-2783.json");
    const snapshotData = fs.readFileSync(snapshotPath, "utf-8");
    const snapshot: Snapshot = JSON.parse(snapshotData).map((entry: ParsedSnapshotEntry) => ({
      address: entry.address,
      amount: BigNumber.from(entry.amount),
    }));
    const currentDay = 1;

    await processDailySnapshotInDb(snapshot, currentDay);

    const entries = await prisma.ajnaRewardsDailyClaim.findMany();
    expect(entries).toHaveLength(snapshot.length);
    snapshot.forEach((entry, index) => {
      expect(entries[index].user_address).toEqual(entry.address);
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
      const snapshot: Snapshot = JSON.parse(snapshotData).map((entry: ParsedSnapshotEntry) => ({
        address: entry.address,
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
      fs.readFileSync(`${dataDir}/daily-snapshot-${dayIds[index]}.json`, "utf8")
    );

    for (const [index, snapshotData] of snapshots.entries()) {
      const snapshot: Snapshot = JSON.parse(snapshotData).map((entry: ParsedSnapshotEntry) => ({
        address: entry.address,
        amount: BigNumber.from(entry.amount),
      }));
      const currentDay = dayIds[index];
      await processDailySnapshotInDb(snapshot, currentDay);
    }
  });
  it("should process week - day by day - no error", async () => {
    const days = [19533, 19536, 19535, 19534, 19532, 19531, 19530];
    const week = 2790;
    for (const day of days) {
      const snapshotPath = path.join(__dirname, "test-data", "daily", `daily-snapshot-${day}.json`);
      const snapshotData = fs.readFileSync(snapshotPath, "utf-8");
      const snapshot: Snapshot = JSON.parse(snapshotData).map((entry: ParsedSnapshotEntry) => ({
        address: entry.address,
        amount: BigNumber.from(entry.amount),
      }));
      await processDailySnapshotInDb(snapshot, day);
    }
    const weekly = await prisma.ajnaRewardsWeeklyClaim.findMany({
      where: {
        week_number: week,
      },
    });
    const total = weekly.reduce((acc, cur) => {
      return acc + parseInt(cur.amount);
    }, 0);

    const snapshotPath = path.join(__dirname, "test-data", "weekly", `weekly-snapshot-${week}.json`);
    const snapshotData = fs.readFileSync(snapshotPath, "utf-8");
    const snapshot: Snapshot = JSON.parse(snapshotData).map((entry: ParsedSnapshotEntry) => ({
      address: entry.address,
      amount: BigNumber.from(entry.amount),
    }));
    const total2 = Object.values(snapshot).reduce((acc, cur) => {
      return acc + parseInt(cur.amount.toString());
    }, 0);

    const { root, tree } = createMerkleTree(snapshot);
    await processWeeklySnapshotInDb(snapshot, week, root, tree);
    expect(total).toEqual(total2);
  });
  it("should process week - day by day #2 - no error", async () => {
    const x = [19533, 19536, 19535, 19534, 19532, 19531, 19530];
    const days = x.map((day) => day - 7);
    const week = 2790 - 1;
    for (const day of days) {
      const snapshotPath = path.join(__dirname, "test-data", "daily", `daily-snapshot-${day}.json`);
      const snapshotData = fs.readFileSync(snapshotPath, "utf-8");
      const snapshot: Snapshot = JSON.parse(snapshotData).map((entry: ParsedSnapshotEntry) => ({
        address: entry.address,
        amount: BigNumber.from(entry.amount),
      }));
      await processDailySnapshotInDb(snapshot, day);
    }
    const weekly = await prisma.ajnaRewardsWeeklyClaim.findMany({
      where: {
        week_number: week,
      },
    });
    const total = weekly.reduce((acc, cur) => {
      return acc + parseInt(cur.amount);
    }, 0);

    const snapshotPath = path.join(__dirname, "test-data", "weekly", `weekly-snapshot-${week}.json`);
    const snapshotData = fs.readFileSync(snapshotPath, "utf-8");
    const snapshot: Snapshot = JSON.parse(snapshotData).map((entry: ParsedSnapshotEntry) => ({
      address: entry.address,
      amount: BigNumber.from(entry.amount),
    }));
    const total2 = Object.values(snapshot).reduce((acc, cur) => {
      return acc + parseInt(cur.amount.toString());
    }, 0);
    console.log(total);
    console.log(total2);
    const { root, tree } = createMerkleTree(snapshot);
    await processWeeklySnapshotInDb(snapshot, week, root, tree);
    expect(total).toEqual(total2);
  });
});

describe("processWeeklySnapshotInDb", () => {
  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });
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
    const snapshotPath = path.join(__dirname, "test-data", "weekly-snapshot-2783.json");
    const snapshotData = fs.readFileSync(snapshotPath, "utf-8");
    const snapshot: Snapshot = JSON.parse(snapshotData).map((entry: ParsedSnapshotEntry) => ({
      address: entry.address,
      amount: BigNumber.from(entry.amount),
    }));
    const currentWeek = 1;
    const root = "0x123";
    const tree = new MerkleTree([]);

    await processWeeklySnapshotInDb(snapshot, currentWeek, root, tree);

    const merkleTree = await prisma.ajnaRewardsMerkleTree.findUnique({ where: { week_number: 1 } });
    expect(merkleTree).toBeDefined();
    expect(merkleTree?.tree_root).toEqual("0x123");

    const entries = await prisma.ajnaRewardsWeeklyClaim.findMany();
    expect(entries).toHaveLength(snapshot.length);
    snapshot.forEach((entry, index) => {
      expect(entries[index].user_address).toEqual(entry.address);
      expect(entries[index].amount).toEqual(entry.amount.toString());
      expect(entries[index].week_number).toEqual(1);
      expect(entries[index].proof).toBeDefined();
    });
  });

  it("should not add duplicate merkle tree to the database", async () => {
    const snapshotPath = path.join(__dirname, "test-data", "weekly-snapshot-2783.json");
    const snapshotData = fs.readFileSync(snapshotPath, "utf-8");
    const snapshot: Snapshot = JSON.parse(snapshotData).map((entry: ParsedSnapshotEntry) => ({
      address: entry.address,
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
