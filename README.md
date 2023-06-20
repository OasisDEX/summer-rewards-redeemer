# Oasis Ajna Redeemer
## TO BE DONE:
[] database schema
[] snapshot script

## Drip
- weekly amount cannot be above MAX_WEEKLY_AMOUNT which is constant
- MAX_WEEKLY_AMOUNT set to 2_000_000
- ADMIN_ROLE can withdraw an arbitrary amount of AJNA tokens to the multisig wallet
- authorized user can change the redeemer contract address
- authorized user can change the weekly emission ( but not more than 10% and not more often than once per 4 weeks )
- authorized user can transfer all Ajna tokens to multisig address
- when new redeemer is added it can set the weekly amount between 90% and 110% of the current weekly amount
- drip contract remains unchanged, while redeemer contract can be redeployed and address changed in drip contract
- drip contract holds all of the Ajna tokens
- `drip()` can only be called by redeemer contract to pull tokens for weekly distribution
- each `drip()` call is stored in `weeklyDrip` mapping so the Ajna tokens can't be pulled multiple times
- drip can only be called for week numbers past `dripperDeploymentWeek` 

## Redeemer
- operator can add weekly root ( that will pull Ajna tokens from Drip contract )
- one root per week can be added
- roots from the past can be added (in case they were missed)
- only week numbers past the deployment week can be used (and below or equal current week) - no future week numbers
- user can claim multiple claims at once
- week number is week number since the UNIX epoch (week starting from Thursday at 00:00:00 UTC)
- authorized user can withdraw all the Ajna tokens from redeemer contract to the drip contract


## Config
- each entry in `rewardDistributions` contains the % of the weekly amount that will be distributed to the given address
- to calculate the required amount of Ajna tokens for the given pool, the weekly amount (`getWeeklyReward()`) is multiplied by the ratio for each pool `rewardDistributions` and ratio of earn/borrow rewards 

# TO BE UPDATED
# Snapshot
To generate the snapshot use:
```
ts-node ./scripts/snapshot/get-weekly-snapshot.ts
```
where snapshot type:
* `claims` - creates a snapshot of claims based on the referrals table in the DB
* `fees` create a snapshot of all fees in the selected block range.

The snapshot file is saved as:

```
snapshot-{timestamp}-{start_block}-{end_block}-{snapshot_type}.json
```
in the `./scripts/snapshot/archive/` folder (if the `claims` option is used, the snapshot is also saved in the root directory, to be used by `process-weekly-snapshot.ts` - it's overwritten with each run).

To create a new snapshot use the `end_block` from the previous snapshot as `start_block` for the current one - for the `start_block` use the current block.

---
# Weekly claims processing
To push the generated data to the redeemer contract and the DB, use the following command (remember to use the correct DB - in `.env` ):
```
npx hardhat run scripts/snapshot/process-weekly-snapshot.ts
```

---
# Local testing
Start the local HH node and the local DB, then use: A Dummy snapshot will be added for testing:
```
[
  ["0x14dC79964da2C08b23698B3D3cc7Ca32193d9955", ethers.utils.parseEther("2000.58831")],
  ["0x70997970C51812dc3A010C7d01b50e0d17dc79C8", ethers.utils.parseEther("100.66699")],
  ["0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC", ethers.utils.parseEther("800.89988")],
  ["0x90F79bf6EB2c4f870365E785982E1f101E93b906", ethers.utils.parseEther("700.07070")],
  ["0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65", ethers.utils.parseEther("500.66396")],
  ["0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc", ethers.utils.parseEther("800.88888")],
  ["0x976EA74026E726554dB657fA54763abd0C3a0aa9", ethers.utils.parseEther("3000.33666")],
];
```
---
This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

# Performance optimizations

For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable `TS_NODE_TRANSPILE_ONLY` to `1` in hardhat's environment. For more details see [the documentation](https://hardhat.org/guides/typescript.html#performance-optimizations).
