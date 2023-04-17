import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-solhint";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-tracer";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_MAINNET_RPC_URL,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    mainnet: {
      url: process.env.ALCHEMY_MAINNET_RPC_URL,
      accounts: process.env.PRIVATE_KEY_DEPLOY !== undefined ? [process.env.PRIVATE_KEY_DEPLOY] : [],
      gas: 1300000,
    },
    goerli: {
      url: process.env.ALCHEMY_GOERLI_RPC_URL,
      accounts: process.env.PRIVATE_KEY_DEPLOY !== undefined ? [process.env.PRIVATE_KEY_DEPLOY] : [],
      gas: 4300000,
    },
    hardhat: {
      chainId: 2137,
      forking: {
        url: process.env.ALCHEMY_MAINNET_RPC_URL !== undefined ? process.env.ALCHEMY_MAINNET_RPC_URL : "",
        blockNumber: 14833851,
      },
      mining: {
        auto: true,
      },
      hardfork: "london",
      gas: "auto",
      initialBaseFeePerGas: 1000000000,
      allowUnlimitedContractSize: true,
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
    gasPriceApi: "https://api.etherscan.io/api?module=proxy&action=eth_gasPrice",
    coinmarketcap: process.env.CMC_API_KEY,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
