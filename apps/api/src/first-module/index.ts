import { createModule } from 'graphql-modules'
import  * as schema from './typedef/hello.graphql'
import {FirstModuleModule} from "./typedef/module-types.ts";

const resolvers: FirstModuleModule.Resolvers = {
  Query: {
    hello: () => 'world'
  }
}

export const firstModule = createModule({
  id: 'first-module',
  dirname: __dirname,
  typeDefs: [schema],
  resolvers
})
