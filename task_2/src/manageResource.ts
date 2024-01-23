// manageResource.ts

import { group } from "console";
import { Resource } from "models/resource";

export async function getResource(resourceId: string): Promise<number> {
  const resource = await Resource.getById(resourceId);
  return resource.value;
}

export async function updateResource(resourceId: string, groupId: string): Promise<number> {
  let resource = await Resource.getById(resourceId);

  if (!resource) {
    // If the resource does not exist, create it with 0 value in the user's group
    resource = new Resource({ id: resourceId, value: 0, group_id: groupId });
  } else {
    // Increase the resource value by 1
    resource.value += 1;
  }

  // Save or update the resource in the database
  // Assuming you have a saveOrUpdate method in your Resource class
  await resource.saveOrUpdate();

  return resource.value;
}
