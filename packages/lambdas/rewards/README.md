## `/snapshot/weekly` Endpoint

This endpoint calculates a weekly snapshot of token balances based on the provided distribution and total weekly rewards.

Request Body
The request body must be a JSON object with the following properties:

- `weekId` (string, required): The ID of the week to snapshot.
- `distribution` (array, required): An array of token distribution objects, where each object has the following properties:
  - `address` (string, required): The address of the token contract.
  - `name` (string, required): Pair of the tokens - as pool name.
  - 'share' (string, required): The share of the tokens for a given pool. Sums up to 1.
  - 'lendRatio' (string, optional): The lend ratio of the pool (amount of the rewards that go to lender). Defaults to 0.6.
- `totalWeeklyRewards` (string, required): The total amount of rewards for the week.

Example request body:

```json
{
  "weekId": "2791",
  "distribution": [
    { "name": "RETH-DAI", "address": "0x42d3f9C4dF0b98c3974Fd539A7EA9d0847F37Ef5", "share": 0.2 },
    { "name": "WBTC-DAI", "address": "0xdB30a08Ebc49af1BaF87f57824f85056cEd33d5F", "share": 0.2 },
    { "name": "WSTETH-DAI", "address": "0x8519bE08b8d83baEb11eBa52A7889967dCeD9Ae0", "share": 0.2 },
    { "name": "ETH-USDC", "address": "0x1C50ce3550D1846134F3B7c09785e7005F6A1566", "share": 0.2 },
    { "name": "WBTC-USDC", "address": "0x65374cD7db203e0c9EA8B7DA28A25dC770bEcB9e", "share": 0.2 }
  ],
  "totalWeeklyRewards": "1000000000000000000"
}
```

### Response Body

The response body is a JSON object with the following properties:

- `root` (string): The root hash of the Merkle tree.
- `parsedSnapshotWithProofs` (array): An array of token balance objects, where each object has the following properties:
  - `address` (string): The address of the token holder.
  - `amount` (string): The balance of the token holder.
  - `proof` (array): An array of Merkle proofs for the token holder's balance.

Example response body:

```json
{
  "root": "0x6fc461f80dfd08cb6fcd7cf2d7c7e066ec27c1a8e4b58248e338f0c22119cf38",
  "parsedSnapshotWithProofs": [
    {
      "address": "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
      "amount": "0x0431986b2ca8704156bb",
      "proof": [
        "0x114111818f24ddeeb87c636a6e5746ed0c0e7119f72fa16b24a756dafe4b70fa",
        "0x2401d885723a686df608aef5a86557a6b4b5077a2cff9d628d65989ee412ca09"
      ]
    },
    {
      "address": "0x11d67fa925877813b744abc0917900c2b1d6eb81",
      "amount": "0x83568a4ead839275b3",
      "proof": [
        "0x358f41e4581ceaa0da1087ce1291cf962ebcf23b685cacbbd383bd4e755a4619",
        "0x2401d885723a686df608aef5a86557a6b4b5077a2cff9d628d65989ee412ca09"
      ]
    }
  ]
}
```

## `/snapshot/daily` Endpoint

This endpoint calculates a daily snapshot of token balances based on the provided distribution and total weekly rewards.

Request Body
The request body must be a JSON object with the following properties:

- `dayId` (string, required): The ID of the week to snapshot.
- `distribution` (array, required): An array of token distribution objects, where each object has the following properties:
  - `address` (string, required): The address of the token contract.
  - `name` (string, required): Pair of the tokens - as pool name.
  - 'share' (string, required): The share of the tokens for a given pool. Sums up to 1.
  - 'lendRatio' (string, optional): The lend ratio of the pool (amount of the rewards that go to lender). Defaults to 0.6.
- `totalWeeklyRewards` (string, required): The total amount of rewards for the week.

Example request body:

```json
{
  "dayId": "2791",
  "distribution": [
    { "name": "RETH-DAI", "address": "0x42d3f9C4dF0b98c3974Fd539A7EA9d0847F37Ef5", "share": 0.2 },
    { "name": "WBTC-DAI", "address": "0xdB30a08Ebc49af1BaF87f57824f85056cEd33d5F", "share": 0.2 },
    { "name": "WSTETH-DAI", "address": "0x8519bE08b8d83baEb11eBa52A7889967dCeD9Ae0", "share": 0.2 },
    { "name": "ETH-USDC", "address": "0x1C50ce3550D1846134F3B7c09785e7005F6A1566", "share": 0.2 },
    { "name": "WBTC-USDC", "address": "0x65374cD7db203e0c9EA8B7DA28A25dC770bEcB9e", "share": 0.2 }
  ],
  "totalWeeklyRewards": "1000000000000000000"
}
```

### Response Body

The response body is a JSON object with the following properties:

- `root` (string): The root hash of the Merkle tree.
- `parsedSnapshotWithProofs` (array): An array of token balance objects, where each object has the following properties:
  - `address` (string): The address of the token holder.
  - `amount` (string): The balance of the token holder.
  - `proof` (array): An array of Merkle proofs for the token holder's balance.

Example response body:

