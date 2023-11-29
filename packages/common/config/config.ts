import "../bootstrap-env";

import chalk from "chalk";
import { BigNumber, ethers } from "ethers";

import { Addresses, Config, Distribution, DistributionWithNetwork, Network } from "../types/types";

const originalLog = console.info;
console.info = (message: any, ...optionalParams: any[]) => {
  config.loggingEnabled && originalLog(message, ...optionalParams);
};
export const addresses: Addresses = {
  goerli: {
    ajnaToken: "0xaadebCF61AA7Da0573b524DE57c67aDa797D46c5",
    ajnaRedeemer: "0x6f867970f24C95b0B47659aB617Fbc7cdf6fc935",
    ajnaDripper: "0x5646Af7Dd65B5B582E8B652Be6c0E9E7283dab7b",
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
  base: {
    ajnaToken: "0x0000000000000000000000000000000000000000",
    ajnaRedeemer: "0x0000000000000000000000000000000000000000",
    ajnaDripper: "0x0000000000000000000000000000000000000000",
    admin: "0x0000000000000000000000000000000000000000",
    operator: "0x0000000000000000000000000000000000000000",
  },
};

/**
 * The configuration object for the project.
 * @property {number} earnRewardsRatio - The ratio of rewards allocated to earning.
 * @property {number} borrowRewardsRatio - The ratio of rewards allocated to borrowing.
 * @property {number} rewardStartWeek - The week number when rewards start.
 * @property {number} multiplier - The multiplier used to calculate rewards rounding.
 * @property {boolean} dryRun - Whether to run the script in dry run mode.
 * @property {number} weeksCount - The number of weeks to do gas usage check for reddemer in `ajna-redeemer.test.ts`
 * @property {Network} network - The network to use.
 * @property {MerkleTreeOptions} merkleTreeOptions - The options for the Merkle tree.
 * @property {Object.<string, string>} addresses - The addresses for the contracts on the current network.
 * @property {Object.<string, RewardDistribution>} rewardDistributions - The reward distributions for the current network.
 */
export const config: Config = {
  environment: process.env.NODE_ENV || "production",
  get loggingEnabled() {
    return this.environment === "production";
  },
  earnRewardsRatio: 0.6,
  borrowRewardsRatio: 0.4,
  rewardStartWeek: 2793,
  multiplier: 100000000000,
  dryRun: true,
  weeksCount: 50,
  usedNetwork: process.env.NETWORK_USED,
  get network() {
    if (this.usedNetwork) {
      return this.usedNetwork as Network;
    } else {
      throw new Error("ajna-worker/config: No network found");
    }
  },
  merkleTreeOptions: {
    sortLeaves: false,
    sortPairs: true,
  },
  get addresses() {
    return addresses[this.network];
  },
  get chainId() {
    switch (this.network) {
      case Network.Mainnet:
        return 1;
      case Network.Goerli:
        return 5;
      case Network.Base:
        return 31337;
      default:
        throw new Error("ajna-worker/config: No chain id found");
    }
  },
  get subgraphUrl() {
    switch (this.network) {
      case Network.Mainnet:
        return getEnvVar("AJNA_GRAPHQL_ENDPOINT_MAINNET");
      case Network.Base:
        return getEnvVar("AJNA_GRAPHQL_ENDPOINT_BASE");
      case Network.Goerli:
        return getEnvVar("AJNA_GRAPHQL_ENDPOINT_GOERLI");
      default:
        throw new Error("ajna-worker/config: No graph url found");
    }
  },
  get rpcUrl() {
    switch (this.network) {
      case Network.Mainnet:
        return getEnvVar("ALCHEMY_MAINNET_RPC_URL");
      case Network.Goerli:
        return getEnvVar("ALCHEMY_GOERLI_RPC_URL");
      case Network.Base:
        return getEnvVar("ALCHEMY_BASE_RPC_URL");
      default:
        throw new Error("ajna-worker/config: No network found");
    }
  },
  get provider() {
    if (this.rpcUrl) {
      return (async () => {
        const provider = new ethers.providers.JsonRpcProvider(this.rpcUrl);
        await provider.ready;
        return provider;
      })();
    } else {
      throw new Error("ajna-worker/config: No rpc url found");
    }
  },
  get signer() {
    return (async () => {
      if (this.rpcUrl && process.env.PRIVATE_KEY) {
        return new ethers.Wallet(process.env.PRIVATE_KEY, await this.provider);
      } else {
        throw new Error("ajna-worker/config: No rpc url found");
      }
    })();
  },
  get debug() {
    return getEnvVar("DEBUG") === "true";
  },
  getRewardDistributions: (weekId: number, network: Network) => {
    const firstWeekDayId = weekId * 7;
    let rewardDistributions: Distribution[] = [];
    console.debug(chalk.yellow(`First day of week ${weekId} is ${firstWeekDayId}`));
    switch (network) {
      case Network.Mainnet:
        rewardDistributions = [
          { name: "RETH-DAI", address: "0x42d3f9C4dF0b98c3974Fd539A7EA9d0847F37Ef5", share: 0.1 },
          { name: "WBTC-DAI", address: "0xdB30a08Ebc49af1BaF87f57824f85056cEd33d5F", share: 0.07 },
          { name: "WSTETH-DAI", address: "0x8519bE08b8d83baEb11eBa52A7889967dCeD9Ae0", share: 0.07 },
          { name: "ETH-USDC", address: "0x1C50ce3550D1846134F3B7c09785e7005F6A1566", share: 0.07 },
          { name: "WBTC-USDC", address: "0x65374cD7db203e0c9EA8B7DA28A25dC770bEcB9e", share: 0.08 },
          { name: "WSTETH-USDC", address: "0xE0FFABEa66627a588EFB6C870677Baa23a53b948", share: 0.08 },
          { name: "USDC-ETH", address: "0x0Bc54b36d4Fa082eDe775Dd45f69FBbe360DDeb6", share: 0.04 },
          { name: "USDC-WBTC", address: "0x1a9Cea49DaEB8c36EA707A9171EbDF4097796dD4", share: 0.04 },
          { name: "WSTETH-ETH", address: "0x37d3a44C905663d7B77C9b574b941D4FbF713A91", share: 0.1, lendRatio: 0.95 },
          { name: "RETH-ETH", address: "0xa2fFdC7EFeF98469d11370d91c0A17DC83EC2BDA", share: 0.1, lendRatio: 0.95 },
          { name: "SDAI-USDC", address: "0xf4ab415e00ff0ed4f25d31d7e9140f3c75b69e7d", share: 0.1, lendRatio: 0.95 },
        ];
        break;
      case Network.Base:
        rewardDistributions = [
          { name: "CBETH-ETH", address: "0xad24FC773e125Edb223C38a39657cB64bc7C1787", share: 0.05, lendRatio: 0.95 },
          { name: "ETH-USDC", address: "0x1C50ce3550D1846134F3B7c09785e7005F6A1567", share: 0.06 },
          { name: "WSTETH-ETH", address: "0x37d3a44C905663d7B77C9b574b941D4FbF713A97", share: 0.04, lendRatio: 0.95 },
        ];
        break;
      case Network.Goerli:
        rewardDistributions = [
          { name: "WBTC-USDC", address: "0xE938A854f843E143936A7c4d2c43Cb5c15c65a48", share: 0.6 },
          { name: "WETH-USDC", address: "0xcDF3047503923b1E1fDF2190aaFe3254A7F1A632", share: 0.4 },
        ];

        break;
    }
    return rewardDistributions.map((distribution) => ({
      ...distribution,
      address: distribution.address.toLowerCase(),
    }));
  },
};

export const debug = (message: string, ...optionalParams: any[]) => {
  config.debug && console.debug(chalk.yellow(message), ...optionalParams);
};

/**
 * Retrieves the value of an environment variable.
 * @param name - The name of the environment variable.
 * @returns The value of the environment variable.
 * @throws Error if the environment variable is not found.
 */
const getEnvVar = (name: string) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`ajna-worker/config: No ${name} found`);
  }
  return value;
};

