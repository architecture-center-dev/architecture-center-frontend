import { useMemo } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from 'apollo-upload-client'
import { setContext } from '@apollo/client/link/context';

 let apolloClient: any;

 const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

 export function createApolloClient() {
   return new ApolloClient({
     ssrMode: typeof window === "undefined", // set to true for SSR
     link: authLink.concat(createUploadLink({
       uri: "http://localhost/graphql",
     }) as any),
     cache: new InMemoryCache(),
   });
 }

 export function initializeApollo(initialState: any = null) {
    const _apolloClient = apolloClient ?? createApolloClient();

    // If your page has Next.js data fetching methods that use Apollo Client,
    // the initial state gets hydrated here
    if (initialState) {
      // Get existing cache, loaded during client side data fetching
      const existingCache = _apolloClient.extract();

      // Restore the cache using the data passed from
      // getStaticProps/getServerSideProps combined with the existing cached data
      _apolloClient.cache.restore({ ...existingCache, ...initialState });
    }

    // For SSG and SSR always create a new Apollo Client
    if (typeof window === "undefined") return _apolloClient;

    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient;
    return _apolloClient;
  }

 export function useApollo(initialState: any) {
    const store = useMemo(() => initializeApollo(initialState), [initialState]);
    return store;
  }