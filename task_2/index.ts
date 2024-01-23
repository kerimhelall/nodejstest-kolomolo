// index.ts

import { authorized } from "./src/authorized";
import { updateResource, getResource } from "./src/manageResource";
import type { APIGatewayEvent } from "aws-lambda";

interface Response {
  statusCode: number;
  body: Object;
}
//instead of this type we can use APIGatewayProxyResult from aws-lambda but the body and tests are implemented that its an object and not string

const validateRequest = (userId: string | undefined, resourceId: string | undefined, action: string | undefined): Response | null => {
  if (userId === undefined || resourceId === undefined || action === undefined || (action !== "GET" && action !== "PATCH")) {
    return { statusCode: 400, body: { error: "Invalid request parameters" } };
  }
  return null;
};

export const handler = async function (event: Partial<APIGatewayEvent>): Promise<Response> {
  const { userId, resourceId } = event.pathParameters!;
  const action = event.httpMethod as "GET" | "PATCH";
  const validationError = validateRequest(userId, resourceId, action);
  if (validationError) {
    return validationError;
  }


  try {
    // Authorize user access to the resource
    const authResult = await authorized(userId!, resourceId!, action);

    if (!authResult.authorized) {
      return { statusCode: 403, body: JSON.stringify({ error: "Unauthorized access" }) };
    }

    // Return value from resource or update it based on the action
    let result;

    if (action === "GET") {
      result = await getResource(resourceId!);
    } else if (action === "PATCH") {
      if (authResult.groupId === undefined) {
        return { statusCode: 500, body: JSON.stringify({ error: "Group ID not available for update" }) };
      }
      result = await updateResource(resourceId!, authResult.groupId);
    }

    return { statusCode: 200, body: { value: result } };
  } catch (error) {
    console.error("Error processing request:", error);
    return { statusCode: 500, body: JSON.stringify({ error: "Internal server error" }) };
  }
};
