-- CreateTable
CREATE TABLE "ajna_rewards_daily_claim" (
    "id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "day_number" INTEGER NOT NULL,
    "user_address" TEXT NOT NULL,
    "amount" TEXT NOT NULL,

    CONSTRAINT "ajna_rewards_daily_claim_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ajna_rewards_daily_claim_day_number_user_address_key" ON "ajna_rewards_daily_claim"("day_number", "user_address");
