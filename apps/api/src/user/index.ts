import {createModule} from "graphql-modules";
import {join} from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import queries from "./resolvers/query.ts";
import {UserModule} from "./typedef/module-types.ts";
import {mutation} from "./resolvers/mutation.ts";

export const userModule = createModule({
  id: 'user-module',
  dirname: __dirname,
  typeDefs: loadFilesSync(join(__dirname, './typeDef/*.graphql')),
  resolvers: {
    Query: queries,
    Mutation: mutation
  } satisfies UserModule.Resolvers
})
