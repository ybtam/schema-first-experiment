import {UserModule} from "../typedef/module-types.ts";
import {users} from "../schema.ts";
import {db} from "../../../db";

export const mutation: UserModule.MutationResolvers = {
  createUser: async (parent, {input}) => {
    const newUser = await db
      .insert(users)
      .values(input)
      .returning()

    return newUser[0]
  }

}
