import {
  config,
  createMerkleTree,
  EligibleNetwork,
  getEpochWeekId,
  getRewardsDistributionsForNetworks,
  Network,
  ParsedUserSnapshot,
  TestNetwork,
  UserSnapshot,
} from "common";
import { AjnaRewardsSource, prisma } from "database";
import { BigNumber, ethers } from "ethers";

import { getWeeklySnapshot } from "./get-snapshot";
import { processWeeklySnapshotInDb } from "./process-snapshot-in-db";
import { processTransaction } from "./process-tx";

/**
 * Processes weekly claims for the specified week IDs and networks.
 *
 * @param weekIds - An array of week IDs to process. Defaults to the previous week.
 * @param transactionNetwork - The network on which the transaction will be processed.
 * @param networksToProcess - An array of networks to process the claims for.
 * @param signer - An optional signer for the transaction.
 * @returns A Promise that resolves when all claims have been processed.
 */
export async function processWeeklyClaims(
  weekIds = [getEpochWeekId() - 1],
  transactionNetwork: Network,
  networksToProcess: Network[],
  signer?: ethers.Signer
): Promise<void> {
  const currentWeek = getEpochWeekId();

  for (const weekId of weekIds) {
    if (weekId >= currentWeek) {
      console.error(`Week ID ${weekId} - cant process current or future week.`);
      continue;
    }
    if (weekId < config.rewardStartWeek) {
      console.error(`Week ID ${weekId} - cant process week before reward start week.`);
      continue;
    }
    // set the network to the network we are processing the transaction on
    config.currentlyConfiguredNetwork = transactionNetwork;
    const existingWeek = await prisma.ajnaRewardsMerkleTree.findFirst({
      where: { week_number: weekId, tx_processed: true, chain_id: config.chainId },
    });

    if (existingWeek) {
      console.info(`Week ${weekId} has already been processed.`);
      continue;
    }

    console.info(`Processing weekly claims for week ${weekId}.`);
    // this will validate the reward distributions for all eligible networks
    getRewardsDistributionsForNetworks(weekId, [...networksToProcess]);
    // initialize an empty array to hold the snapshot for each network
    const userCoreSnapshotMultipleNetworks: ParsedUserSnapshot = [];
    const userBonusSnapshotMultipleRewards: ParsedUserSnapshot = [];
    // for each eligible network, get the reward distributions and generate the snapshot
    const promises = [...networksToProcess].map(async (network) => {
      console.info(`Processing weekly claims for week ${weekId} on ${network}.`);
      // set the network to the network we are processing the snapshot for
      config.currentlyConfiguredNetwork = network;
      const rewardDistributions = config.getRewardDistributions(weekId, network as unknown as Network);
      const parsedSnapshot = await getWeeklySnapshot(weekId, rewardDistributions);
      userCoreSnapshotMultipleNetworks.push(...parsedSnapshot.weeklyCoreRewardsSnaphot);
      userBonusSnapshotMultipleRewards.push(...parsedSnapshot.weeklyBonusRewardsSnaphot);
    });
    // wait for all snapshots to be generated
    await Promise.all(promises);
    // convert the daily snapshot to the format we need for the DB
    // iterate through all snapshots and sum up the amounts for each user
    const summedCoreUserSnapshots = sumUserSnapshot(userCoreSnapshotMultipleNetworks);
    const summedBonusUserSnapshots = sumUserSnapshot(userBonusSnapshotMultipleRewards);
    // create the merkle tree and process the snapshot in the DB
    const { tree, root } = createMerkleTree(summedCoreUserSnapshots);
    const { tree: treeBonus, root: rootBonus } = createMerkleTree(summedBonusUserSnapshots);
    // set the network to mainnet as we are adding the root to the contract only on mainnet
    config.currentlyConfiguredNetwork = transactionNetwork;
    // process the snapshot in the DB
    await processWeeklySnapshotInDb(summedCoreUserSnapshots, weekId, root, tree);
    await processWeeklySnapshotInDb(summedBonusUserSnapshots, weekId, rootBonus, treeBonus, AjnaRewardsSource.bonus);
    // process the snapshot on the blockchain - only core rewards are processed on the blockchain -bonus has to be processed by mutlisig
    await processTransaction(weekId, root, await config.signer);
  }
}

/**
 * Sums up the user snapshots and returns the aggregated user snapshot.
 * @param userSnapshot - The array of user snapshots to be summed up.
 * @returns The aggregated user snapshot.
 */
function sumUserSnapshot(userSnapshot: ParsedUserSnapshot): UserSnapshot {
  return userSnapshot
    .reduce((acc, curr) => {
      const existingEntry = acc.find((entry) => entry.userAddress === curr.userAddress);
      if (existingEntry) {
        existingEntry.amount = existingEntry.amount.add(BigNumber.from(curr.amount));
      } else {
        acc.push({ ...curr, amount: BigNumber.from(curr.amount) });
      }
      return acc;
    }, [] as UserSnapshot)
    .sort((a, b) => (a.userAddress.toLowerCase() > b.userAddress.toLowerCase() ? 1 : -1));
}

export async function processAllNetworksWeeklyClaims(weekIds = [getEpochWeekId() - 1]): Promise<void> {
  await processWeeklyClaims(weekIds, Network.Goerli, [...Object.values(TestNetwork)] as unknown as Network[]);
  await processWeeklyClaims(weekIds, Network.Mainnet, [...Object.values(EligibleNetwork)] as unknown as Network[]);
}
