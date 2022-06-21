import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oet2gg25pz01z24osj018c/master',
  cache: new InMemoryCache(),
});
