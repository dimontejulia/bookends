import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

import InputGroup from "react-bootstrap/InputGroup";

const SearchForm = ({ query, onQueryChange, onSearch }) => {
  return (
    <Form onSubmit={onSearch}>
      <FormControl
        type="text"
        placeholder="Search Books: search by book title, author name..."
        className="mr-sm-2"
        defaultValue={query}
        onChange={onQueryChange}
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};

export default SearchForm;
