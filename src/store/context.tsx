import React, { createContext, useContext } from "react";
import {
  ApolloQueryResult,
  useQuery,
  useLazyQuery,
  OperationVariables,
  QueryResult,
} from "@apollo/client";
import {
  ICharacter,
  QueryContextValue,
  QueryResultProviderProps,
} from "./types";
import { GET_CHARACTERS, CHARACTER } from "../constants/queries";

const QueryResultContext = createContext<QueryContextValue<any>>({
  queryData: { loading: true },
  refetch: () => Promise.resolve({} as ApolloQueryResult<any>),
  characterData: {
    getCharachter: (variables: OperationVariables) =>
      ({} as Promise<QueryResult<ICharacter, OperationVariables>>),
    character: {},
    loading: false,
  },
});

export const QueryResultProvider = ({
  variables,
  children,
}: QueryResultProviderProps) => {
  const { data, error, loading, refetch } = useQuery(GET_CHARACTERS, {
    variables,
    notifyOnNetworkStatusChange: true,
  });
  const [getCharachter, characterData] = useLazyQuery(CHARACTER);

  const value = {
    queryData: { data, error, loading },
    refetch,
    characterData: {
      getCharachter,
      character: characterData.data?.character,
      loading: characterData.loading,
    },
  };
  return (
    <QueryResultContext.Provider value={value}>
      {children}
    </QueryResultContext.Provider>
  );
};

export const useQueryResult = () => {
  const context = useContext(QueryResultContext);
  if (!context) {
    throw new Error("useQueryResult must be used within a QueryResultProvider");
  }
  return context;
};
