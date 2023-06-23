/*
  Warnings:

  - You are about to drop the column `end_block` on the `ajna_rewards_merkle_tree` table. All the data in the column will be lost.
  - You are about to drop the column `snapshot` on the `ajna_rewards_merkle_tree` table. All the data in the column will be lost.
  - You are about to drop the column `start_block` on the `ajna_rewards_merkle_tree` table. All the data in the column will be lost.
  - Made the column `timestamp` on table `ajna_rewards_merkle_tree` required. This step will fail if there are existing NULL values in that column.
  - Made the column `timestamp` on table `ajna_rewards_weekly_claim` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ajna_rewards_merkle_tree" DROP COLUMN "end_block",
DROP COLUMN "snapshot",
DROP COLUMN "start_block",
ALTER COLUMN "timestamp" SET NOT NULL;

-- AlterTable
ALTER TABLE "ajna_rewards_weekly_claim" ALTER COLUMN "timestamp" SET NOT NULL;
