import { gql } from "apollo-boost";

const GetAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const GetBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const AddBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

export { GetAuthorsQuery, GetBooksQuery, AddBookMutation };
