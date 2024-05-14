import { calculateWeeklySnapshot } from "ajna-rewards-snapshot/get-snapshot";
import chalk from "chalk";
import { createMerkleTree } from "common";
import { config } from "common/config/config";
import { EthersError, UserSnapshot } from "common/types/types";
import { BASE_WEEKLY_AMOUNT } from "common/utils/data";
import { AjnaRewardsSource, Prisma, prisma } from "database";
import { BigNumber, ethers } from "ethers";
import * as fs from "fs";
import { AjnaDripper, AjnaRedeemer, AjnaToken } from "typechain-types";

import { getOrDeployContract, impersonate, setTokenBalance } from "./utils/hardhat.utils";

const dataDir = "../../snapshot/test/test-data";

// all rewards for a given week
async function main() {
  try {
    await prisma.ajnaRewardsMerkleTree.deleteMany({});
    await prisma.ajnaRewardsWeeklyClaim.deleteMany({});
  } catch (error) {
    console.log("No previous data to delete");
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
    const rewardDistributions = config.getRewardDistributions(weekIds[i], config.network);
    const result = calculateWeeklySnapshot(data[i], weekIds[i], rewardDistributions);
    const snapshot: UserSnapshot = result.weeklyCoreRewardsSnaphot.map((user) => ({
      userAddress: user.userAddress,
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
        data: {
          tree_root: root,
          week_number: Number(weekIds[i]),
          chain_id: config.chainId,
          source: AjnaRewardsSource.core,
        },
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
      const leaf = ethers.utils.solidityKeccak256(["address", "uint256"], [entry.userAddress, entry.amount]);
      const proof = tree.getHexProof(leaf);

      return {
        user_address: entry.userAddress,
        amount: entry.amount.toString(),
        week_number: weekIds[i],
        chain_id: config.chainId,
        proof,
        source: AjnaRewardsSource.core,
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