```json
{
  "statusCode": 200,
  "body": {
    "root": "0x6fc461f80dfd08cb6fcd7cf2d7c7e066ec27c1a8e4b58248e338f0c22119cf38",
    "parsedSnapshotWithProofs": [
      {
        "address": "0xf4f9e8cdae4b69ff3e0beca0dff65b9b718c3161",
        "amount": "0x0431986b2ca8704156bb",
        "proof": [
          "0x114111818f24ddeeb87c636a6e5746ed0c0e7119f72fa16b24a756dafe4b70fa",
          "0x2401d885723a686df608aef5a86557a6b4b5077a2cff9d628d65989ee412ca09"
        ]
      },
      {
        "address": "0x11d67fa925877813b744abc0917900c2b1d6eb81",
        "amount": "0x83568a4ead839275b3",
        "proof": [
          "0x358f41e4581ceaa0da1087ce1291cf962ebcf23b685cacbbd383bd4e755a4619",
          "0x2401d885723a686df608aef5a86557a6b4b5077a2cff9d628d65989ee412ca09"
        ]
      }
    ]
  }
}
```

## `/pools/token-pairs` Endpoint

This endpoint returns a list of pools for specified token pairs. First token in each token pair is the collateral token and the second one is the quote token.

Response contains name consisting of token symbols, pool address, share of the pool in the total liquidity ( one divided by number of pools by default) and lendRatio set to 0.6 by deafult.

Example request body:

```json
{
  "pairs": [
    ["0x65374cD7db203e0c9EA8B7DA28A25dC770bEcB9e", "0x65374cD7db203e0c9EA8B7DA28A25dC770bEcB9e"],
    ["0x65374cD7db203e0c9EA8B7DA28A25dC770bEcB9e", "0x65374cD7db203e0c9EA8B7DA28A25dC770bEcB9e"]
  ]
}
```

where first token is the collateral token

Example response body:

```json
{
  "distribution": [
    { "name": "RETH-DAI", "address": "0x42d3f9C4dF0b98c3974Fd539A7EA9d0847F37Ef5", "share": 0.2, "lendRatio": 0.6 },
    { "name": "WBTC-DAI", "address": "0xdB30a08Ebc49af1BaF87f57824f85056cEd33d5F", "share": 0.2, "lendRatio": 0.6 },
    { "name": "WSTETH-DAI", "address": "0x8519bE08b8d83baEb11eBa52A7889967dCeD9Ae0", "share": 0.2, "lendRatio": 0.6 },
    { "name": "ETH-USDC", "address": "0x1C50ce3550D1846134F3B7c09785e7005F6A1566", "share": 0.2, "lendRatio": 0.6 },
    { "name": "WBTC-USDC", "address": "0x65374cD7db203e0c9EA8B7DA28A25dC770bEcB9e", "share": 0.2, "lendRatio": 0.6 }
  ]
}
```

## `/pools/token` Endpoint

This endpoint returns all pools that have `token` as collateral token or as quote token.

Response contains name consisting of token symbols, pool address, share of the pool in the total liquidity ( one divided by number of pools by default) and lendRatio set to 0.6 by deafult.

Example request body:

```json
{
  "token": "0x65374cD7db203e0c9EA8B7DA28A25dC770bEcB9e"
}
```

Example response body:

```json
{
  "distribution": [
    { "name": "RETH-DAI", "address": "0x42d3f9C4dF0b98c3974Fd539A7EA9d0847F37Ef5", "share": 0.2, "lendRatio": 0.6 },
    { "name": "WBTC-DAI", "address": "0xdB30a08Ebc49af1BaF87f57824f85056cEd33d5F", "share": 0.2, "lendRatio": 0.6 },
    { "name": "WSTETH-DAI", "address": "0x8519bE08b8d83baEb11eBa52A7889967dCeD9Ae0", "share": 0.2, "lendRatio": 0.6 },
    { "name": "ETH-USDC", "address": "0x1C50ce3550D1846134F3B7c09785e7005F6A1566", "share": 0.2, "lendRatio": 0.6 },
    { "name": "WBTC-USDC", "address": "0x65374cD7db203e0c9EA8B7DA28A25dC770bEcB9e", "share": 0.2, "lendRatio": 0.6 }
  ]
}
```

## `/pools/curated-tokens` Endpoint

This endpoint accepts a list of curated tokens. It returns a list of pools in which both collateral and quote tokens are in the list of curated tokens.

Response contains name consisting of token symbols, pool address, share of the pool in the total liquidity ( one divided by number of pools by default) and lendRatio set to 0.6 by deafult.

Example request body:

```json
{
  "tokens": ["0x038bedf0eb7c0f322eac4ac445a582fe199285e7", "0x07b48cbfafa35683e8fe82283a54964442814e96"]
}
```

Example response body:

```json
{
  "distribution": [
    { "name": "RETH-DAI", "address": "0x42d3f9C4dF0b98c3974Fd539A7EA9d0847F37Ef5", "share": 0.2, "lendRatio": 0.6 },
    { "name": "WBTC-DAI", "address": "0xdB30a08Ebc49af1BaF87f57824f85056cEd33d5F", "share": 0.2, "lendRatio": 0.6 },
    { "name": "WSTETH-DAI", "address": "0x8519bE08b8d83baEb11eBa52A7889967dCeD9Ae0", "share": 0.2, "lendRatio": 0.6 },
    { "name": "ETH-USDC", "address": "0x1C50ce3550D1846134F3B7c09785e7005F6A1566", "share": 0.2, "lendRatio": 0.6 },
    { "name": "WBTC-USDC", "address": "0x65374cD7db203e0c9EA8B7DA28A25dC770bEcB9e", "share": 0.2, "lendRatio": 0.6 }
  ]
}
```
