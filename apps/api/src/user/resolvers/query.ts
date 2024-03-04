import {UserModule} from "../typedef/module-types.ts";
import {db} from "../../../db";
import {users} from "../schema.ts";
import {eq} from "drizzle-orm";
import type {User} from "../../../generated-types/graphql.ts";
import {getRequestedFields} from "../../../utils/get-request-fields.ts";

const queries: UserModule.QueryResolvers = {
  user: async (parent, {id}, context, info) => {
    const requestedFields = getRequestedFields(info);

    return (
      await db.query
      .users
      .findFirst({
        columns: requestedFields,
        where: eq(users.id, id)
      })
    ) as User;
  },
  users: async (parent, args, context, info ) => {
    try {
      const requestedFields = getRequestedFields(info);

      return (await db.query.users.findMany({
        columns: requestedFields
      })) as User[];
    } catch (e: unknown) {
      console.error(e);

      return []
    }
  }
}

export default queries;
