import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query Query($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        pages
      }
      results {
        name
        image
        id
      }
    }
  }
`;

export const CHARACTER = gql`
  query Character($characterId: ID!) {
    character(id: $characterId) {
      gender
      image
      id
      name
      species
    }
  }
`;
