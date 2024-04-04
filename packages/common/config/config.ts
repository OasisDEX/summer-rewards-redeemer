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
  bonusRewardsDuration: 6,
  get bonusRewardsEndWeek() {
    return this.rewardStartWeek + this.bonusRewardsDuration;
  },
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
        return 8453;
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
    // TODO: move to separate file
    if (weekId >= config.rewardStartWeek + 12) {
      switch (network) {
        case Network.Mainnet:
          rewardDistributions = [
            { name: "RETH-DAI", address: "0x9cdB48FcBd8241Bb75887AF04d3b1302c410F671", share: 0.07 },
            { name: "WBTC-DAI", address: "0x50f1C63f3AEfD60C665eF45aA74f274dABf93405", share: 0.07 },
            { name: "WSTETH-DAI", address: "0xcD261cd365389A58e6467bb8a83A9E437864e8E5", share: 0.07 },
            { name: "ETH-USDC", address: "0xE4BfB9b344A0Ae89702184281F13A295F3D49e15", share: 0.025 },
            { name: "WBTC-USDC", address: "0x3BB7C1E268A51b2D933C0490e282e20b906f8652", share: 0.08 },
            { name: "WSTETH-USDC", address: "0xF5B1AD7F82549c2BBf08AAa79c9eFC70C6E46b06", share: 0.04 },
            { name: "USDC-ETH", address: "0x2Ceb74Bb7a92D652C850C16F48547aa49F8bca31", share: 0.02 },
            { name: "USDC-WBTC", address: "0xE92Cd0ACF334D1133551bC4c87eA73BbC49Ce711", share: 0.02 },
            { name: "WSTETH-ETH", address: "0x3BA6A019eD5541b5F5555d8593080042Cf3ae5f4", share: 0.08, lendRatio: 0.95 },
            { name: "RETH-ETH", address: "0xE300B3A6b24cB3c5c87034155F7ffF7F77C862a0", share: 0.05, lendRatio: 0.95 },
            { name: "SDAI-USDC", address: "0x90Ac6604aE71B5D978f3fC6074078987249119Ea", share: 0.06, lendRatio: 0.95 },
            { name: "YFI-DAI", address: "0x66ea46c6e7f9e5bb065bd3b1090fff229393ba51", share: 0.02 },
            { name: "st-yETH-DAI", address: "0x304375e4890146dc575b894b35a42608fab823a8", share: 0.02 },
            { name: "Ajna-DAI", address: "0x2feef99a711d684e00a017c4ac587bea31f12875", share: 0.03 },
            { name: "MKR-DAI", address: "0x0598c1FeDa47535FF5248E2Bd08703ACE4E740C4", share: 0.03 },
            { name: "SUSDE-DAI", address: "0x0598c1FeDa47535FF5248E2Bd08703ACE4E740C4", share: 0.035 },
            { name: "mwstETH-WPUNKS:20/wstETH", address: "0x1b3ca2a7b12859fe34cefd7072d770fb6a1e7679", share: 0.02 },
            { name: "mwstETH-WPUNKS:40/wstETH", address: "0x7a2f9d2610ab99952dfb44f8aa3707584baacb8d", share: 0.02 },
            { name: "ENA-sDAI", address: "0x4176747Bc01BE99f9e8FE78A7b2303d4662a2244", share: 0.0075 },
            { name: "sDAI-ENA", address: "0x52054b0f7f07bb8e6daa06d177ece312ccc1f685", share: 0.0075 },
          ];
          break;
        case Network.Base:
          rewardDistributions = [
            { name: "CBETH-ETH", address: "0xCB1953EE28f89731C0ec088dA0720FC282fCFa9c", share: 0.04, lendRatio: 0.95 },
            { name: "ETH-USDC", address: "0x0B17159F2486f669a1F930926638008E2ccB4287", share: 0.04 },
            { name: "WSTETH-ETH", address: "0x63A366fc5976FF72999C89f69366F388b7D233e8", share: 0.02, lendRatio: 0.95 },
            { name: "DEGEN-USDC", address: "0x52e69a7cf5076a769e11fffc2e99e837b575f65e", share: 0.02 },
            { name: "DEGEN-cUSDCv3", address: "0x343F462B050975005c388AE3eA62e4C1FC418C64", share: 0.02 },
            { name: "USDC-DEGEN", address: "0x1dec31e6550c958af3e116f23472fe1493476496", share: 0.02 },
            { name: "SNX-USDC", address: "0xd784b2ee3cd12a93e7ed592e583f6929f2d4e0b2", share: 0.0325 },
            { name: "SNX-cUSDCv3", address: "0x7B1a82Ac53935884c22187B5fd219d310428D9b5", share: 0.0325 },
          ];
          break;
        case Network.Goerli:
          rewardDistributions = [
            { name: "WBTC-USDC", address: "0xE938A854f843E143936A7c4d2c43Cb5c15c65a48", share: 0.6 },
            { name: "WETH-USDC", address: "0xcDF3047503923b1E1fDF2190aaFe3254A7F1A632", share: 0.4 },
          ];
          break;
      }
    } else if (weekId >= config.rewardStartWeek + 8) {
      switch (network) {
        case Network.Mainnet:
          rewardDistributions = [
            { name: "RETH-DAI", address: "0x9cdB48FcBd8241Bb75887AF04d3b1302c410F671", share: 0.085 },
            { name: "WBTC-DAI", address: "0x50f1C63f3AEfD60C665eF45aA74f274dABf93405", share: 0.07 },
            { name: "WSTETH-DAI", address: "0xcD261cd365389A58e6467bb8a83A9E437864e8E5", share: 0.07 },
            { name: "ETH-USDC", address: "0xE4BfB9b344A0Ae89702184281F13A295F3D49e15", share: 0.05 },
            { name: "WBTC-USDC", address: "0x3BB7C1E268A51b2D933C0490e282e20b906f8652", share: 0.08 },
            { name: "WSTETH-USDC", address: "0xF5B1AD7F82549c2BBf08AAa79c9eFC70C6E46b06", share: 0.08 },
            { name: "USDC-ETH", address: "0x2Ceb74Bb7a92D652C850C16F48547aa49F8bca31", share: 0.04 },
            { name: "USDC-WBTC", address: "0xE92Cd0ACF334D1133551bC4c87eA73BbC49Ce711", share: 0.04 },
            { name: "WSTETH-ETH", address: "0x3BA6A019eD5541b5F5555d8593080042Cf3ae5f4", share: 0.08, lendRatio: 0.95 },
            { name: "RETH-ETH", address: "0xE300B3A6b24cB3c5c87034155F7ffF7F77C862a0", share: 0.09, lendRatio: 0.95 },
            { name: "SDAI-USDC", address: "0x90Ac6604aE71B5D978f3fC6074078987249119Ea", share: 0.06, lendRatio: 0.95 },
            { name: "YFI-DAI", address: "0x66ea46c6e7f9e5bb065bd3b1090fff229393ba51", share: 0.02 },
            { name: "st-yETH-DAI", address: "0x304375e4890146dc575b894b35a42608fab823a8", share: 0.02 },
            { name: "Ajna-DAI", address: "0x2feef99a711d684e00a017c4ac587bea31f12875", share: 0.02 },
            { name: "MKR-DAI", address: "0x0598c1FeDa47535FF5248E2Bd08703ACE4E740C4", share: 0.025 },
            { name: "SUSDE-DAI", address: "0x0598c1FeDa47535FF5248E2Bd08703ACE4E740C4", share: 0.03 },
            { name: "mwstETH-WPUNKS:20/wstETH", address: "0x1b3ca2a7b12859fe34cefd7072d770fb6a1e7679", share: 0.02 },
            { name: "mwstETH-WPUNKS:40/wstETH", address: "0x7a2f9d2610ab99952dfb44f8aa3707584baacb8d", share: 0.02 },
          ];
          break;
        case Network.Base:
          rewardDistributions = [
            { name: "CBETH-ETH", address: "0xCB1953EE28f89731C0ec088dA0720FC282fCFa9c", share: 0.04, lendRatio: 0.95 },
            { name: "ETH-USDC", address: "0x0B17159F2486f669a1F930926638008E2ccB4287", share: 0.04 },
            { name: "WSTETH-ETH", address: "0x63A366fc5976FF72999C89f69366F388b7D233e8", share: 0.02, lendRatio: 0.95 },
          ];
          break;
        case Network.Goerli:
          rewardDistributions = [
            { name: "WBTC-USDC", address: "0xE938A854f843E143936A7c4d2c43Cb5c15c65a48", share: 0.6 },
            { name: "WETH-USDC", address: "0xcDF3047503923b1E1fDF2190aaFe3254A7F1A632", share: 0.4 },
          ];

          break;
      }
    } else if (weekId >= config.rewardStartWeek + 6) {
      switch (network) {
        case Network.Mainnet:
          rewardDistributions = [
            { name: "RETH-DAI", address: "0x9cdB48FcBd8241Bb75887AF04d3b1302c410F671", share: 0.085 },
            { name: "WBTC-DAI", address: "0x50f1C63f3AEfD60C665eF45aA74f274dABf93405", share: 0.07 },
            { name: "WSTETH-DAI", address: "0xcD261cd365389A58e6467bb8a83A9E437864e8E5", share: 0.07 },
            { name: "ETH-USDC", address: "0xE4BfB9b344A0Ae89702184281F13A295F3D49e15", share: 0.05 },
            { name: "WBTC-USDC", address: "0x3BB7C1E268A51b2D933C0490e282e20b906f8652", share: 0.08 },
            { name: "WSTETH-USDC", address: "0xF5B1AD7F82549c2BBf08AAa79c9eFC70C6E46b06", share: 0.08 },
            { name: "USDC-ETH", address: "0x2Ceb74Bb7a92D652C850C16F48547aa49F8bca31", share: 0.04 },
            { name: "USDC-WBTC", address: "0xE92Cd0ACF334D1133551bC4c87eA73BbC49Ce711", share: 0.04 },
            { name: "WSTETH-ETH", address: "0x3BA6A019eD5541b5F5555d8593080042Cf3ae5f4", share: 0.1, lendRatio: 0.95 },
            { name: "RETH-ETH", address: "0xE300B3A6b24cB3c5c87034155F7ffF7F77C862a0", share: 0.09, lendRatio: 0.95 },
            { name: "SDAI-USDC", address: "0x90Ac6604aE71B5D978f3fC6074078987249119Ea", share: 0.06, lendRatio: 0.95 },
            { name: "YFI-DAI", address: "0x66ea46c6e7f9e5bb065bd3b1090fff229393ba51", share: 0.02 },
            { name: "st-yETH-DAI", address: "0x304375e4890146dc575b894b35a42608fab823a8", share: 0.02 },
            { name: "Ajna-DAI", address: "0x2feef99a711d684e00a017c4ac587bea31f12875", share: 0.02 },
            { name: "MKR-DAI", address: "0x0598c1FeDa47535FF5248E2Bd08703ACE4E740C4", share: 0.025 },
            { name: "SUSDE-DAI", address: "0x0598c1FeDa47535FF5248E2Bd08703ACE4E740C4", share: 0.05 },
          ];
          break;
        case Network.Base:
          rewardDistributions = [
            { name: "CBETH-ETH", address: "0xCB1953EE28f89731C0ec088dA0720FC282fCFa9c", share: 0.04, lendRatio: 0.95 },
            { name: "ETH-USDC", address: "0x0B17159F2486f669a1F930926638008E2ccB4287", share: 0.04 },
            { name: "WSTETH-ETH", address: "0x63A366fc5976FF72999C89f69366F388b7D233e8", share: 0.02, lendRatio: 0.95 },
          ];
          break;
        case Network.Goerli:
          rewardDistributions = [
            { name: "WBTC-USDC", address: "0xE938A854f843E143936A7c4d2c43Cb5c15c65a48", share: 0.6 },
            { name: "WETH-USDC", address: "0xcDF3047503923b1E1fDF2190aaFe3254A7F1A632", share: 0.4 },
          ];

          break;
      }
    } else if (weekId >= config.rewardStartWeek + 5) {
      switch (network) {
        case Network.Mainnet:
          rewardDistributions = [
            { name: "RETH-DAI", address: "0x9cdB48FcBd8241Bb75887AF04d3b1302c410F671", share: 0.085 },
            { name: "WBTC-DAI", address: "0x50f1C63f3AEfD60C665eF45aA74f274dABf93405", share: 0.07 },
            { name: "WSTETH-DAI", address: "0xcD261cd365389A58e6467bb8a83A9E437864e8E5", share: 0.07 },
            { name: "ETH-USDC", address: "0xE4BfB9b344A0Ae89702184281F13A295F3D49e15", share: 0.05 },
            { name: "WBTC-USDC", address: "0x3BB7C1E268A51b2D933C0490e282e20b906f8652", share: 0.08 },
            { name: "WSTETH-USDC", address: "0xF5B1AD7F82549c2BBf08AAa79c9eFC70C6E46b06", share: 0.08 },
            { name: "USDC-ETH", address: "0x2Ceb74Bb7a92D652C850C16F48547aa49F8bca31", share: 0.04 },
            { name: "USDC-WBTC", address: "0xE92Cd0ACF334D1133551bC4c87eA73BbC49Ce711", share: 0.04 },
            { name: "WSTETH-ETH", address: "0x3BA6A019eD5541b5F5555d8593080042Cf3ae5f4", share: 0.1, lendRatio: 0.95 },
            { name: "RETH-ETH", address: "0xE300B3A6b24cB3c5c87034155F7ffF7F77C862a0", share: 0.09, lendRatio: 0.95 },
            { name: "SDAI-USDC", address: "0x90Ac6604aE71B5D978f3fC6074078987249119Ea", share: 0.06, lendRatio: 0.95 },
            { name: "YFI-DAI", address: "0x66ea46c6e7f9e5bb065bd3b1090fff229393ba51", share: 0.03 },
            { name: "st-yETH-DAI", address: "0x304375e4890146dc575b894b35a42608fab823a8", share: 0.03 },
            { name: "Ajna-DAI", address: "0x2feef99a711d684e00a017c4ac587bea31f12875", share: 0.02 },
            { name: "MKR-DAI", address: "0x0598c1FeDa47535FF5248E2Bd08703ACE4E740C4", share: 0.025 },
          ];
          break;
        case Network.Base:
          rewardDistributions = [
            { name: "CBETH-ETH", address: "0xCB1953EE28f89731C0ec088dA0720FC282fCFa9c", share: 0.05, lendRatio: 0.95 },
            { name: "ETH-USDC", address: "0x0B17159F2486f669a1F930926638008E2ccB4287", share: 0.05 },
            { name: "WSTETH-ETH", address: "0x63A366fc5976FF72999C89f69366F388b7D233e8", share: 0.03, lendRatio: 0.95 },
          ];
          break;
        case Network.Goerli:
          rewardDistributions = [
            { name: "WBTC-USDC", address: "0xE938A854f843E143936A7c4d2c43Cb5c15c65a48", share: 0.6 },
            { name: "WETH-USDC", address: "0xcDF3047503923b1E1fDF2190aaFe3254A7F1A632", share: 0.4 },
          ];

          break;
      }
    } else if (weekId >= config.rewardStartWeek + 3) {
      switch (network) {
        case Network.Mainnet:
          rewardDistributions = [
            { name: "RETH-DAI", address: "0x9cdB48FcBd8241Bb75887AF04d3b1302c410F671", share: 0.1 },
            { name: "WBTC-DAI", address: "0x50f1C63f3AEfD60C665eF45aA74f274dABf93405", share: 0.07 },
            { name: "WSTETH-DAI", address: "0xcD261cd365389A58e6467bb8a83A9E437864e8E5", share: 0.07 },
            { name: "ETH-USDC", address: "0xE4BfB9b344A0Ae89702184281F13A295F3D49e15", share: 0.05 },
            { name: "WBTC-USDC", address: "0x3BB7C1E268A51b2D933C0490e282e20b906f8652", share: 0.08 },
            { name: "WSTETH-USDC", address: "0xF5B1AD7F82549c2BBf08AAa79c9eFC70C6E46b06", share: 0.08 },
            { name: "USDC-ETH", address: "0x2Ceb74Bb7a92D652C850C16F48547aa49F8bca31", share: 0.04 },
            { name: "USDC-WBTC", address: "0xE92Cd0ACF334D1133551bC4c87eA73BbC49Ce711", share: 0.04 },
            { name: "WSTETH-ETH", address: "0x3BA6A019eD5541b5F5555d8593080042Cf3ae5f4", share: 0.1, lendRatio: 0.95 },
            { name: "RETH-ETH", address: "0xE300B3A6b24cB3c5c87034155F7ffF7F77C862a0", share: 0.09, lendRatio: 0.95 },
            { name: "SDAI-USDC", address: "0x90Ac6604aE71B5D978f3fC6074078987249119Ea", share: 0.06, lendRatio: 0.95 },
            { name: "YFI-DAI", address: "0x66ea46c6e7f9e5bb065bd3b1090fff229393ba51", share: 0.03 },
            { name: "st-yETH-DAI", address: "0x304375e4890146dc575b894b35a42608fab823a8", share: 0.03 },
            { name: "Ajna-DAI", address: "0x2feef99a711d684e00a017c4ac587bea31f12875", share: 0.02 },
          ];
          break;
        case Network.Base:
          rewardDistributions = [
            { name: "CBETH-ETH", address: "0xCB1953EE28f89731C0ec088dA0720FC282fCFa9c", share: 0.05, lendRatio: 0.95 },
            { name: "ETH-USDC", address: "0x0B17159F2486f669a1F930926638008E2ccB4287", share: 0.06 },
            { name: "WSTETH-ETH", address: "0x63A366fc5976FF72999C89f69366F388b7D233e8", share: 0.03, lendRatio: 0.95 },
          ];
          break;
        case Network.Goerli:
          rewardDistributions = [
            { name: "WBTC-USDC", address: "0xE938A854f843E143936A7c4d2c43Cb5c15c65a48", share: 0.6 },
            { name: "WETH-USDC", address: "0xcDF3047503923b1E1fDF2190aaFe3254A7F1A632", share: 0.4 },
          ];

          break;
      }
    } else if (weekId >= config.rewardStartWeek + 1) {
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
            { name: "CBETH-ETH", address: "0xCB1953EE28f89731C0ec088dA0720FC282fCFa9c", share: 0.05, lendRatio: 0.95 },
            { name: "ETH-USDC", address: "0x0B17159F2486f669a1F930926638008E2ccB4287", share: 0.06 },
            { name: "WSTETH-ETH", address: "0x63A366fc5976FF72999C89f69366F388b7D233e8", share: 0.04, lendRatio: 0.95 },
          ];
          break;
        case Network.Goerli:
          rewardDistributions = [
            { name: "WBTC-USDC", address: "0xE938A854f843E143936A7c4d2c43Cb5c15c65a48", share: 0.6 },
            { name: "WETH-USDC", address: "0xcDF3047503923b1E1fDF2190aaFe3254A7F1A632", share: 0.4 },
          ];

          break;
      }
    } else {
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
    reward = 900000;
  } else if (weekNumber < 8) {
    reward = 810000;
  } else if (weekNumber < 12) {
    reward = 729000;
  } else if (weekNumber < 16) {
    reward = 656100;
  } else if (weekNumber < 20) {
    reward = 600000;
  } else if (weekNumber < 26) {
    reward = 550000;
  } else {
    reward = 500000;
  }
  console.log(`Reward for week ${weekNumber} is ${reward}`);
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

