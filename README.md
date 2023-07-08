# Oasis Ajna Redeemer & Drip

# Setup

## Environment Variables

The following environment variables are used in this project:

- `ALCHEMY_MAINNET_RPC_URL`: The RPC URL for the Alchemy mainnet.
- `ALCHEMY_GOERLI_RPC_URL`: The RPC URL for the Alchemy Goerli test network.
- `PRIVATE_KEY_DEPLOY`: The private key to use for deploying contracts.
- `AJNA_GRAPHQL_ENDPOINT`: The GraphQL endpoint for the Ajna API.
- `DATABASE_URL`: The URL for the PostgreSQL database.
- `NETWORK_USED`: The network name used to get contract addresses and reward distributions (since when we use fork - the name of the network is `hardhat`)

To use these environment variables, create a `.env` file in the root directory of the project and set the values for each variable. You can use the `.env.example` file as a template.

## Using the project 

- install dependencies
```
yarn install
```
- run `npx graphclient build` to build the GraphQL client by The Graph
- run `yarn start:local` to start the local Hardhat node and the local DB
- run `yarn db:seed` to seed the DB with the initial data ( it will deploy the contracts, generate snapshots and add the merkle roots to both the DB and redeemer contract ) and start local hardhat node

## Scripts

The following scripts are available in this project:

- `start:local`: Starts a local development environment with a forked Ethereum node and a local database.
- `db:start`: Starts a local PostgreSQL database using Docker.
- `db:stop`: Stops the local PostgreSQL database using Docker.
- `db:run`: Starts a local PostgreSQL database using Docker and runs database migrations.
- `db:reset`: Resets the local PostgreSQL database using Docker.
- `db:migrate`: Runs database migrations.
- `db:seed`: Seeds the database and redeemer contract with data - concurrently starts local hardhat node.
- `test`: Runs the tests.
- `test:ts`: Runs the scripts tests.
- `build`: Compiles the SC code and generates the contract typechain.
- `clean`: Deletes the generated artifacts, cache, and typechain.
- `lint:fix`: Lints the code and fixes any issues.
- `lint:contracts`: Lints the Solidity contracts.
- `lint:typescript`: Lints the TypeScript code.
- `lint`: Lints the code.
- `format:fix`: Formats the code and fixes any issues.
- `format`: Formats the code.

# Configuration
The `config.ts` file contains the configuration for the project. It exports a `config` object that contains the following properties:

- `earnRewardsRatio`: The ratio of rewards allocated to earning.
- `borrowRewardsRatio`: The ratio of rewards allocated to borrowing.
- `rewardStartWeek`: The week number when rewards start.
- `multiplier`: The multiplier used to calculate rewards.
- `dryRun`: Whether to run the script in dry run mode.
- `network`: The network name used to get addresses and distributions.
- `merkleTreeOptions`: The options for the Merkle tree.
- `addresses`: The addresses for the contracts on the current network.
- `rewardDistributions`: The reward distribution ratios per pool for the current network.

The `addresses` and `rewardDistributions` properties are getters that return the addresses and reward distributions for the current network based on the `network` property.

# Lambdas

build the lambdas with `yarn generate:lambdas:daily`
or
```bash
docker build -t daily-lambda .
```
then
```bash
docker run -p 9000:8080 daily-lambda
```
and then you can test the lambda with
```bash
curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{"body":{"dayIds":[19543]}}'
```
lambda docker requires these env variables:
```env
DATABASE_URL=<borrow db connection string>
AJNA_GRAPHQL_ENDPOINT_GOERLI=
AJNA_GRAPHQL_ENDPOINT_MAINNET=
NETWORK_USED=<network used to submit weekly root>
```
# Contracts
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