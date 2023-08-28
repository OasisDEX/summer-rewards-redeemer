import chalk from "chalk";
import { BigNumber, ethers } from "ethers";
import * as fs from "fs";

import { AjnaDripper, AjnaRedeemer, AjnaToken } from "../../../typechain-types";
import { config } from "common/config/config";
import { getOrDeployContract, impersonate, setTokenBalance } from "./utils/hardhat.utils";
import { createMerkleTree } from "common";
import { BASE_WEEKLY_AMOUNT } from "common/utils/data";
import { EthersError, Snapshot } from "common/types/types";
import { prisma, Prisma } from "database";
import { calculateWeeklySnapshot } from "ajna-rewards-snapshot/get-snapshot";

const dataDir = "../../snapshot/test/test-data";

// all rewards for a given week
async function main() {
  try {
    await prisma.ajnaRewardsMerkleTree.deleteMany({});
    await prisma.ajnaRewardsWeeklyClaim.deleteMany({});
  } catch (error) {
    console.info("No previous data to delete");
  }

  const files = fs.readdirSync(dataDir).filter((file: any) => /^weekly-data-\d+.json$/.test(file));
  const weekIds = files.map((file: any) => parseInt(file.match(/\d+/)[0]));
  const data = files.map((file: any) => JSON.parse(fs.readFileSync(`${dataDir}/${file}`, "utf8")));
  const ajnaToken = await getOrDeployContract<AjnaToken>("AjnaToken", []);
  const ajnaDripper = await getOrDeployContract<AjnaDripper>("AjnaDripper", [
    config.addresses.ajnaToken,
    config.addresses.admin,
  ]);
  const ajnaRedeemer = await getOrDeployContract<AjnaRedeemer>("AjnaRedeemer", [
    config.addresses.ajnaToken,
    config.addresses.operator,
    ajnaDripper.address,
  ]);

  const operator = await impersonate(config.addresses.operator);
  const admin = await impersonate(config.addresses.admin);

  await setTokenBalance(ajnaDripper.address, ajnaToken.address, BASE_WEEKLY_AMOUNT.mul(5));
  await (await ajnaDripper.connect(admin).setup(ajnaRedeemer.address, BASE_WEEKLY_AMOUNT)).wait();

  // add the weekly roots and weekly claims for all the users from the list
  for (let i = 0; i < files.length; i++) {
    console.log(chalk.dim(`Processing week ${weekIds[i]}`));
    const result = calculateWeeklySnapshot(data[i], weekIds[i]);
    const snapshot: Snapshot = result.map((user) => ({
      address: user.address,
      amount: BigNumber.from(user.amount),
    }));
    if (snapshot.length === 0) {
      console.log(chalk.dim(`No claims for week ${weekIds[i]}`));
      continue;
    }
    const { root, tree } = createMerkleTree(snapshot);
    try {
      await (await ajnaRedeemer.connect(operator).addRoot(Number(weekIds[i]), root)).wait();
    } catch (error: unknown) {
      const ethersError = error as EthersError;
      if (
        ethersError.reason ===
        "VM Exception while processing transaction: reverted with reason string 'drip/invalid-week'"
      ) {
        throw new Error(`Week ${weekIds[i]} earlier than deployment week`);
      }
    }

    try {
      console.log(chalk.gray(`Adding week #${weekIds[i]} to the db. Chain id: {${config.chainId}}}`));
      await prisma.ajnaRewardsMerkleTree.create({
        data: { tree_root: root, week_number: Number(weekIds[i]), chain_id: config.chainId },
      });
    } catch (error: unknown) {
      const prismaError = error as Prisma.PrismaClientKnownRequestError;
      if (prismaError?.code === "P2002") {
        console.error(`Root already added for week ${weekIds[i]}`);
      } else {
        throw error;
      }
    }

    const snapshotEntries: Prisma.AjnaRewardsWeeklyClaimCreateManyInput[] = snapshot.map((entry) => {
      const leaf = ethers.utils.solidityKeccak256(["address", "uint256"], [entry.address, entry.amount]);
      const proof = tree.getHexProof(leaf);

      return {
        user_address: entry.address,
        amount: entry.amount.toString(),
        week_number: weekIds[i],
        chain_id: config.chainId,
        proof,
      };
    });

    console.log(chalk.gray(`Adding ${snapshotEntries.length} snapshot entries to the db`));
    await prisma.ajnaRewardsWeeklyClaim.createMany({
      data: snapshotEntries,
      skipDuplicates: true,
    });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
