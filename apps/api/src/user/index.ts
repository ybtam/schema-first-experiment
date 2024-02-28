import {createModule} from "graphql-modules";
import {UserModule} from "./typedef/module-types.ts";
import {join} from "path";
import { loadFilesSync } from "@graphql-tools/load-files";

const resolvers: UserModule.Resolvers = {
  Query: {
    users: () => []
  }
}

export const userModule = createModule({
  id: 'user-module',
  dirname: __dirname,
  typeDefs: loadFilesSync(join(__dirname, './typeDef/*.graphql')),
  resolvers
})
