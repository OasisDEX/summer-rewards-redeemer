import chalk from "chalk";
import { config } from "common/config";
import { PositionSnapshot, UserSnapshot } from "common/types";
import { AjnaRewardsSource, AjnaRewardsWeeklyClaim, Prisma, prisma, PrismaPromise } from "database";
import { ethers } from "ethers";
import MerkleTree from "merkletreejs";

/**
 * Processes a weekly snapshot in the database.
 *
 * @param snapshot - The user snapshot to process.
 * @param currentWeek - The current week number.
 * @param root - The root of the Merkle tree.
 * @param tree - The Merkle tree.
 * @param rewardsSource - The source of the rewards.
 * @returns A promise that resolves when the snapshot is processed in the database.
 */
export async function processWeeklySnapshotInDb(
  snapshot: UserSnapshot,
  currentWeek: number,
  root: string,
  tree: MerkleTree,
  rewardsSource: AjnaRewardsSource = AjnaRewardsSource.core
) {
  await prisma.$transaction(
    async (tx) => {
      try {
        console.info(chalk.gray(`Adding week #${currentWeek} to the db. Chain ID: ${config.chainId}`));
        await tx.ajnaRewardsMerkleTree.create({
          data: {
            tree_root: root,
            week_number: Number(currentWeek),
            chain_id: config.chainId,
            source: rewardsSource,
          },
        });
      } catch (error: unknown) {
        const prismaError = error as Prisma.PrismaClientKnownRequestError;
        if (prismaError?.code === "P2002") {
          console.error(
            `Root already added for week ${currentWeek}. Chain ID: ${config.chainId}. Rewards source ${rewardsSource}`
          );
          return;
        } else {
          throw error;
        }
      }
      const snapshotEntries = snapshot.map((entry) => {
        const leaf = ethers.utils.solidityKeccak256(
          ["address", "uint256"],
          [entry.userAddress.toLowerCase(), entry.amount]
        );
        const proof = tree.getHexProof(leaf);
        return tx.ajnaRewardsWeeklyClaim.create({
          data: {
            user_address: entry.userAddress.toLowerCase(),
            amount: entry.amount.toString(),
            week_number: currentWeek,
            chain_id: config.chainId,
            source: rewardsSource,
            proof,
          },
        });
      });
      console.info(
        chalk.gray(
          `Adding ${snapshotEntries.length} snapshot entries to the db. Chain ID: ${config.chainId}. Source ${rewardsSource}`
        )
      );
      try {
        await prisma.$transaction(snapshotEntries);
      } catch (error) {
        console.error(error);
        throw new Error("Error adding snapshot entries to the db");
      }
    },
    { timeout: 50000 }
  );
}

/**
 * Processes the daily snapshot in the database.
 *
 * @param snapshot - The position snapshot.
 * @param currentDay - The current day number.
 * @param rewardsSource - The source of the rewards.
 * @returns A promise that resolves when the processing is complete.
 */
export async function processDailySnapshotInDb(
  snapshot: PositionSnapshot,
  currentDay: number,
  rewardsSource: AjnaRewardsSource = AjnaRewardsSource.core
): Promise<void> {
  const currentWeek = Math.floor(currentDay / 7);
  const weeklyClaimEntriesTx: PrismaPromise<AjnaRewardsWeeklyClaim>[] = [];
  console.info(chalk.gray(`Adding day #${currentDay} to the db`));

  // Map the snapshot array to daily claim entries
  const dailyClaimEntries = snapshot.map((entry) => ({
    user_address: entry.userAddress.toLowerCase(),
    account_address: entry.accountAddress.toLowerCase(),
    pool_address: entry.poolAddress.toLowerCase(),
    amount: entry.amount.toString(),
    day_number: currentDay,
    week_number: currentWeek,
    chain_id: config.chainId,
    source: rewardsSource,
    type: entry.positionType,
  }));
  console.info(
    chalk.gray(`Adding ${dailyClaimEntries.length} daily claim entries to the database. Chain ID: ${config.chainId}`)
  );
  // Execute the database transactions
  const res = await prisma.$transaction([
    ...weeklyClaimEntriesTx,
    prisma.ajnaRewardsDailyClaim.createMany({
      data: dailyClaimEntries,
      skipDuplicates: true,
    }),
  ]);

  console.info(
    // @ts-expect-error -- todo
    chalk.gray(`Added ${res[res.length - 1].count} daily claim entries to the database. Chain ID: ${config.chainId}`)
  );
}
