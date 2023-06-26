// eslint-disable-next-line node/no-extraneous-import
import { afterAll, beforeAll, describe, expect } from "@jest/globals";
import { BigNumber } from "ethers";
import fs from "fs";
import MerkleTree from "merkletreejs";
import path from "path";

import { ParsedSnapshotEntry, Snapshot } from "../common/types";
import { prisma, processDailySnapshotInDb, processWeeklySnapshotInDb } from "../snapshot/process-snapshot-in-db";
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
