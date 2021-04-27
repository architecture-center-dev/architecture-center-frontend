import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import {createApolloClient, initializeApollo} from "./apolloClient"

describe("ApolloClient", () => {
    it("createApolloClient() should return ApolloClient instance", async () => {

      const apolloClient: ApolloClient<NormalizedCacheObject> = createApolloClient();

      expect(apolloClient).toBeInstanceOf(ApolloClient);
        
    });
    
    it("initializeApollo() should return ApolloClient instance", async () => {

      const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();

      expect(apolloClient).toBeInstanceOf(ApolloClient);
        
    });
});
