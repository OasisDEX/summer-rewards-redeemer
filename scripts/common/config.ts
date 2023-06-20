export const addresses: { [key: string]: { [key: string]: string } } = {
  ajnaToken: {
    mainnet: "0x9a96ec9b57fb64fbc60b423d1f4da7691bd35079",
    goerli: "0xaadebCF61AA7Da0573b524DE57c67aDa797D46c5",
  },
  ajnaRedeemer: {
    mainnet: "0x0000000000000000000000000000000000000000",
    goerli: "0x107F1AA82558ac18671733dc32d15D999fc6b70c",
  },
  ajnaDripper: {
    mainnet: "0x0000000000000000000000000000000000000000",
    goerli: "0x6e4c6e76b3C1D834c0e3c4c2bAec8d58B8421A99",
  },
  admin: {
    mainnet: "0x85f9b7408afE6CEb5E46223451f5d4b832B522dc",
    goerli: "0x0B5a3C04D1199283938fbe887A2C82C808aa89Fb",
  },
  operator: {
    mainnet: "0xdF8234900a194D787AdF4E448502CbeD56557FbA",
    goerli: "0xdF8234900a194D787AdF4E448502CbeD56557FbA",
  },
};
export const config = {
  earnRewardsRatio: 0.6,
  borrowRewardsRatio: 0.4,
};

export const rewardDistributions = {
  mainnet: [
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
  goerli: [
    { name: "WBTC-USDC", address: "0x325E0C594C011Af40a260c6aEb20E0557DEd7E6f", share: 0.6 },
    { name: "WETH-USDC", address: "0x8806584b9ba1383Cd77589DD937d4AE267E8c61d", share: 0.4 },
  ],
};

export const getWeeklyReward = (weekNumber: number) => {
  if (weekNumber <= 4) {
    return 1100000;
  } else if (weekNumber <= 8) {
    return 1000000;
  } else if (weekNumber <= 12) {
    return 900000;
  } else if (weekNumber <= 16) {
    return 810000;
  } else if (weekNumber <= 20) {
    return 729000;
  } else if (weekNumber <= 26) {
    return 656100;
  } else if (weekNumber <= 36) {
    return 600000;
  } else if (weekNumber <= 40) {
    return 550000;
  } else {
    return 500000;
  }
};

export const tokens = {
  goerli: {
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
  mainnet: {
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
