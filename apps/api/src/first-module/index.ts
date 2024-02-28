import { createModule } from 'graphql-modules'
import {FirstModuleModule} from "./typedef/module-types.ts";
import { loadFilesSync } from '@graphql-tools/load-files';
import { join } from 'path';

const resolvers: FirstModuleModule.Resolvers = {
  Query: {
    hello: () => 'world'
  }
}

export const firstModule = createModule({
  id: 'first-module',
  dirname: __dirname,
  typeDefs: loadFilesSync(join(__dirname, './typeDef/*.graphql')),
  resolvers
})
