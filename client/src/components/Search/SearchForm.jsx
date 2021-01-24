import React from "react";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const SearchForm = ({ query, onQueryChange, onSearch }) => {
  return (
    <section>
      <Form onSubmit={onSearch} className="search-container">
        <FormControl
          className="open-library-search"
          type="text"
          placeholder="Search Books: search by book title, author name..."
          defaultValue={query}
          onChange={onQueryChange}
        />
        <Button type="submit" variant="info">
          Search
        </Button>
      </Form>
    </section>
  );
};

export default SearchForm;
