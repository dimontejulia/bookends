import React from "react";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const SearchForm = ({ query, onQueryChange, onSearch }) => {
  return (
    <section className="search-container">
      {/* <Form onSubmit={onSearch}> */}
      <Form>
        <FormControl
          type="text"
          placeholder="Search Books: search by book title, author name..."
          className="open-library-search"
          defaultValue={query}
          onChange={onQueryChange}
          onKeyPress={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
        />
        {/* <Button type='submit' variant='outline-success'>
          Search
        </Button> */}
      </Form>
    </section>
  );
};

export default SearchForm;
