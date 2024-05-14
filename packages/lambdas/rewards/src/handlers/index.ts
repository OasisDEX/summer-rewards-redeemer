import { calculateDailySnapshot, calculateWeeklySnapshot } from "ajna-rewards-snapshot/get-snapshot";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { createMerkleTree, Distribution, ParsedUserSnapshotWithProofs, validateRewardDistributions } from "common";
import { fetchDailyData, fetchWeeklyData, graphClient } from "common/utils/graph.utils";
import { BigNumber } from "ethers";
import { Maybe, Pool, Token } from "graphclient";

import {
  CuratedTokensRequestBody,
  DailySnapshotRequestBody,
  TokenPairRequestBody,
  TokenRequestBody,
  WeeklySnapshotRequestBody,
} from "../types/requests";
import { createErrorResponse, createSuccessResponse, validateRequestBody } from "../utils";

export async function handleWeeklySnapshot(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  try {
    if (!event.body) {
      return createErrorResponse("No body provided");
    }
    const parsedBody = JSON.parse(event.body);
    if (!parsedBody) {
      return createErrorResponse("Invalid body provided");
    }
    const validatedBody = await validateRequestBody<WeeklySnapshotRequestBody>(parsedBody, "WeeklySnapshotRequestBody");
    if (!validatedBody) {
      return createErrorResponse("Invalid body provided");
    }
    validateRewardDistributions(validatedBody.distribution);
    const graphRes = await fetchWeeklyData(validatedBody.weekId, validatedBody.distribution);
    const parsedSnapshot = calculateWeeklySnapshot(
      graphRes,
      validatedBody.weekId,
      validatedBody.distribution.map((distribution: Distribution) => ({
        ...distribution,
        userAddress: distribution.address.toLowerCase(),
      })),
      BigNumber.from(validatedBody.totalWeeklyRewards)
    );
    // uncomment for testing
    // parsedSnapshot[0].userAddress = "0xaaf00613a099deae24eeb2c21ad2965cadeac244";
    // parsedSnapshot[0].amount = BigNumber.from("10000000000").toHexString();
    // parsedSnapshot[1].userAddress = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";
    // parsedSnapshot[1].amount = BigNumber.from("10000000000").toHexString();
    const { tree, leaves, root } = createMerkleTree(
      parsedSnapshot.weeklyCoreRewardsSnaphot.map((entry) => ({
        userAddress: entry.userAddress,
        amount: BigNumber.from(entry.amount),
      }))
    );
    const parsedSnapshotWithProofs: ParsedUserSnapshotWithProofs = parsedSnapshot.weeklyCoreRewardsSnaphot.map(
      (entry, index) => ({
        ...entry,
        proof: tree.getHexProof(leaves[index]),
      })
    );
    const responseBody = JSON.stringify({ root, parsedSnapshotWithProofs });
    return createSuccessResponse(responseBody);
  } catch (error) {
    console.error("Error", error);
    return createErrorResponse("Internal server error", 500);
  }
}
export async function handleDailySnapshot(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  try {
    if (!event.body) {
      return createErrorResponse("No body provided");
    }
    const parsedBody = JSON.parse(event.body);
    if (!parsedBody) {
      return createErrorResponse("Invalid body provided");
    }
    const validatedBody = await validateRequestBody<DailySnapshotRequestBody>(parsedBody, "DailySnapshotRequestBody");
    if (!validatedBody) {
      return createErrorResponse("Invalid body provided");
    }
    validateRewardDistributions(validatedBody.distribution);
    const graphRes = await fetchDailyData(validatedBody.dayId, validatedBody.distribution);
    const parsedSnapshot = calculateDailySnapshot(
      graphRes,
      validatedBody.dayId,
      validatedBody.distribution.map((distribution: Distribution) => ({
        ...distribution,
        address: distribution.address.toLowerCase(),
      })),
      BigNumber.from(validatedBody.totalWeeklyRewards)
    );
    // uncomment for testing
    // parsedSnapshot[0].userAddress = "0xaaf00613a099deae24eeb2c21ad2965cadeac244";
    // parsedSnapshot[0].amount = BigNumber.from("10000000000").toHexString();
    // parsedSnapshot[1].userAddress = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";
    // parsedSnapshot[1].amount = BigNumber.from("10000000000").toHexString();
    const { tree, leaves, root } = createMerkleTree(
      parsedSnapshot.parsedUserSnapshot.map((entry) => ({
        userAddress: entry.userAddress,
        amount: BigNumber.from(entry.amount),
      }))
    );
    const parsedSnapshotWithProofs: ParsedUserSnapshotWithProofs = parsedSnapshot.parsedUserSnapshot.map(
      (entry, index) => ({
        ...entry,
        proof: tree.getHexProof(leaves[index]),
      })
    );
    const responseBody = JSON.stringify({ root, parsedSnapshotWithProofs });
    return createSuccessResponse(responseBody);
  } catch (error) {
    console.error("Error", error);
    return createErrorResponse("Internal server error", 500);
  }
}
export async function handleTokenPairs(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  try {
    if (!event.body) {
      return createErrorResponse("No body provided");
    }
    const parsedBody = JSON.parse(event.body);
    if (!parsedBody) {
      return createErrorResponse("Invalid body provided");
    }
    const validatedBody = await validateRequestBody<TokenPairRequestBody>(parsedBody, "TokenPairRequestBody");
    if (!validatedBody) {
      return createErrorResponse("Invalid body provided");
    }

    const graphRes = await Promise.all(
      validatedBody.pairs.map((pair) =>
        graphClient
          .TokenPair({
            collateralAddress: pair[0].toLowerCase(),
            quoteTokenAddress: pair[1].toLowerCase(),
          })
          .then((data) => data.pools)
      )
    );
    const poolsRes = graphRes.reduce((acc, val) => acc.concat(val), []);

    const responseBody = prepareResponse(poolsRes);
    return createSuccessResponse(responseBody);
  } catch (error) {
    console.error("Error", error);
    return createErrorResponse("Internal server error", 500);
  }
}

