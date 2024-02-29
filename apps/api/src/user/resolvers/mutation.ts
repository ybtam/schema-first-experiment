import {UserModule} from "../typedef/module-types.ts";
import {insertUserSchema, users} from "../schema.ts";
import {db} from "../../../db";
import {GraphQLError} from "graphql/error";
import {ZodError} from "zod";

export const mutation: UserModule.MutationResolvers = {
  createUser: async (parent, {input}) => {
    try {
      const newUser = await db
        .insert(users)
        .values(insertUserSchema.parse(input))
        .onConflictDoNothing({ target: users.email })
        .returning();

      if (!newUser.length) throw new GraphQLError('User with this email already exists');
      return newUser[0] satisfies UserModule.User;
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        const errorMessage = error.errors.map((e) => e.message).join('\n');
        throw new GraphQLError(errorMessage);
      }
      throw error instanceof GraphQLError ? error : new GraphQLError('An unexpected error occurred');
    }
  }
}
