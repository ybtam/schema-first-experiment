import {UserModule} from "../typedef/module-types.ts";
import {db} from "../../../db";
import {users} from "../schema.ts";
import {eq} from "drizzle-orm";
import type {User} from "../../../generated-types/graphql.ts";

const queries: UserModule.QueryResolvers = {
  user: async (parent, {id}) => {
    return (
      await db.query
      .users
      .findFirst({where: eq(users.id, id)})
    ) as User;
  },
  users: async (parent, ) => {
    return db.query.users.findMany()
  }
}

export default queries;
