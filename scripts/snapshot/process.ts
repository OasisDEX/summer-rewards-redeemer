import { BigNumber } from "ethers";

import { createMerkleTree, getEpochDayId, getEpochWeekId } from "../common/helpers";
import { ParsedSnapshot, Snapshot } from "../common/types";
import { getDailySnapshot, getWeeklySnapshot } from "./get-snapshot";
import { processDailySnapshotInDb, processWeeklySnapshotInDb } from "./process-snapshot-in-db";
import { processTransaction } from "./process-tx";

export async function processWeeklyClaims(weekId = getEpochWeekId()): Promise<void> {
  console.log(`Processing weekly claims for day ${weekId}`);

  const parsedSnapshot: ParsedSnapshot = await getWeeklySnapshot(weekId);
  const snapshot: Snapshot = parsedSnapshot.map((entry) => ({
    address: entry.address,
    amount: BigNumber.from(entry.amount),
  }));
  const { tree, root } = createMerkleTree(snapshot);

  await processWeeklySnapshotInDb(snapshot, weekId, root, tree);
  await processTransaction(weekId, root);
}

export async function processDailyClaims(dayId = getEpochDayId()): Promise<void> {
  console.log(`Processing daily claims for day ${dayId}`);

  const parsedSnapshot: ParsedSnapshot = await getDailySnapshot(dayId);
  const snapshot: Snapshot = parsedSnapshot.map((entry) => ({
    address: entry.address,
    amount: BigNumber.from(entry.amount),
  }));

  await processDailySnapshotInDb(snapshot, dayId);
}
