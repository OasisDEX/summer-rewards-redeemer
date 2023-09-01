import { APIGatewayProxyResult } from "aws-lambda";
import { ErrorResponse, schemaMap } from "../types/requests";

export async function validateRequestBody<T>(body: object, type: string): Promise<T | null> {
  try {
    const schema = schemaMap[type];
    const value = await schema.validateAsync(body);
    return value as T;
  } catch (error) {
    console.error("Error validating body", error);
    return null;
  }
}

export function createSuccessResponse(body: string): APIGatewayProxyResult {
  return {
    statusCode: 200,
    body,
  };
}

export function createErrorResponse(error: unknown, statusCode?: number): APIGatewayProxyResult {
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
