import { createModule, gql } from 'graphql-modules'

export const firstModule = createModule({
  id: 'first-module',
  dirname: __dirname,
  typeDefs: [
    gql`
      type Query {
        hello: String!
      }
    `
  ],
  resolvers: {
    Query: {
      hello: () => 'world'
    }
  }
})