export const ajnaV1usersSnapshot = [
  "0x000009818d53763c701ba86586152c667ac3acdb",
  "0x000f4432a40560bbff1b581a8b7aded8dab80026",
  "0x0183d9be08db4024c2dc9aec10b9526fc6adeef7",
  "0x0215c140840b896e1e371525d1f70cefbd09aafa",
  "0x028d1a70f0cb34ba1a247847fbccb9210c1a2e85",
  "0x04d9ba17f399e2f2f67afd40b54b5b15a764f20d",
  "0x051d091b254ecdbbb4eb8e6311b7939829380b27",
  "0x056590f16d5b314a132bbcfb1283fec5d5c6e670",
  "0x0658b634aae5e7dbfa7510d6940ffd497df06727",
  "0x0662c2e685a01120d112b45c0f05829901b353ff",
  "0x0745a468966c6be811dda6d1953fce2798efc1f1",
  "0x07a1f6fc89223c5ebd4e4ddae89ac97629856a0f",
  "0x096ca3674329bb66dd7cc14d1511dfb7728b9193",
  "0x0cec743b8ce4ef8802cac0e5df18a180ed8402a7",
  "0x0d9f37c75f7df825a7f02bd39df333485853f4a9",
  "0x0dbc9a65c6fec050eeed9508a707ea4aa0aca4b9",
  "0x0f8c58edf65cbd972d175bfe481bc16fa8deee45",
  "0x10649c79428d718621821cf6299e91920284743f",
  "0x11d67fa925877813b744abc0917900c2b1d6eb81",
  "0x14bdfda5b5b829f14332a52c15129386284ce36a",
  "0x157595f04c0da495d72ceb84390f444d469c3216",
  "0x16a70be6068b3ab5684a1ce45e9ff44a4e6998e2",
  "0x16dfc087c5b78938c514278e4a720ec5020cb7f5",
  "0x17ad4e76e67e9937a2b2ef882e4042dd00cc60f7",
  "0x185a874374fefa9983944b149564f74e3bc5afb7",
  "0x19865bbf18281ad5197ac06e45966dfd3e72a47f",
  "0x1a47d2dbb73f31cf49c7b2323cbce914e4b4ddb0",
  "0x1a918a8386f75f382e2a1b2e10b807c39728caf2",
  "0x1c57a6ab0ce99604ff364f5a97ed06ba8692af46",
  "0x1dac73f3d00052d7e815b41e7b1b5cb241aa4d70",
  "0x1db91f586331d168e2da4c6bd73b689fb9f43516",
  "0x1e2c31732acff1f4ded0e35320e435e3049a7e03",
  "0x1ef678435e3a1581732171df82476995cc041568",
  "0x1f5f902be1f635b30425b690aa9fd5fa2b6fa79c",
  "0x2068d14ee50772dd6e89c6f64f32adad0cc936ef",
  "0x20a25b6b48691e2b5d0a9b32ae372cc1bd6e0a04",
  "0x20eadfcaf91bd98674ff8fc341d148e1731576a4",
  "0x214f14d1bae354174e940d53b60c59fa6ff5aaac",
  "0x221917435383d7a7a6464bf3f6dfd696b78c6355",
  "0x22b2ccb53963da600c83191db1ce3f61f92dcf45",
  "0x22e86ab483084053562ce713e94431c29d1adb8b",
  "0x239168974aad75472b652046255050e50a0d5fc9",
  "0x23b83c2821d1e9fe5c40ce3c014d2420f2f1eeb7",
  "0x2471ee5c959e89470827ce0e8269aa3031481d19",
  "0x25475d6f66e2417cc2c5b4b25d5087c896fa8a61",
  "0x25b9f3bf60c74a7041115cf6fac3dc3715b2a8ee",
  "0x25d9d6f36fb3773b98284624e2a58c0cb3c98cd4",
  "0x2757ae02f65db7ce8cf2b2261c58f07a0170e58e",
  "0x28af2a3c28b7ecf7d84a8ba0fddf7525a88e1f61",
  "0x296e0c21db4061ebf971e55d5db85011e7ff9797",
  "0x2aa0b00a92f8dd99c5aec74b5273190de8399ba1",
  "0x2abbf099b7d6d3b25912c5c78f6737456e8736d9",
  "0x2b65e70f0d0e3c19719abef9237e974a49fa1c82",
  "0x2e0051ab84ba8736f66460c7b9abde715af15be1",
  "0x2e3bd4e33281ec73b88233ab5f8b0e52a8d6f913",
  "0x2f19883a1f8212e8f3b7f72f2b37f8440df55d23",
  "0x30be05fe3ed386b8d8afb327b03f50c9d97dcb85",
  "0x318e3835baa3f83ca734d9afb9996f702aa06a3d",
  "0x32cd06a20b528bced096945d6d165a61e75ccd2a",
  "0x330e75e1f48b1ee968197cc870511665a4a5a832",
  "0x33a74ed005785a83295d3ebe7e9fee647c3b4246",
  "0x37e1881f05f33f71e43bb8f284e0ed53e26520d0",
  "0x396a6d7a33655c45044143cb8a812227bf279578",
  "0x3a6cd8730aebecb12d321968cc63e906fb8e0e77",
  "0x3a762044a55802b57f12ed39d83dd1047d77b8f2",
  "0x3a8315e25378ce9fc0d3279b26ec0576de52c0ff",
  "0x3ac7084e8ce0757261b79f87a8e417d2df3d24d3",
  "0x3b050ec88521765679b62af6de1e7e71e646b8e1",
  "0x3bc24298f64475112ead304b9e5b87b404fc7522",
  "0x3c8319dd83fa18ec1a0df2acf65277a731514d67",
  "0x3cb07d1f0620090bb667df1a5c90b4b80f8ede73",
  "0x3cf08d6a9436a1798c18d24a70f5ad0bea31775e",
  "0x3d0d2b7ce092bfdbb02e1ae1e904d16459613776",
  "0x3dac271d1b36a434880c527a678b6487ac9c1f8c",
  "0x3e4dd7e5c37fe838eaffc89a551e1c311b7d14f8",
  "0x3f3429d28438cc14133966820b8a9ea61cf1d4f0",
  "0x3f7e19951dfe627d839b17c2b515324fc5103af4",
  "0x3f9c50665dda1b64146fa0074ad4d87e75829e90",
  "0x42009b6fcdf29dd571383fc3560846c796367904",
  "0x42087c28f296d3b2dab56e3f5d1aca1388f2be5b",
  "0x429af9695a3936e2f22d05694775d12237f2723a",
  "0x42b2e881b164e4c283fb7b7e15b35cd256209133",
  "0x43930ff04d18a5b59805151c1eb403c55870641e",
  "0x445bab4342fafcfee8baaec5bd7d6030770d4011",
  "0x45709e747776f4ffcd23c3c9dad292089b3a904a",
  "0x45bf64fc90f65ee4ecc47c1b00b8f2fa797e7100",
  "0x4677b560974508e69f3611ccdef6c77af0509a47",
  "0x47547895218274e121e4219a3fd23235377a9903",
  "0x475681f0e12606cf8f97743c1d4558c06a287840",
  "0x47a127f496d001f187ac65fc24852274dc51d080",
  "0x486cd431523e776cf5cd074deecd7bdf29595f8c",
  "0x4873cf6f707064135b5522b80763239e73da103e",
  "0x48e756eae97c0123cc88c660987793b49e48afa3",
  "0x4938a9a48139ffc440a07695eec11096f8146350",
  "0x49543e53d159dd5c9d5e232556cfc2781a2d5044",
  "0x4a8df644eff45a5fe923cc4a2efec07614a1bfb7",
  "0x4adf9b737ab9c97f5728cbcf143483cf6c2f7df3",
  "0x4c60936479880f64db31ab85c09cbf2628b93e90",
  "0x4d940a53ff1f2515b577c5afc9cdfbbe588c4231",
  "0x4dc7970c0facd251e4398f706c45f3af877d029b",
  "0x4dcbb1fe5983ad5b44dc661273a4f11ca812f8b8",
  "0x4ea4309e5fcb06201ea54e0fb149de522138cdc7",
  "0x4f942119e6ab0a6e4368e795d1d64291a3ff0da4",
  "0x4fd0ff2c49671d4fe1927371cf833e8b3b7f44ea",
  "0x50422d5a52d9a4adaf8123ffd46a323056e4fb37",
  "0x50a708e5dfe836601931af3ff6169e5f4e5536ea",
  "0x51318c2f3e7d9735eae7e9c9838bb972742470e5",
  "0x519e19eac9ead404343c68224dd2a22c5c25f992",
  "0x521dea4e41d3582dffc931c4100d314d0a9f7ee4",
  "0x52d033e64774f31a8b7562806aa5782cbbd29382",
  "0x53dc3204f2f294f6a5649a36ac295f74a0db92e0",
  "0x53fe1b209c917eeeb996720fe5418572bc0e836c",
  "0x5426b97451fdd0a512d2b2e34f7bd57b88a93588",
  "0x54991866a907891c9b85478cc1fb0560b17d2b1d",
  "0x5513eaafbb5676cd8f0bb5359abd949ef2071f29",
  "0x551b807e76f4bd7be9b288e43e64f038d1d6d3b3",
  "0x56311eecf9141d6135fc5a60f7de7145da6b61e3",
  "0x56cfcaa14c2d63fef909e335733de4c6330306a7",
  "0x5881d9bfff787c8655a9b7f3484ae1a6f7a966e8",
  "0x58e03d622a88b4012ee0a97235c6b110077fb867",
  "0x59472f1d1073a553ea4f304649a56a838ccfa007",
  "0x59653fd9713a30c54237a6fd21fd97ba141abbe0",
  "0x5993bad196c8786baaedb5a5868f338fe6ce4cc2",
  "0x5a1b8d6a57445deced8f816310fdb0aa6367cf10",
  "0x5b191f5a2b4a867c4ed71858daccc51fc59c69c0",
  "0x5b77b967fc9e7fb9132f88e00b7b23c64a345881",
  "0x5baac7ccda079839c9524b90df81720834fc039f",
  "0x5c44368c0ad4c446842738bdbf8f2bbf9876546e",
  "0x5d12aa6a6001fb326332c3801c6bd12449b6e44e",
  "0x5d47e5d242a8f66a6286b0a2353868875f5d6068",
  "0x5de3887fad4da298a3d1f65490bead8b7c080bf1",
  "0x5e2b27b25ac8739e3b324b99980033621b3f6633",
  "0x5e4568c4d8343052a06ec8aab1e124af08b73248",
  "0x5f0a0e3b30d304fba56e2eee3a442b0bb5c40275",
  "0x5f55980eaf5131f9fd487e1177cacb18d7609a21",
  "0x5fcdc32dfc361a32e9d5ab9a384b890c62d0b8ac",
  "0x5ff25a228464be7516c4ed8644803292acefdad9",
  "0x6144a12e348829abb59ead0364cf7c2e540aa715",
  "0x6145456b003127b704a5af56845e7308f26bfbc4",
  "0x6175e7a985caeac2db12fada99e626ebd6fe7bcc",
  "0x63d4c9c890cd7184c70fb3bd90895b1ec834bb2f",
  "0x65e09ae53d5f1a7d75e4442eb9d004191dd253fb",
  "0x66a4f5d0b57d86bf1b9bfc63e991a9387791fdcd",
  "0x68512d66e6386369686f58a912c86b390b9299d0",
  "0x6a61b6086695d9dd9663e786b8b66aa641c9a432",
  "0x6b32080f61ce43bfdc37b6629706dae405d22389",
  "0x6b579bacffea19b002271d448a62b161f754401a",
  "0x6b6ca461435ff2c9d21bcbee58e8b6061ae0f851",
  "0x6bdc44c885b166aeb687f2d247e419f5a19e1804",
  "0x6e792e02f3b2ad9ddfebdd0fe1c2e90f4f46fbbf",
  "0x6ed88188da646b6fe64022895de4045c35eba48e",
  "0x701a85bc65b8adbf90a7860195750696c1c40b38",
  "0x7076106c13ca93805f2b16c52e64d3592d55457b",
  "0x7092020d4c6c26f6e06ee1e8cb5b34f9d14341c7",
  "0x70e439584ef1ba300106b9c16543eaa1de676dc2",
  "0x7139a445ecc1a597695cc9a077caaa41e0f18391",
  "0x725427aaea450747aa33740e44f7ff6b8c7c693b",
  "0x73d31581106e3f6b9dd2579e8d9fec81eba22296",
  "0x746164eef43f58f11f6e86f6e4b08f3d3d4d2721",
  "0x75528bf6ed683b0ea4823a26d60c4711d6e2f3ec",
  "0x7566d348038d881475b5fe0638c00b391f9b33e6",
  "0x771991fc8ce57682775ee73bb28b201f4016b090",
  "0x78969a898a974855a6fa8fc30f03644f41b3b883",
  "0x789c925a6745eda40694788ca33393bff1d67893",
  "0x7a1057e6e9093da9c1d4c1d049609b6889fc4c67",
  "0x7ab29b393aad63e7119c004bb45eefeaa3e70da5",
  "0x7add072d0a4fdaebf962f63a74e0a92424b7319d",
  "0x7b26ae9174075feba760b39ef44ca5a18ee2ce1b",
  "0x7bfee91193d9df2ac0bfe90191d40f23c773c060",
  "0x7c0b689a3003e0dbd2d37ce15e8a2273d91bd7f6",
  "0x7d5bec15de5378e31040b9fded942c3f18066586",
  "0x7e8883a05c2e82db78ed1240bfa4764cf7327169",
  "0x7eb12f04effc4901d7520e4ebd62de512743feca",
  "0x7f00dd791feeb1ce749baec334873f5a78a9c6c8",
  "0x7f8c24d538c695262afc1408ad4217967da1623a",
  "0x83910f3e3e0064c15ff2fe043dd042855861d05d",
  "0x83d89ef3ec1b78f5c84ff70b184eff7fd88abd27",
  "0x84674aa65cc7734f12b690ce46aec1027b434211",
  "0x8522885d735f75b3faeea5cd39ab3d1291da2c77",
  "0x859e1dfb430a7156faef11947f2fc2a3c34b733a",
  "0x87474eb5e6f15c5b770c7a68b37342830211ea9c",
  "0x88a72a5b05cc9150a5e96d01d2eb794b98bdbfb9",
  "0x88ce30f11723e38ffafa91a22462e57222433467",
  "0x890d3b7e8cd72ddfe6288187bb6b87118c296a75",
  "0x8be1ddf9f7ac91695a74d85537543b40e2a8a6e6",
  "0x8c580556fdb1f57853e49f409ae9b89f7658e7a2",
  "0x8f767dbe1af8fc0eb2655260f2a4768a3ad49bdc",
  "0x8f8eb9da0c845fcf83eb1a4b8b727116b96b87ed",
  "0x8fee1be01aa46f5c6d7e8ef2d36b8d255dfa224c",
  "0x915188a790dcdd06447244196694c9f8a7d2b4c0",
  "0x92ec6e838dd90845d7d34dfaa82d6d00f66c8168",
  "0x9325564ade7683706107685cf1993678b1163261",
  "0x94e949011bc5c01a463b780fe2048179efef03cf",
  "0x9578e8369369fa05e5f2fc8d80a234ad2f8608a8",
  "0x9599d89ed83e6db03d57c004f858ff82228604e4",
  "0x9730299b10a30bdbaf81815c99b4657c685314ab",
  "0x97836f9fc0fa0bd02fa5ddcc0194c78dc5217226",
  "0x97d157a8dc39e9e17ae498b308bc69b4bb790125",
  "0x98289029b0d4bb73ead9eb1a3300ed724fcf6779",
  "0x992ef7ff7d9c93b9e6ca4f95db936a389b677422",
  "0x997f804033e56522ce2498bcfd2662d9c2b6bb3f",
  "0x9981a638c71f3f048336334946da9b51cf9f0971",
  "0x9a77d8d3083cbd8e219cd23df4097d2d073a2739",
  "0x9ba71e4e27a21bc8d10fd663a9bfb5e9139c9c0c",
  "0x9cdbddf646a86ec987394c807defed498dbc7df4",
  "0x9e406b2c2021966f3983e899643609c45e3bbffe",
  "0xa0ce55801b0b88f2df2ef026eb8da79e9f0ad9c1",
  "0xa16d0eff0f979ef7569ae58bc8ae6c3644566679",
  "0xa3b22c33e7b7d8061418d0cd96613ad5740fda66",
  "0xa4d4448f2328889d79015975a7b4de27649e1ff6",
  "0xa4fd65694a9708c2d204bdf7acf8b9c09b105903",
  "0xa62d7ad2fddbad38a0aba25e40cdfe2edfa4d183",
  "0xa72bc75fccdfc553d3fa88a8a29bc85acb2faebb",
  "0xa824dc3ae402dfd6a5de71c6fc30ff9e00411209",
  "0xa8c602638e910a5eee8bcf190acf3e2d4c022338",
  "0xa968a0920bd35ad65f3bd78a934e45f020d6a1e3",
  "0xab12253171a0d73df64b115cd43fe0a32feb9daa",
  "0xab223e98f14a81d1855ad0d2e1111665304a521f",
  "0xac798df80b371569ec73e37124ffef7e26249667",
  "0xae362a72935dac355be989bf490a7d929f88c295",
  "0xaf6cfd3093ef58aeb130abd94b5da036b35adc65",
  "0xaf866405f474b84e893131dcaa34b51c90e51895",
  "0xaf8a08ddaedd2378b8075f8b90cee4b066ae0df7",
  "0xaf97e87375d97f45b1c5f4ea4cc87650f640581f",
  "0xaf98b8570c67d84e254cd4042da048c4164874ec",
  "0xb0d6ae7784a9f20c1e34218998f0fc5c24972441",
  "0xb126afa1075bbfbbe49e8321c6016f9b7ce5ca13",
  "0xb225bf7e4f1da339195972ca7e4a1d9ff52156ce",
  "0xb232ad656fbd3deda21f8ae177e17f416294118a",
  "0xb2d6ef31d536c4a3999e3c96f070209a8598dc57",
  "0xb435871b0959561226b4d903b1abf79528177e81",
  "0xb4ffb0f4e1e79351a27890f651ad5e6696e037d1",
  "0xb62f3f876d463773687c1e92aea0482ec28fbe3b",
  "0xb6462b67fe692223dffb61c8dc8ad080cba180cc",
  "0xb8b6b985f9893350545af34f86f10ace10fed32b",
  "0xb92a1d5c73a69a0d72820f6f6221c5a81edb7cc0",
  "0xb981bdb5b1de479cbc4986fc669235ee194a9070",
  "0xba4074ca3e68095d9a490008fcb68e9ab205636a",
  "0xba842b7da417ba762d75e8f99e11c2980a8f8051",
  "0xbdb7194a6f048f57e0bab51aaae0fb623615805b",
  "0xbdc88f7f9b16863c8709f97f872f4e6e16dd5f6e",
  "0xbff78d2838243c9c6c18245d69e543a9ba6c2890",
  "0xc1a4e84588c397adb26486ba0dde28ac8bb54759",
  "0xc24dc96768d7a96ca37aa3e65787f69afaf1a354",
  "0xc30b67a08e962b40f1fa0a4c1052c118ac0a61c6",
  "0xc3b1f7ab9fabd729cdf9e90ea54ec447f9464269",
  "0xc3ba727a86e4031917d7896ae3016f78737bff4d",
  "0xc3ca3618f578094dda63efd6f30abe3de685e91c",
  "0xc3e7e4313eac49db4f7143b31dbf0c38dac1c2cf",
  "0xc4a267b902685667c68c9731969d9844b78301e1",
  "0xc5308479e0c4d40d3a7486594ca0c911eee869f5",
  "0xc64844d9b3db280a6e46c1431e2229cd62dd2d69",
  "0xc930fb0f76d2d5eddb72d88d49b67fccb106667d",
  "0xc9a43964b791e5abd13b98fac710132abfca873e",
  "0xcb33844b365c53d3462271cee9b719b6fc8ba06a",
  "0xcb57c082893450408d432b5d0bc38def93b26040",
  "0xcbd6b0dee49eea88a3343ff4e5a2423586b4c1d6",
  "0xcc529ebfee1257eaa43a1d19d5cdc7bf57a30193",
  "0xccd72bea12f3927063be3d8798a4b74082713cb5",
  "0xcdc8698745db38280d649fb9e7322d899c4a1bd0",
  "0xce27fa2d00b91c9486e3545c75cd7df86d4e3632",
  "0xcf04f3cb862cd00cdaaaed3738977a4af84688fb",
  "0xd2ad3a111f1ae862f277a3b78e3924ad82018640",
  "0xd360ecb91406717ad13c4fae757b69b417e2af6b",
  "0xd46c81245a0582891c2249daf2d68925977cf2a7",
  "0xd50cbde55f8da4e8cf94f38deae2c722a5bd156b",
  "0xd790a1516f78e3fb52338084b5c5931a75bb19cf",
  "0xd86226f0eaade8132662915cd5d4a826daefa2c6",
  "0xd8fd1ad0da93d380c96b9de5f0b6624b03b7963a",
  "0xd9099f45f9ed74e5d34604181e50b6ddef19e69e",
  "0xd9da13de745bfa50ffaafd0a531b92f0511b72cf",
  "0xdb10d21f28a34fd04e4425eac777483798f7e217",
  "0xdb31b71d3b9a01889ca62f2f59c524768a5eade3",
  "0xdb611d682cb1ad72fcbacd944a8a6e2606a6d158",
  "0xddfc0a12fd323ac34ad149e1473eb6f91155fdd6",
  "0xde055950ccaaf115c8d76b33e6503ee403875ccb",
  "0xdffd8bbf8dcaf236c4e009ff6013bfc98407b6c0",
  "0xe073182d644ebb5290cfa6915ba94312fc73a679",
  "0xe1e2a52a21226ba37f28ba6cdf59f20156798f94",
  "0xe2a82cdccbfa6ebf9817b0c4aed45264bd41fbec",
  "0xe3db0df6a4a62106a3dd5cef76c196a53f3e7e4d",
  "0xe3ed9744b35db01d0569942252dff07b9efff00a",
  "0xe506b89e12b573e4408a84eaa0a79697bb2800a1",
  "0xe513b2b8745a83ebdc1b42b5ce70d4900b5981c7",
  "0xe520d9514a85d28fdcffc5092b58afdf64e8fbb4",
  "0xe793a7a7c7b7a4cefddb30f856b01f36e51b1b82",
  "0xe922bc2ad029b1efafc3eb3ff776219c3dfbb625",
  "0xe9c245293dac615c11a5bf26fcec91c3617645e4",
  "0xeb434da562e7a8ba045472fd1e134b420771ef7a",
  "0xebe4d96a48c4d0659fadfcae5a132de3a5733374",
  "0xebfb476e0f9c8d74f0fce72b688d7177dcbb73c2",
  "0xecc0da4bf963c23e9ec9740b1f06cb192c5195a1",
  "0xecc25630b09f65e095e56cbb1e957cc631feccd5",
  "0xeefd6537adbda7b1a9da3f6607dda26b048489c2",
  "0xef42cf85be6adf3081ada73af87e27996046fe63",
  "0xef47003f0e276eb0fb60b626e80554dd7adcdd11",
  "0xef764bac8a438e7e498c2e5fccf0f174c3e3f8db",
  "0xef76e8486416061cdc0c5bf7df45d172d53bbf56",
  "0xf19df0e4c4babee6960713eb175dec48804a4865",
  "0xf1a1602c90d8e510bc583eabb53667e3afae4b52",
  "0xf2eaeb6a0c248bcd69fd314180d69907b9be7491",
  "0xf3e112e0c32e7a30da87517e98a22103ade76d01",
  "0xf44593dfae05bff213c876a8e1fdcc15a45964df",
  "0xf4a838260e11551c29d9dee4b0c71f17bf1385cb",
  "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
  "0xf71181c9f91f85149d629f37b8c27afca0fd5ea1",
  "0xf71d161fdc3895f21612d79f15aa819b7a3d296a",
  "0xf7c04a39e47c7ea9d6888f9389ea85846e22ae1a",
  "0xf7c7ca163ddfe69218377ab7086bdfc9a50f4e1e",
  "0xf8a830b775d5653ce373e65e60d70d9c7b9645b5",
  "0xf90db858c0697b34a5c400e3a12f30bb2c7dcb6d",
  "0xf9107317b0ff77ed5b7adea15e50514a3564002b",
  "0xf927f23ce9d81270b5c6802ea4d7da1a346fafe2",
  "0xf960d739bdd0f365cbef934973d9a87c30e04649",
  "0xf9f061d9a5f04e223ed3c560e03a8ab0a70cc1c4",
  "0xf9f668901a13b2c817a9cc9d7fed50868b7af8be",
  "0xfa88c88f68fc7a66ccd512a34f7686fded60caf4",
  "0xfdf2e83f523345bff44307359a669d7cb89da3fc",
  "0xff157c9a4cd63c8c0c4d40d068a8091bf55c687b",
  "0xff703ebb19c1a4e27ba14e8d7538fc113ca5f906",
  "0x0000000000000000000000000000000000000009",
  "0x0000000000000000000000000000000000000012",
];
