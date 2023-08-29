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

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: "No body provided",
      };
    }
    const parsedBody: CallBody = JSON.parse(event.body);
    if (!isCallBody(parsedBody)) {
      return {
        statusCode: 400,
        body: "Invalid body provided",
      };
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
    let res = graphRes ? JSON.stringify({ root, parsedSnapshotWithProofs }) : "{}";
    return {
      statusCode: 200,
      body: res,
    };
  } catch (error) {
    console.error("Error", error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};

function isCallBody(body: any): body is CallBody {
  return typeof body === "object" && body !== null && "weekId" in body && "distribution" in body;
}