/**
 * Retrieves the reward distributions for the specified week and networks.
 * @dev all shares of provided pools must add up to 1.
 * @param weekId - The ID of the week.
 * @param networks - An array of network objects.
 * @returns An array of reward distributions with associated networks.
 */
export const getRewardsDistributionsForNetworks = (weekId: number, networks: Network[]) => {
  const rewardDistributions: DistributionWithNetwork[] = [];

  for (const network of networks) {
    const eligibleNetworkDistributions = config.getRewardDistributions(weekId, network as unknown as Network);
    const eligibleNetworkDistributionsWithNetworks = eligibleNetworkDistributions.map((distribution) => ({
      ...distribution,
      network,
    }));
    rewardDistributions.push(...eligibleNetworkDistributionsWithNetworks);
  }
  // sum of all distributions shares across networks should not be higher than 1
  validateRewardDistributions(rewardDistributions);
  return rewardDistributions;
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

export const getWeeklyRewardForNetwork = (weekNumber: number, rewardDistributions: Distribution[]) => {
  let totalShares = 0;
  for (const distribution of rewardDistributions) {
    totalShares += distribution.share;
  }
  totalShares = parseFloat(totalShares.toFixed(5));
  const reward = getWeeklyReward(weekNumber);
  return BigNumber.from(totalShares * 1000)
    .mul(reward)
    .div(1000);
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
  [Network.Mainnet]: {
    WETH: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    RETH: "0xae78736cd615f374d3085123a210448e74fc6393",
    WSTETH: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
    WBTC: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    USDC: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    DAI: "0x6b175474e89094c44da98b954eedeac495271d0f",
    AJNA: "0x9a96ec9b57fb64fbc60b423d1f4da7691bd35079",
    CBETH: "0xbe9895146f7af43049ca1c1ae358b0541ea49704",
  },
  // TODO: update base addresses
  [Network.Base]: {
    WETH: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    RETH: "0xae78736cd615f374d3085123a210448e74fc6393",
    WSTETH: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
    WBTC: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    USDC: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    DAI: "0x6b175474e89094c44da98b954eedeac495271d0f",
    AJNA: "0x9a96ec9b57fb64fbc60b423d1f4da7691bd35079",
    CBETH: "0xbe9895146f7af43049ca1c1ae358b0541ea49704",
  },
};

/**
 * Validates the reward distributions for each network.
 * @param distributions The reward distributions to validate.
 * @throws An error if the total shares for a network do not add up to 1.
 * @dev rounds the result to 5 decimal places
 */
export function validateRewardDistributions(distributions: Distribution[]): void {
  let totalShares = 0;
  for (const distribution of distributions) {
    totalShares += distribution.share;
  }
  totalShares = parseFloat(totalShares.toFixed(5));
  if (totalShares !== 1) {
    throw new Error(chalk.red(`Invalid reward distribution: shares do not add up to 1. Shares: ${totalShares}`));
  } else {
    console.info(chalk.blue(`Validated reward distribution.`));
    debug(`Total shares: ${totalShares}`);
  }
}
