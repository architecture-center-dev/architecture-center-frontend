import { useMemo } from "react";
 import { ApolloClient, HttpLink, InMemoryCache } from 
 "@apollo/client";

 let apolloClient;

 function createApolloClient() {
   return new ApolloClient({
     ssrMode: typeof window === "undefined", // set to true for SSR
     link: new HttpLink({
       uri: "http://localhost/solutions",
     }),
     cache: new InMemoryCache(),
   });
 }