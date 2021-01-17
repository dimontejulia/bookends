import React from "react";
import BooksList from "./BooksList";
import SearchBar from "./SearchBar";

export default function Index() {
  state = { books: [], isFetching: false, query: "", numFound: 0 };

  onSearch = async (e) => {
    e.preventDefault();
    this.setState({ isFetching: true, books: [] });
    const result = await client.findBooks(this.state.query);
    const { docs = [], numFound = 0 } = result;
    this.setState({ books: docs, isFetching: false, numFound });
  };

  onQueryChange = ({ target: { value } }) => {
    this.setState({ query: value });
  };
  return (
    <div>
      <h1>Search Results</h1>
      <SearchBar
        onQueryChange={this.onQueryChange}
        onSearch={this.onSearch}
        query={this.state.query}
      />
      <BooksList
        loading={this.state.isFetching}
        books={this.state.books}
        count={this.state.numFound}
      />
    </div>
  );
}
