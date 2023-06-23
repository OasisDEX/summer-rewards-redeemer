import { ethers } from "ethers";
import { Addresses, Config, Network, RewardDistributions } from "./types";
import chalk from "chalk";

export const addresses: Addresses = {
  goerli: {
    ajnaToken: "0xaadebCF61AA7Da0573b524DE57c67aDa797D46c5",
    ajnaRedeemer: "0x107F1AA82558ac18671733dc32d15D999fc6b70c",
    ajnaDripper: "0x6e4c6e76b3C1D834c0e3c4c2bAec8d58B8421A99",
    admin: "0x0B5a3C04D1199283938fbe887A2C82C808aa89Fb",
    operator: "0xdF8234900a194D787AdF4E448502CbeD56557FbA",
  },
  mainnet: {
    ajnaToken: "0x9a96ec9b57fb64fbc60b423d1f4da7691bd35079",
    ajnaRedeemer: "0x0000000000000000000000000000000000000000",
    ajnaDripper: "0x0000000000000000000000000000000000000000",
    admin: "0x85f9b7408afE6CEb5E46223451f5d4b832B522dc",
    operator: "0xdF8234900a194D787AdF4E448502CbeD56557FbA",
  },
};

export const config: Config = {
  earnRewardsRatio: 0.6,
  borrowRewardsRatio: 0.4,
  rewardStartWeek: 2782,
  multiplier: 10000,
  dryRun: true,
  network: (process.env.FORKED_NETWORK || Network.Goerli) as Network,
  merkleTreeOptions: {
    sortLeaves: false,
    sortPairs: true,
  },
};

export const rewardDistributions: RewardDistributions = {
  [Network.Mainnet]: [
    { name: "RETH-DAI", address: "0x0000000000000000000000000000000000000000", share: 0.1 },
    { name: "WBTC-DAI", address: "0x0000000000000000000000000000000000000000", share: 0.1 },
    { name: "WSTETH-DAI", address: "0x0000000000000000000000000000000000000000", share: 0.1 },
    { name: "ETH-USDC", address: "0x0000000000000000000000000000000000000000", share: 0.08 },
    { name: "WBTC-USDC", address: "0x0000000000000000000000000000000000000000", share: 0.08 },
    { name: "WSTETH-USDC", address: "0x0000000000000000000000000000000000000000", share: 0.08 },
    { name: "USDC-ETH", address: "0x0000000000000000000000000000000000000000", share: 0.05 },
    { name: "USDC-WBTC", address: "0x0000000000000000000000000000000000000000", share: 0.05 },
    { name: "CBETH-ETH", address: "0x0000000000000000000000000000000000000000", share: 0.12 },
    { name: "WSTETH-ETH", address: "0x0000000000000000000000000000000000000000", share: 0.12 },
    { name: "RETH-ETH", address: "0x0000000000000000000000000000000000000000", share: 0.12 },
  ],
  [Network.Goerli]: [
    { name: "WBTC-USDC", address: "0xc2b64ca87090fe79786a8773009d7fb1288d3db1", share: 0.6 },
    { name: "WETH-USDC", address: "0x3ae0ea990cb38487d7a698c68b7b520a3d57c018", share: 0.4 },
  ],
};

export const getWeeklyReward = (weekNumber: number) => {
  weekNumber = weekNumber - config.rewardStartWeek;
  let reward = 0;
  if (weekNumber < 4) {
    reward = 1100000;
  } else if (weekNumber < 8) {
    reward = 1000000;
  } else if (weekNumber < 12) {
    reward = 900000;
  } else if (weekNumber < 16) {
    reward = 810000;
  } else if (weekNumber < 20) {
    reward = 729000;
  } else if (weekNumber < 26) {
    reward = 656100;
  } else if (weekNumber < 36) {
    reward = 600000;
  } else if (weekNumber < 40) {
    reward = 550000;
  } else {
    reward = 500000;
  }
  return ethers.utils.parseEther(reward.toString());
};

export const tokens = {
  [Network.Goerli]: {
    WETH: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
    RETH: "0x62bc478ffc429161115a6e4090f819ce5c50a5d9",
    WSTETH: "0x6320cD32aA674d2898A68ec82e869385Fc5f7E2f",
    WBTC: "0x7ccF0411c7932B99FC3704d68575250F032e3bB7",
    USDC: "0x6Fb5ef893d44F4f88026430d82d4ef269543cB23",
    DAI: "0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844",
    AJNA: "0xaadebCF61AA7Da0573b524DE57c67aDa797D46c5",
    CBETH: "0x62bc478ffc429161115a6e4090f819ce5c50a5d9",
  },
  // TODO: update mainnet addresses
  [Network.Mainnet]: {
    WETH: "0x0000000000000000000000000000000000000000",
    RETH: "0x0000000000000000000000000000000000000000",
    WSTETH: "0x0000000000000000000000000000000000000000",
    WBTC: "0x0000000000000000000000000000000000000000",
    USDC: "0x0000000000000000000000000000000000000000",
    DAI: "0x0000000000000000000000000000000000000000",
    AJNA: "0x9a96ec9b57fb64fbc60b423d1f4da7691bd35079",
    CBETH: "0x0000000000000000000000000000000000000000",
  },
};

function validateRewardDistributions(distributions: RewardDistributions): void {
  for (const network in distributions) {
    const rewards = distributions[network as Network];
    let totalShares = 0;
    for (const reward of rewards) {
      totalShares += reward.share;
    }
    if (totalShares !== 1) {
      throw new Error(chalk.red(`Invalid reward distribution for ${network}: shares do not add up to 1`));
    } else {
      console.log(chalk.blue(`Validated reward distribution for ${network}`));
    }
  }
}

validateRewardDistributions(rewardDistributions);