export async function handleToken(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  try {
    if (!event.body) {
      return createErrorResponse("No body provided");
    }

    const parsedBody = JSON.parse(event.body);
    if (!parsedBody) {
      return createErrorResponse("Invalid body provided");
    }
    const validatedBody = await validateRequestBody<TokenRequestBody>(parsedBody, "TokenRequestBody");
    if (!validatedBody) {
      return createErrorResponse("Invalid body provided");
    }
    const graphRes = await graphClient.Token({
      token: validatedBody.token.toLowerCase(),
    });

    const responseBody = prepareResponse(graphRes.pools);
    return createSuccessResponse(responseBody);
  } catch (error) {
    console.error("Error", error);
    return createErrorResponse("Internal server error", 500);
  }
}
export async function handleCuratedTokens(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  try {
    if (!event.body) {
      return createErrorResponse("No body provided");
    }
    const parsedBody = JSON.parse(event.body);
    if (!parsedBody) {
      return createErrorResponse("Invalid body provided");
    }
    const validatedBody = await validateRequestBody<CuratedTokensRequestBody>(parsedBody, "CuratedTokensRequestBody");
    if (!validatedBody) {
      return createErrorResponse("Invalid body provided");
    }
    const graphRes = await graphClient.CuratedTokens({
      tokens: validatedBody.tokens.map((token) => token.toLowerCase()),
    });

    const responseBody = prepareResponse(graphRes.pools);
    return createSuccessResponse(responseBody);
  } catch (error) {
    console.error("Error", error);
    return createErrorResponse("Internal server error", 500);
  }
}

function prepareResponse(
  graphRes: Array<
    Pick<Pool, "id"> & { collateralToken?: Maybe<Pick<Token, "symbol">>; quoteToken?: Maybe<Pick<Token, "symbol">> }
  >
) {
  const poolCount = graphRes.length;
  const poolShare = (Math.floor((1 / poolCount) * 1000) / 1000).toFixed(3);
  const remainder = (1 - (poolCount - 1) * +poolShare).toFixed(3);
  const pools = graphRes.map((pool, index) => {
    return {
      name: `${pool.collateralToken!.symbol}-${pool.quoteToken!.symbol}`,
      address: pool.id,
      share: index == poolCount - 1 ? remainder : poolShare,
      lendRatio: 0.6,
    };
  });

  const responseBody = JSON.stringify({ distribution: pools });
  return responseBody;
}
