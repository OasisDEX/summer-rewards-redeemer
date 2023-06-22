/*
  Warnings:

  - You are about to drop the `ajna_rewards_user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ajna_rewards_weekly_claim" DROP CONSTRAINT "ajna_rewards_weekly_claim_user_address_fkey";

-- DropTable
DROP TABLE "ajna_rewards_user";
