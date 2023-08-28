import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { graphClient } from "common/utils/graph.utils";
export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    console.log("Called with event", event);
    if (!event.body) {
      return {
        statusCode: 400,
        body: "No body provided",
      };
    }
    const parsedBody = JSON.parse(event.body);
    const graphRes = await graphClient.WeeklyPartnerRewards({ week: parsedBody.day, pools: parsedBody.pools });

    let res = graphRes ? JSON.stringify(graphRes) : "{}";

    return {
      statusCode: 200,
      body: res,
    };
  } catch (error) {
    console.error("Error", error);
    return {
      statusCode: 500,
      body: "",
    };
  }
};
