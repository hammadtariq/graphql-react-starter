import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import {
  GetAuthorsQuery,
  AddBookMutation,
  GetBooksQuery
} from "../queries/queries";

class AddBook extends Component {
  state = {
    name: "",
    genre: "",
    authorId: ""
  };

  getAuthorsList = () => {
    const data = this.props.GetAuthorsQuery;
    if (data.loading) {
      return <option disabled>Fetching Authors</option>;
    } else {
      return data.authors.map(author => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ));
    }
  };

  submitform = e => {
    e.preventDefault();
    console.log("state", this.state);
    const { name, genre, authorId } = this.state;
    this.props.AddBookMutation({
      variables: { name, genre, authorId },
      refetchQueries: [{ query: GetBooksQuery }] // will fire the provided query after mutation
    });
  };

  render() {
    console.log("props", this.props);
    return (
      <form onSubmit={this.submitform.bind(this)}>
        <div className="field">
          <label>Book Name</label>
          <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Book Genre</label>
          <input
            type="text"
            onChange={e => this.setState({ genre: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Authors</label>
          <select onChange={e => this.setState({ authorId: e.target.value })}>
            <option>Select Author</option>
            {this.getAuthorsList()}
          </select>
        </div>
        <div className="field">
          <button type="submit">+</button>
        </div>
      </form>
    );
  }
}

export default compose(
  graphql(GetAuthorsQuery, { name: "GetAuthorsQuery" }),
  graphql(AddBookMutation, { name: "AddBookMutation" })
)(AddBook);
