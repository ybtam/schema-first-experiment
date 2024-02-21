// This is your application, it contains your GraphQL schema and the implementation of it.
import {createApplication} from "graphql-modules";
import {firstModule} from "./first-module";

const application = createApplication({
  modules: [firstModule]
})

// This is your actual GraphQL schema
const mySchema = application.schema
