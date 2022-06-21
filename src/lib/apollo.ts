import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o5fn9q0pre01z2ca7m6klu/master",
  cache: new InMemoryCache()
})