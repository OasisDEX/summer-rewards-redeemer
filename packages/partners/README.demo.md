# DEMO COMMANDS

This is a list of commands to be run for demo purposes. The guide assumes a fresh Hardhat deployment in which the addresses are deterministic. If you re-deploy without restarting the node, the addresses will change.

# Setup

## Deployer Address

```
Address = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Private Key = ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
```

## Partner Address

```
Address = 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
Private Key = 59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d
```

## User Address

```
Address = 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
PrivateKey = 5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a
```

## .env file

```
PRIVATE_KEY_DEPLOY="ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"

# PARTNER REWARDS PROGRAM
JSON_RPC_URL="http://127.0.0.1:8545/"
PARTNER_REWARDS_ENDPOINT_BASE_URL="<Hidden on purpose>"
PARTNER_REWARDS_ENDPOINT_API_KEY="<Hidden on purpose>"
REWARDS_REDEEMER_FACTORY_ADDRESS="0xa85EffB2658CFd81e0B1AaD4f2364CdBCd89F3a1"
PARTNER_WALLET_PRIVATE_KEY="59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"
REWARDS_DEMO_USER_PRIVATE_KEY="5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a"
```

# Deployment

```
cd packages/contracts
npx hardhat node
npx hardhat run scripts/deployment/deploy-test.ts --network localhost
```

```
AjnaToken = 0x77AD263Cd578045105FBFC88A477CAd808d39Cf6
RewardsRedeemerFactory = 0xa85EffB2658CFd81e0B1AaD4f2364CdBCd89F3a1
```

# Whitelist Partner

```
cd packages/partners
yarn partner:manage add -p 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
```

# Create Rewards Redeemer

```
yarn redeemer:manage create -t 0x77AD263Cd578045105FBFC88A477CAd808d39Cf6
```

```
RewardsRedeemer = 0x85057f85D70c55B434D7eA9B8bB34fF041eBC971
```

# Prepare Rewards

## Query Pools

```
yarn pools:request token -t 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48 -o pools-demo-config.json
```

## Demo Config

Edit the previously created `pools-demo-config.ts` to add the `weekId` and the `totalWeeklyRewards`. This can be time consuming. For a quick demo just create a new `pools-demo-config.ts` containing the data below:

```
{
  "weekId": 2799,
  "distribution": [
    { "name": "RETH-DAI", "address": "0x42d3f9c4df0b98c3974fd539a7ea9d0847f37ef5", "share": 0.09 },
    { "name": "WBTC-DAI", "address": "0xdb30a08ebc49af1baf87f57824f85056ced33d5f", "share": 0.07 },
    { "name": "WSTETH-DAI", "address": "0x8519be08b8d83baeb11eba52a7889967dced9ae0", "share": 0.07 },
    { "name": "ETH-USDC", "address": "0x1c50ce3550d1846134f3b7c09785e7005f6a1566", "share": 0.065 },
    { "name": "WBTC-USDC", "address": "0x65374cd7db203e0c9ea8b7da28a25dc770becb9e", "share": 0.09 },
    { "name": "WSTETH-USDC", "address": "0xe0ffabea66627a588efb6c870677baa23a53b948", "share": 0.09 },
    { "name": "USDC-ETH", "address": "0x0bc54b36d4fa082ede775dd45f69fbbe360ddeb6", "share": 0.05 },
    { "name": "USDC-WBTC", "address": "0x1a9cea49daeb8c36ea707a9171ebdf4097796dd4", "share": 0.05 },
    { "name": "CBETH-ETH", "address": "0xad24fc773e125edb223c38a39657cb64bc7c178e", "share": 0.1, "lendRatio": 0.95 },
    { "name": "WSTETH-ETH", "address": "0x37d3a44c905663d7b77c9b574b941d4fbf713a91", "share": 0.1, "lendRatio": 0.95 },
    { "name": "RETH-ETH", "address": "0xa2ffdc7efef98469d11370d91c0a17dc83ec2bda", "share": 0.1, "lendRatio": 0.95 },
    { "name": "YFI-DAI", "address": "0x5b14144da6fd5e3b158d6df7b6ed8345829aab78", "share": 0.025 },
    { "name": "SDAI-USDC", "address": "0xf4ab415e00ff0ed4f25d31d7e9140f3c75b69e7d", "share": 0.1, "lendRatio": 0.95 }
  ],
  "totalWeeklyRewards": "1000000000000000000000000"
}
```

## Create Snapshot

```
yarn rewards:request -p pools-demo-config.json -o users-data.json
```

# Send Funds

Change the `PARTNER_WALLET_PRIVATE_KEY` in `.env` to the private key of the deployer wallet:

```
PARTNER_WALLET_PRIVATE_KEY="ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
```

```
yarn token:manage send -t 0x77AD263Cd578045105FBFC88A477CAd808d39Cf6 -m "1000" -r 0x85057f85D70c55B434D7eA9B8bB34fF041eBC971
```

# Publish Rewards

Change the `PARTNER_WALLET_PRIVATE_KEY` in `.env` to the private key of the partner wallet:

```
PARTNER_WALLET_PRIVATE_KEY="59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"
```

```
yarn rewards:manage add -r 0x85057f85D70c55B434D7eA9B8bB34fF041eBC971 -w 2795 -u users-data.json

```

# Claiming Rewards

## Check Balance

```
yarn token:manage balance -t 0x77AD263Cd578045105FBFC88A477CAd808d39Cf6 -u 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC

```

## Claim

```
yarn rewards:manage claim -r 0x85057f85D70c55B434D7eA9B8bB34fF041eBC971 -w 2795 -u users-data.json

```

# Confirm Rewards

```
yarn token:manage balance -t 0x77AD263Cd578045105FBFC88A477CAd808d39Cf6 -u 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC

```
