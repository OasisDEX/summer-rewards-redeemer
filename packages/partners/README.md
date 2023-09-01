# REWARDS FOR PARTNERS TOOLKIT

This toolkit helps partners to integrate with our rewads program more easily. It provides a series of tools
to help partners deploy a Rewards Redeemer contract on-chain, query data about pools usage, and use that data
to populate the redeemer contract to offer the rewards.

At this moment, the partners will need to take care of the claiming step by building a website that uses the data
provided by our endpoint. The toolkit takes care of the rest of the process.

The intention of the rewards program is to incentivize users to use the pools that use the partner's token. This way the partner can increase the usage of their token and the liquidity of their pools.

# TL;DR

- Initialize the repository by `yarn install`
- Request the URL endpoint and the API Key from us
- Obtain a JSON RPC Url from your favorite provider (Alchemy, Infura, etc...)
- Copy the `.env.example` file to `.env` and fill in the values in the `PARTNER REWARDS PROGRAM`
- Create a new Rewards Redeemer contract by running `yarn partner:manage create -t <rewards_token_address>`
- Query the data about pools usage by running `yarn rewards:request -p <pools_config> -o <output_file>`
- Make sure the Redeemer contract has enough funds for the rewards you are going to publish
- Publish the rewards in the Redeemer contract by running `yarn rewards:manage add -r <redeemer_contract_address> -w <weekId> -u <user_data_file>`
- Store the user proofs in a database and use them to allow users to claim their rewards through your own website

# Getting Started

Initialize the repository by:

```
$ yarn install
```

Then copy the `.env.example` file to `.env` and fill in the values in the `PARTNER REWARDS PROGRAM` section:

- `JSON_RPC_URL` msut point to your RPC endpoint provided by Alchemy, Infura or any other, for the network that you intend to deploy the contract to. Please consult with us which networks are supported for the rewards program.
- `PARTNER_REWARDS_ENDPOINT_URL` must point to the endpoint provided by us. This endpoint will be used to query the data about the pools usage.
- `PARTNER_REWARDS_ENDPOINT_API_KEY` must be the token provided by us to access the endpoint.
- `REWARDS_REDEEMER_FACTORY_ADDRESS` must be the address of the Rewards Redeemer Factory contract. This address will be provided by us for the specific network that you want to use.
- `PARTNER_WALLET_PRIVATE_KEY` must be the private key of the wallet that will be used to deploy the Rewards Redeemer contract and to publish the rewards in the Redeemer. This wallet must be whitelisted by us in order to access the functionality. The private key is only used to sign transactions and it is never sent to any server.

# Creating a new Rewards Redeemer contract

## Deploying a new Redeemer contract

All managing operations done by the partner will make use of a Wallet, which address must be whitelisted by us in order to access the functionality. Please make sure you use the same wallet address for all operations.

To create a new Rewards Redeemer contract, run:

```
$ yarn partner:manage create -t <rewards_token_address>
```

Where `<rewards_token_address>` is the address of the token that will be used in the rewards program. This token must be a valid ERC20 token.

Once finished the tool will confirm the creation of the Redeemer contract and will output the address of the contract. This address must be saved for future use.

## Querying the active Redeemer contract

In case you lose the Redeemer address, you can always retrieve again by running:

```
$ yarn partner:manage get -a <partner_wallet_address>
```

Where `<partner_wallet_address>` is the address of the wallet that was used to create the Redeemer contract.

# Query data about pools usage

First you need to provide a file with the pools that you want to query, and the week ID for which to query.

The file format is the following:

