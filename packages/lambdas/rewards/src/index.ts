import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { fetchWeeklyData, graphClient } from "common/utils/graph.utils";
import { calculateWeeklySnapshot } from "../../../snapshot/get-snapshot";
import { BigNumber } from "ethers";
import { Distribution, ParsedSnapshotWithProofs, createMerkleTree } from "common";

interface CallBody {
  weekId: number;
  distribution: Distribution[];
  totalWeeklyRewards: string;
}

interface ErrorResponse {
  error: string;
}

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    if (!event.body) {
      return createErrorResponse("No body provided");
    }
    const parsedBody = parseCallBody(event.body);
    if (!parsedBody) {
      return createErrorResponse("Invalid body provided");
    }
    const graphRes = await fetchWeeklyData(
      parsedBody.weekId,
      parsedBody.distribution.map((pool: any) => pool.address)
    );
    const parsedSnapshot = calculateWeeklySnapshot(
      graphRes,
      parsedBody.weekId,
      parsedBody.distribution.map((distribution: Distribution) => ({
        ...distribution,
        address: distribution.address.toLowerCase(),
      })),
      BigNumber.from(parsedBody.totalWeeklyRewards)
    );
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
};

function parseCallBody(body: string): CallBody | null {
  try {
    const parsedBody = JSON.parse(body) as CallBody;
    if (isCallBody(parsedBody)) {
      return parsedBody;
    }
  } catch (error) {
    console.error("Error parsing body", error);
  }
  return null;
}

function isCallBody(body: any): body is CallBody {
  return typeof body === "object" && body !== null && "weekId" in body && "distribution" in body;
}

function createSuccessResponse(body: string): APIGatewayProxyResult {
  return {
    statusCode: 200,
    body,
  };
}

function createErrorResponse(error: unknown, statusCode?: number): APIGatewayProxyResult {
  const responseBody: ErrorResponse = { error: "Unknown error" };
  if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
    responseBody.error = error.message;
  } else if (typeof error === "string") {
    responseBody.error = error;
  }
  return {
    statusCode: statusCode || 400,
    body: JSON.stringify(responseBody),
  };
}
