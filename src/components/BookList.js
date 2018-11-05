import React, { Component } from "react";
import { graphql } from "react-apollo";
import { GetBooksQuery } from "../queries/queries";

class BookList extends Component {
  state = {};

  generateList() {
    const data = this.props.data;
    if (data.loading) {
      return <li>Fetching Books</li>;
    } else {
      return data.books.map(book => <li key={book.id}>{book.name}</li>);
    }
  }

  render() {
    console.log("props", this.props);
    return (
      <div>
        <h1>Book Lists</h1>
        <ul>{this.generateList()}</ul>
      </div>
    );
  }
}

export default graphql(GetBooksQuery)(BookList);
