/* eslint-disable no-process-exit */
import { calculateWeeklySnapshot } from "ajna-rewards-snapshot/get-snapshot";
import chalk from "chalk";
import { createMerkleTree } from "common";
import { config } from "common/config/config";
import { EthersError, Network, UserSnapshot } from "common/types/types";
import { BASE_WEEKLY_AMOUNT } from "common/utils/data";
import { AjnaRewardsSource, Prisma, prisma } from "database";
import { BigNumber, ethers } from "ethers";
import * as fs from "fs";
import hre, { network } from "hardhat";
import { AjnaDripper, AjnaRedeemer, AjnaToken, RewardsRedeemer } from "typechain-types";

import { getContract, getOrDeployContract, impersonate } from "./utils/hardhat.utils";

const dataDir = "../snapshot/test-data/weekly";

// all rewards for a given week
async function main() {
  try {
    await prisma.ajnaRewardsMerkleTree.deleteMany({});
    await prisma.ajnaRewardsWeeklyClaim.deleteMany({});
  } catch (error) {
    console.log("No previous data to delete");
  }
  network.name === "hardhat"
    ? (config.currentlyConfiguredNetwork = Network.Goerli)
    : (config.currentlyConfiguredNetwork = network.name);
  const files = fs.readdirSync(dataDir).filter((file: any) => /^weekly-data-\d+.json$/.test(file));
  const weekIds = [2814, 2815];
  const data = files.map((file: any) => JSON.parse(fs.readFileSync(`${dataDir}/${file}`, "utf8")));

  const ajnaDripper = await getOrDeployContract<AjnaDripper>("AjnaDripper", [
    config.addresses.ajnaToken,
    config.addresses.admin,
  ]);
  const ajnaRedeemer = await getOrDeployContract<AjnaRedeemer>("AjnaRedeemer", [
    config.addresses.ajnaToken,
    config.addresses.operator,
    ajnaDripper.address,
  ]);

  const bonusRedeemer = await getContract<RewardsRedeemer>("RewardsRedeemer", config.addresses.bonusRedeemer);
  const [adminPK, operatorPK] = await hre.ethers.getSigners();
  const operator = network.name === "hardhat" ? await impersonate(config.addresses.operator) : operatorPK;
  const admin = network.name === "hardhat" ? await impersonate(config.addresses.admin) : adminPK;

  await (await ajnaDripper.connect(admin).setup(ajnaRedeemer.address, BASE_WEEKLY_AMOUNT)).wait();

  const currentWeek = await ajnaRedeemer.getCurrentWeek();
  console.log(chalk.dim(`Current week: ${currentWeek.toString()}`));
  const deploymentWeek = await ajnaDripper.dripperDeploymentWeek();
  console.log(chalk.dim(`Deployment week: ${deploymentWeek.toString()}`));
  // add the weekly roots and weekly claims for all the users from the list
  for (let i = 0; i < files.length; i++) {
    console.log(chalk.dim(`Processing week ${weekIds[i]}`));
    const rewardDistributions = [
      {
        name: "RETH-DAI",
        address: "0x42d3f9C4dF0b98c3974Fd539A7EA9d0847F37Ef5",
        share: 0.09,
        network: Network.Mainnet,
      },
      {
        name: "WBTC-DAI",
        address: "0xdB30a08Ebc49af1BaF87f57824f85056cEd33d5F",
        share: 0.07,
        network: Network.Mainnet,
      },
      {
        name: "WSTETH-DAI",
        address: "0x8519bE08b8d83baEb11eBa52A7889967dCeD9Ae0",
        share: 0.07,
        network: Network.Mainnet,
      },
      {
        name: "ETH-USDC",
        address: "0x1C50ce3550D1846134F3B7c09785e7005F6A1566",
        share: 0.065,
        network: Network.Mainnet,
      },
      {
        name: "WBTC-USDC",
        address: "0x65374cD7db203e0c9EA8B7DA28A25dC770bEcB9e",
        share: 0.09,
        network: Network.Mainnet,
      },
      {
        name: "WSTETH-USDC",
        address: "0xE0FFABEa66627a588EFB6C870677Baa23a53b948",
        share: 0.09,
        network: Network.Mainnet,
      },
      {
        name: "USDC-ETH",
        address: "0x0Bc54b36d4Fa082eDe775Dd45f69FBbe360DDeb6",
        share: 0.05,
        network: Network.Mainnet,
      },
      {
        name: "USDC-WBTC",
        address: "0x1a9Cea49DaEB8c36EA707A9171EbDF4097796dD4",
        share: 0.05,
        network: Network.Mainnet,
      },
      {
        name: "CBETH-ETH",
        address: "0xad24FC773e125Edb223C38a39657cB64bc7C178e",
        share: 0.1,
        lendRatio: 0.95,
        network: Network.Mainnet,
      },
      {
        name: "WSTETH-ETH",
        address: "0x37d3a44C905663d7B77C9b574b941D4FbF713A91",
        share: 0.1,
        lendRatio: 0.95,
        network: Network.Mainnet,
      },
      {
        name: "RETH-ETH",
        address: "0xa2fFdC7EFeF98469d11370d91c0A17DC83EC2BDA",
        share: 0.1,
        lendRatio: 0.95,
        network: Network.Mainnet,
      },
      {
        name: "YFI-DAI",
        address: "0x5b14144da6fd5e3b158d6df7b6ed8345829aab78",
        share: 0.025,
        network: Network.Mainnet,
      },
      {
        name: "SDAI-USDC",
        address: "0xf4ab415e00ff0ed4f25d31d7e9140f3c75b69e7d",
        share: 0.1,
        lendRatio: 0.95,
        network: Network.Mainnet,
      },
    ].map((x) => ({ ...x, address: x.address.toLowerCase() }));
    const result = calculateWeeklySnapshot(data[i], weekIds[i], rewardDistributions);
    const total = result.weeklyCoreRewardsSnaphot.reduce((acc, curr) => acc.add(curr.amount), BigNumber.from(0));
    console.log(chalk.dim(`Total rewards: ${total.toString()}`));
    const snapshot: UserSnapshot = result.weeklyCoreRewardsSnaphot.map((user) => ({
      userAddress: user.userAddress.toLowerCase(),
      amount: BigNumber.from(user.amount),
    }));
    const bonusSnapshot: UserSnapshot = result.weeklyBonusRewardsSnaphot.map((user) => ({
      userAddress: user.userAddress.toLowerCase(),
      amount: BigNumber.from(user.amount),
    }));
    if (snapshot.length === 0) {
      console.log(chalk.dim(`No claims for week ${weekIds[i]}`));
      continue;
    }
    const { root, tree } = createMerkleTree(snapshot);
    const { root: rootBonus, tree: treeBonus } = createMerkleTree(bonusSnapshot);

    try {
      console.log(chalk.dim(`Adding week ${weekIds[i]} to CORE the contract`));
      await (await ajnaRedeemer.connect(operator).addRoot(Number(weekIds[i]), root)).wait();
      console.log(chalk.dim(`Adding week ${weekIds[i]} to BONUS the contract`));
      await (await bonusRedeemer.connect(admin).addRoot(Number(weekIds[i]), rootBonus)).wait();
    } catch (error: unknown) {
      console.log(error);
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
      await prisma.ajnaRewardsMerkleTree.create({
        data: {
          tree_root: rootBonus,
          week_number: Number(weekIds[i]),
          chain_id: config.chainId,
          source: AjnaRewardsSource.bonus,
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

    const bonusSnapshotEntries: Prisma.AjnaRewardsWeeklyClaimCreateManyInput[] = bonusSnapshot.map((entry) => {
      const leaf = ethers.utils.solidityKeccak256(["address", "uint256"], [entry.userAddress, entry.amount]);
      const proof = treeBonus.getHexProof(leaf);

      return {
        user_address: entry.userAddress,
        amount: entry.amount.toString(),
        week_number: weekIds[i],
        chain_id: config.chainId,
        proof,
        source: AjnaRewardsSource.bonus,
      };
    });
    console.log(chalk.gray(`Adding ${snapshotEntries.length} CORE snapshot entries to the db`));
    console.log(chalk.gray(`Adding ${bonusSnapshotEntries.length} BONUS snapshot entries to the db`));

    await prisma.ajnaRewardsWeeklyClaim.createMany({
      data: snapshotEntries.concat(bonusSnapshotEntries),
      skipDuplicates: true,
    });
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
