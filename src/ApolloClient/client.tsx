import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RICK_AND_MORTY_API } from "../constants";

const client = new ApolloClient({
  uri: RICK_AND_MORTY_API,
  cache: new InMemoryCache(),
});

export default client;
