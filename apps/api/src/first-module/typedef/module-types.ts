/* eslint-disable */
import * as Types from "../../../typedef/graphql";
import * as gm from "graphql-modules";
export namespace FirstModuleModule {
  interface DefinedFields {
    Query: 'hello';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      hello?: gm.Middleware[];
    };
  };
}