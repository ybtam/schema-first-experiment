import {UserModule} from "../typedef/module-types.ts";
import {db} from "../../../db";
import {users} from "../schema.ts";
import {eq} from "drizzle-orm";

const queries: UserModule.QueryResolvers = {
  user: async (parent, {id}) => {
    const selectedUsers = await db
      .select()
      .from(users)
      .where(eq(users.id, id))

    return selectedUsers[0]
  },
  users: async (parent, ) => {
    return db
      .select()
      .from(users);
  }
}

export default queries;
