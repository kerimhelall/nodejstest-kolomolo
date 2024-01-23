import { dbClient, TableNames } from "../common/db";

type ResourceObject = { id: string; value: number; group_id: string }
export class Resource {
  id;
  value;
  groupId;

  constructor(input: ResourceObject) {
    this.id = input.id;
    this.value = input.value;
    this.groupId = input.group_id;
  }

  static async getById(id: string) {
    const res = (await dbClient.get({ TableName: TableNames.resources, Key: { id } }).promise());

    if (!res?.Item) {
      throw new Error(id);
    }

    return new Resource(res.Item as ResourceObject);
  }

  async saveOrUpdate(): Promise<void> {
    // Assuming you have a DynamoDB PutItem operation to save or update the resource
    await dbClient
      .put({
        TableName: TableNames.resources,
        Item: {
          id: this.id,
          value: this.value,
          group_id: this.groupId,
        },
      })
      .promise();
  }

}
