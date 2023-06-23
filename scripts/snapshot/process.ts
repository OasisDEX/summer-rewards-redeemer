import { BigNumber } from "ethers";

import { createMerkleTree, getEpochDayId, getEpochWeekId } from "../common/helpers";
import { Snapshot } from "../common/types";
import { getDailySnapshot, getWeeklySnapshot } from "./get-snapshot";
import { processDailyDb, processWeeklyDb } from "./process-snapshot-in-db";
import { processTransaction } from "./process-tx";

export async function processWeeklyClaims(weekId = 0) {
  if (weekId === 0) {
    weekId = getEpochWeekId();
  }
  const snapshot: Snapshot = (await getWeeklySnapshot(weekId)).map((entry) => ({
    address: entry.address,
    amount: BigNumber.from(entry.amount),
  }));
  const { tree, root } = createMerkleTree(snapshot);

  await processWeeklyDb(snapshot, weekId, root, tree);
  await processTransaction(weekId, root);
}

export async function processDailyClaims(dayId = 0) {
  if (dayId === 0) {
    dayId = getEpochDayId();
    console.log(`Current day: ${dayId}`);
  }
  const snapshot: Snapshot = (await getDailySnapshot(dayId)).map((entry) => ({
    address: entry.address,
    amount: BigNumber.from(entry.amount),
  }));

  await processDailyDb(snapshot, dayId);
}
