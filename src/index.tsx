import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryResultProvider } from "./store/context";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

import client from "./ApolloClient/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <QueryResultProvider>
          <App />
        </QueryResultProvider>
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>
);
