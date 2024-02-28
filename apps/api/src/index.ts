import {createApplication} from "graphql-modules";
import {firstModule} from "./first-module";
import {createYoga} from "graphql-yoga";
import { useGraphQLModules } from '@envelop/graphql-modules'
import bun from "bun";
import {userModule} from "./user";

const application = createApplication({
  modules: [
    firstModule,
    userModule
  ]
})

const yoga = createYoga({
  plugins: [useGraphQLModules(application)]
})

const server = bun.serve({
  fetch: yoga,
  port: 4000,
});

console.info(
  `Server is running on ${new URL(
    yoga.graphqlEndpoint,
    `http://${server.hostname}:${server.port}`
  )}`
)
