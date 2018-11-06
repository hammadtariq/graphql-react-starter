import React, { Component } from "react";
import { graphql } from "react-apollo";
import { GetBooksQuery } from "../queries/queries";
import BookDetails from "../components/BookDetails";

class BookList extends Component {
  state = {};

  generateList() {
    const data = this.props.data;
    if (data.loading) {
      return <li>Fetching Books</li>;
    } else {
      return data.books.map(book => (
        <li
          key={book.id}
          onClick={e => {
            this.setState({ selected: book.id });
          }}
        >
          {book.name}
        </li>
      ));
    }
  }

  render() {
    console.log("props", this.props);
    return (
      <div>
        <div>
          <ul id="book-list">{this.generateList()}</ul>
        </div>
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(GetBooksQuery)(BookList);
