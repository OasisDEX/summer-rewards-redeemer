import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { handleWeeklySnapshot, handleDailySnapshot, handleTokenPairs, handleToken, handleCuratedTokens } from "./handlers";
import { createErrorResponse } from "./utils";



export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const BASE_PATH = event.stageVariables ? `/${event.stageVariables?.stageName}` : "";

  if (event.httpMethod == "POST") {
    if (event.path == `${BASE_PATH}/` || event.path == `${BASE_PATH}` || event.path == `${BASE_PATH}/snapshot/weekly`) {
      return handleWeeklySnapshot(event);
    }
    if (event.path == `${BASE_PATH}/snapshot/daily`) {
      return handleDailySnapshot(event);
    } else if (event.path == `${BASE_PATH}/pools/token-pairs`) {
      return handleTokenPairs(event);
    } else if (event.path == `${BASE_PATH}/pools/token`) {
      return handleToken(event);
    } else if (event.path == `${BASE_PATH}/pools/curated-tokens`) {
      return handleCuratedTokens(event);
    } else {
      return createErrorResponse("Invalid path", 400);
    }
  } else {
    return createErrorResponse("Method not allowed", 405);
  }
};

