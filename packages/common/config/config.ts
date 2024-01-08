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
    ajnaToken: "0x601a8F7EA34168D912fB3C214a377CB544F18c0d",
    ajnaRedeemer: "0xE15b6d0e371F393FcDeba19F84aaE70e7807fB6A",
    ajnaDripper: "0x6eF7900b174D705D69DD33CE574Decfc7f12C88a",
    rewardsRedeemerFactory: "0xD4554D1c818a99D23f29aA6dabB02FE810972b12",
    bonusRedeemer: "0xaCA90b26A1Fe9e47Dab18Fec6d05205a32dCA1eD",
    admin: "0xAb1a4Ae0F851700CC42442c588f458B553cB2620",
    operator: "0xdF8234900a194D787AdF4E448502CbeD56557FbA",
  },
  mainnet: {
    ajnaToken: "0x9a96ec9b57fb64fbc60b423d1f4da7691bd35079",
    ajnaRedeemer: "0xf309EE5603bF05E5614dB930E4EAB661662aCeE6",
    ajnaDripper: "0x198c29380124D017D6b204152c2e3C266885EEa0",
    rewardsRedeemerFactory: "0x35Ae11606ff6DF0b4EDD0Dd32d7F72b22206F398",
    bonusRedeemer: "0xEB233d4D1D756469A2C7f0b42034D0507d744542",
    admin: "0x85f9b7408afE6CEb5E46223451f5d4b832B522dc",
    operator: "0xdF8234900a194D787AdF4E448502CbeD56557FbA",
  },
  base: {
    ajnaToken: "0x0000000000000000000000000000000000000000",
    ajnaRedeemer: "0x0000000000000000000000000000000000000000",
    ajnaDripper: "0x0000000000000000000000000000000000000000",
    rewardsRedeemerFactory: "0x0000000000000000000000000000000000000000",
    bonusRedeemer: "0x0000000000000000000000000000000000000000",
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
  rewardStartWeek: 2819,
  multiplier: 100000000000,
  dryRun: true,
  weeksCount: 50,
  currentlyConfiguredNetwork: process.env.NETWORK_USED,
  get network() {
    if (this.currentlyConfiguredNetwork) {
      return this.currentlyConfiguredNetwork as Network;
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
          { name: "RETH-DAI", address: "0x9cdB48FcBd8241Bb75887AF04d3b1302c410F671", share: 0.1 },
          { name: "WBTC-DAI", address: "0x50f1C63f3AEfD60C665eF45aA74f274dABf93405", share: 0.07 },
          { name: "WSTETH-DAI", address: "0xcD261cd365389A58e6467bb8a83A9E437864e8E5", share: 0.07 },
          { name: "ETH-USDC", address: "0xE4BfB9b344A0Ae89702184281F13A295F3D49e15", share: 0.07 },
          { name: "WBTC-USDC", address: "0x3BB7C1E268A51b2D933C0490e282e20b906f8652", share: 0.08 },
          { name: "WSTETH-USDC", address: "0xF5B1AD7F82549c2BBf08AAa79c9eFC70C6E46b06", share: 0.08 },
          { name: "USDC-ETH", address: "0x2Ceb74Bb7a92D652C850C16F48547aa49F8bca31", share: 0.04 },
          { name: "USDC-WBTC", address: "0xE92Cd0ACF334D1133551bC4c87eA73BbC49Ce711", share: 0.04 },
          { name: "WSTETH-ETH", address: "0x3BA6A019eD5541b5F5555d8593080042Cf3ae5f4", share: 0.1, lendRatio: 0.95 },
          { name: "RETH-ETH", address: "0xE300B3A6b24cB3c5c87034155F7ffF7F77C862a0", share: 0.1, lendRatio: 0.95 },
          { name: "SDAI-USDC", address: "0x90Ac6604aE71B5D978f3fC6074078987249119Ea", share: 0.1, lendRatio: 0.95 },
        ];
        break;
      case Network.Base:
        rewardDistributions = [
          { name: "CBETH-ETH", address: "0xc7c05420F3d9e5bd0d8268F487EE6990d0Ab1E0E", share: 0.05, lendRatio: 0.95 },
          { name: "ETH-USDC", address: "0x38C5721979C057C99393076cB85F089263FAD51f", share: 0.06 },
          { name: "WSTETH-ETH", address: "0xa0277F33C9f5286b0d804cf872D4b1C56F29Ab01", share: 0.04, lendRatio: 0.95 },
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
 * Validates the reward distributions for each network - checks if sum of all shares is equal 1.
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
