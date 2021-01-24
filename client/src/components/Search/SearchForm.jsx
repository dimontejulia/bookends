import React from 'react';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const SearchForm = ({ query, onQueryChange, onSearch }) => {
  return (
    <section className='section'>
      <Form onSubmit={onSearch}>
        {/* <Form onSubmit={onQueryChange}> */}
        <FormControl
          type='text'
          placeholder='Search Books: search by book title, author name...'
          className='mr-sm-2'
          defaultValue={query}
          onChange={onQueryChange}
        />
        <Button type='submit' variant='outline-success'>
          Search
        </Button>
      </Form>
    </section>
  );
};

export default SearchForm;