```
{
  "weekId": 2795,
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

Where:

- `weekId` is the ID of the week for which to query the data
- `distribution` is an array of objects, each object representing a pool for which to retrieve usage data:
  - `name` is the name of the pool, typically the pair, although this field is just informative and does not affect the query.
  - `address` is the address of the pool for which to query
  - `share` is the percentage of the total of the rewards allocated for this particular pool. The sum of all shares specified in this file must add up to 1.0.
  - `lendRatio` is the percentage of rewards allocated to the pool (this is, the total rewards multiplied by the pool's share) that will be distributed to lenders. The rest will be distributed to borrowers. This field is optional and defaults to 0.5 (50% of the rewards will be distributed to lenders and the other 50% to borrowers).
- `totalWeeklyRewards` is the total amount of rewards to be distributed in the week. This amount must be specified in wei, taking into account the decimals for the rewards token

You should write the data to a file, for example `pools-config.json` and then run:

```
$ yarn rewards:request -p <pools_config> -o <output_file>
```

Where `<pools_config>` is the path to the file with the pools configuration (i.e. `pools-config.json` in the example), and `<output_file>` is the path to the file where the data will be written to.

The created file should contain something like:

```
{
  "root": "0x2044c78c44a548d3fd74e6c820ab9534718ec3cc5d3b04fc52620bcccbd20e21",
  "parsedSnapshotWithProofs": [
    {
      "address": "0xaaf00613a099deae24eeb2c21ad2965cadeac244",
      "amount": "1000000000000000000000",
      "proof": [
        "0x114111818f24ddeeb87c636a6e5746ed0c0e7119f72fa16b24a756dafe4b70fa",
        "0xc571b19b805e20be07b2c74e201abbe3c14f7b47a76cb07542a5e8631f555dd9",
        "0xb39d495fbf81c80b9341ff49fa92d9b379313a65f18c269163665ef82c83a234",
        "0xa5d4a0d68111bd28edefead727e332873450d2ab7c1a9697936d5c33d2480f75",
        "0xaa410a799a9289145818fdb8159b11cb4bd910fe056aa25a93cb9965581d289c",
        "0x1e3c5b402918d25ce596809fe7d038397eb677e30fdbfb7534643b803c9aee1a",
        "0x74c6f3a937230d9e61e2ab2c8a490c313f3bd0c8f12eba8d5eb66759ce44a4f5",
        "0xaf62fed07e0e7cfceb9bd4f92a33810895fed4ce1599404bb04785bcef68b691"
      ]
    },
    {
      "address": ...,
```

With the list of users and their proofs in the `parsedSnapshotWithProofs` field.

The information contained in `parsedSnapshotWithProofs` can be stored in a database to enable claiming from a website. The `root` field is the Merkle root of the snapshot, and it is used to publish the rewards in the Redeemer contract.

# Make sure the Redeemer has enough funds

Everytime a rewards list is published in the Redeemer, the corresponding rewards are immediately available for users to claim. However, the Redeemer contract must hold enough rewards tokens to be able to pay all the claims. The partner must make sure that the Redeemer contract has enough funds before publishing the rewards.

This can be done directly through a wallet manager like Metamask. To query for the number of rewards tokens in the Redeemer contract, you can always check the balance through the rewards token contract by usin, for example, Etherscan.

If reward tokens are held in the same wallet that the partner is using to publish the rewards in the Redeemer, then a command can be used to transfer the tokens to the Redeemer contract:

```
$ yarn rewards:send -t <rewards_token_address> -m <amount> -r <redeemer_contract_address>
```

Where:

- `<rewards_token_address>` is the address of the rewards token
- `<amount>` is the amount of tokens to transfer, as a string (in quotes), in wei, considering the number of decimals of the token
- `<redeemer_contract_address>` is the address of the Redeemer contract

Again, in order for this to work, the wallet address defined by the `PARTNER_WALLET_PRIVATE_KEY` environment variable must hold enough tokens for the transfer to succeed.

If you are concerned about holding rewards tokens in a hot wallet, then please make the transfer to the Redeemer using a cold wallet and a wallet manager like Metamask. This is the recommended approach.

# Publish the rewards in the Redeemer

## Adding a root

Once the Redeemer contract has been created, and the pools usage data has been queried, the partner can publish the rewards in the Redeemer contract by running:

```
$ yarn rewards:manage add -r <redeemer_contract_address> -w <weekId> [ -m <merkle_root> | -u <user_data_file>]
```

Where:

- `<redeemer_contract_address>` is the address of the Redeemer contract
- `<weekId>` is the ID of the week for which the rewards are being published
- `<merkle_root>` is the Merkle root of the snapshot, as returned by the `rewards:request` command. If the `-u` option is provided, then this value is not required.
- `<user_data_file>` is the path to the file with the user data, as returned by the `rewards:request` command. If the `-m` option is provided, then this value is not required.

The preferred method is to use the user data file, as there is no human interaction in having to extract the merkle root from the file itself, but the other method is provided for convenience.

Once the root is published in the Redeemer contract, the rewards are immediately available for users to claim if enough funds are available in the Redeemer contract (see the previous section).

## Removing a root

A root that has been published in the Redeemer contract cannot be published again. If you made a mistake or want to update the root for any reason, you have to remove the root first by running:

```
$ yarn rewards:manage remove -r <redeemer_contract_address> -w <weekId>
```

Where:

- `<redeemer_contract_address>` is the address of the Redeemer contract
- `<weekId>` is the ID of the week for which the rewards are being removed

After removing the root, you can publish it again by running the `rewards:manage add` command.

## Querying a root

To check the root that is currently published in the Redeemer contract for a certain week, you can run:

```
$ yarn rewards:manage get -r <redeemer_contract_address> -w <weekId>
```

Where:

- `<redeemer_contract_address>` is the address of the Redeemer contract
- `<weekId>` is the ID of the week for which the rewards are being removed

The tool will return the Merkle root of the snapshot that is currently published in the Redeemer contract for that week.

# Claiming rewards

The claiming of the rewards must be implemented by the partner in a website or any other method. As explained above the `parsedSnapshotWithProofs` field in the file returned by the `rewards:request` command contains the list of users and their proofs. This information can be stored in a database and used to allow users to claim their rewards.

The data needed to claim a reward is the following:

- The user's address, tied to the wallet sending the transaction. This is, the user has to sign the transaction with the same wallet that appears in the user data.
- The week ID for which to claim the rewards
- The Merkle proof for the user/week, as returned by the `rewards:request` command.

An example of how to claim rewards is provided in the [manage-rewards.ts](./scripts/manage-rewards.ts) through the `claim` command. Check the `claimRewards`.

This command is only intended for testing and reference purposes, and not to be provided to users for them to claim the rewards.

# Privileged operations

These operations can only be performed by Summer.fi admins. They are provided here for reference purposes only.

In order to access the privileged operations, you need to provide the private key of the admin wallet in the `PRIVATE_KEY_DEPLOY` environment variable.

# Whitelisting a new partner

To whitelist a new partner in the Redeemer Factory, run:

```
$ yarn partner:manage add -p <partner_wallet_address>
```

Where:

- `<partner_wallet_address>` is the address of the wallet that will be used by the partner to manage the rewards program.

This will enable the partner to create new Redeemer contracts and publish rewards in them.

# Removing a partner

To remove a partner from the Redeemer Factory, run:

```
$ yarn partner:manage remove -p <partner_wallet_address>
```

Where:

- `<partner_wallet_address>` is the address of the wallet that was used by the partner to manage the rewards program.

This will prevent the partner from creating new Redeemer contracts and publishing rewards in them. However the already created Redeemer contracts will still under the ownership of the partner and they can continue using them.
