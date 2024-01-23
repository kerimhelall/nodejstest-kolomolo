// src/authorize.ts

import { Role } from "models/role";
import { User } from "models/user";
import { Resource } from "models/resource";

export async function authorized(userId: string, resourceId: string, action: "GET" | "PATCH"): Promise<{ authorized: any; groupId?: string }> {
  try {
    const user = await User.getById(userId);
    const resource = await Resource.getById(resourceId);

    if (!resource) {
      throw new Error("Resource not found");
    }

    if (
      (action === "GET" && (user.role === Role.ADMIN || user.role === Role.GUEST)) ||
      (action === "PATCH" && user.role === Role.ADMIN)
    ) {
      // Check if the user has access based on their role and the group to which the resource belongs
      if (user.groupId === resource.groupId) {
        return { authorized: true, groupId: user.groupId };
      } else {
        return { authorized: false };
      }
    } else {
      throw new Error("Unauthorized access");
    }
  } catch (error: any) {
    return { authorized: false };
  }
}
