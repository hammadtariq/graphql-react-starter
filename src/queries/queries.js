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

const GetBookDetailsQuery = gql`
  query($id: ID) {
    book(id: $id) {
      name
      id
      genre
      author {
        id
        name
        books {
          name
          id
        }
      }
    }
  }
`;

export { GetAuthorsQuery, GetBooksQuery, AddBookMutation, GetBookDetailsQuery };
