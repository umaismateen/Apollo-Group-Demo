import {
  ApolloQueryResult,
  OperationVariables,
  ApolloError,
} from "@apollo/client";

export interface ICharacter {
  gender: string;
  image: string;
  id: string;
  name: string;
  species: string;
}

export interface QueryResult<TData> {
  data?: TData;
  error?: ApolloError;
  loading: boolean;
}

export interface QueryContextValue<TData> {
  queryData: QueryResult<TData>;
  refetch: (variables: OperationVariables) => Promise<ApolloQueryResult<TData>>;
  characterData: {
    getCharachter: (
      variables: OperationVariables
    ) => Promise<QueryResult<TData>>;
    character: TData;
    loading: boolean;
  };
}

export interface QueryResultProviderProps<
  TVariables extends OperationVariables | undefined = {}
> {
  variables?: TVariables;
  children: React.ReactNode;
}
