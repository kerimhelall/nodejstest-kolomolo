import { dbClient, TableNames } from "../common/db";
import { Role } from "./role";

type UserObject = {
  id: string; role: string; group_id: string
}
export class User {
  id;
  role;
  groupId;

  constructor(input: UserObject) {
    this.id = input.id;
    this.role = Role.from(input.role);
    this.groupId = input.group_id;
  }

  static async getById(id: string) {
    const res = (await dbClient.get({ TableName: TableNames.users, Key: { id } }).promise());

    if (!res?.Item) {
      throw new Error("User does not exist");
    }
    return new User(res.Item as UserObject);
  }
}
