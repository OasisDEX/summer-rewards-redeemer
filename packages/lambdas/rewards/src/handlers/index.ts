import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import {
  CuratedTokensRequestBody,
  DailySnapshotRequestBody,
  TokenPairRequestBody,
  TokenRequestBody,
  WeeklySnapshotRequestBody,
} from "../types/requests";
import { Distribution, createMerkleTree, ParsedSnapshotWithProofs } from "common";
import { fetchWeeklyData, fetchDailyData, graphClient } from "common/utils/graph.utils";
import { BigNumber } from "ethers";
import { createErrorResponse, validateRequestBody, createSuccessResponse } from "../utils";
import { calculateWeeklySnapshot, calculateDailySnapshot } from "ajna-rewards-snapshot/get-snapshot";

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
    const graphRes = await fetchWeeklyData(
      validatedBody.weekId,
      validatedBody.distribution.map((pool: any) => pool.address)
    );
    let parsedSnapshot = calculateWeeklySnapshot(
      graphRes,
      validatedBody.weekId,
      validatedBody.distribution.map((distribution: Distribution) => ({
        ...distribution,
        address: distribution.address.toLowerCase(),
      })),
      BigNumber.from(validatedBody.totalWeeklyRewards)
    );
    // uncomment for testing
    // parsedSnapshot[0].address = "0xaaf00613a099deae24eeb2c21ad2965cadeac244";
    // parsedSnapshot[0].amount = BigNumber.from("10000000000").toString();
    const { tree, leaves, root } = createMerkleTree(
      parsedSnapshot.map((entry) => ({
        address: entry.address,
        amount: BigNumber.from(entry.amount),
      }))
    );
    const parsedSnapshotWithProofs: ParsedSnapshotWithProofs = parsedSnapshot.map((entry, index) => ({
      ...entry,
      proof: tree.getHexProof(leaves[index]),
    }));
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
    const graphRes = await fetchDailyData(
      validatedBody.dayId,
      validatedBody.distribution.map((pool: any) => pool.address)
    );
    let parsedSnapshot = calculateDailySnapshot(
      graphRes,
      validatedBody.dayId,
      validatedBody.distribution.map((distribution: Distribution) => ({
        ...distribution,
        address: distribution.address.toLowerCase(),
      })),
      BigNumber.from(validatedBody.totalWeeklyRewards)
    );
    // uncomment for testing
    // parsedSnapshot[0].address = "0xaaf00613a099deae24eeb2c21ad2965cadeac244";
    // parsedSnapshot[0].amount = BigNumber.from("10000000000").toString();
    const { tree, leaves, root } = createMerkleTree(
      parsedSnapshot.map((entry) => ({
        address: entry.address,
        amount: BigNumber.from(entry.amount),
      }))
    );
    const parsedSnapshotWithProofs: ParsedSnapshotWithProofs = parsedSnapshot.map((entry, index) => ({
      ...entry,
      proof: tree.getHexProof(leaves[index]),
    }));
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

    const graphRes = await graphClient.TokenPair({
      collateralAddress: validatedBody.pairs[0][0],
      quoteTokenAddress: validatedBody.pairs[0][1],
    });
    const pools = graphRes.pools.map((pool: any) => pool.id);

    const responseBody = JSON.stringify({ pools });
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
    const pools = graphRes.pools.map((pool: any) => pool.id);

    const responseBody = JSON.stringify({ pools });
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
      tokens: validatedBody.tokens,
    });
    const pools = graphRes.pools.map((pool: any) => pool.id);

    const responseBody = JSON.stringify({ pools });
    return createSuccessResponse(responseBody);
  } catch (error) {
    console.error("Error", error);
    return createErrorResponse("Internal server error", 500);
  }
}
