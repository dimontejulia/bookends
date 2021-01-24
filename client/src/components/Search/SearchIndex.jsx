import React, { Fragment, useState, useEffect, useCallback } from 'react';
import * as client from './OpenLibraryClient.jsx';
import BooksList from './BooksList.jsx';
import SearchForm from './SearchForm.jsx';
import useDebounce from '../../hooks/useDebounce';
import '../Search.scss';

const SearchIndex = (props) => {
  const [isFetching, setIsFetching] = useState(false);
  const [books, setBooks] = useState([]);
  const [numFound, setNumFound] = useState(0);
  const [query, setQuery] = useState('');

  const onSearch = useCallback(async (e) => {
    // e.preventDefault();
    if (!term) {
      return;
    }
    setIsFetching(true);
    const result = await client.findBooks(term);
    const { docs = [], numFound = 0 } = result;
    setIsFetching(false);
    setBooks(docs);
    setNumFound(numFound);
  });

  const onQueryChange = ({ target: { value } }) => {
    setQuery(value);
  };

  //Live Search
  const term = useDebounce(query, 1000);
  useCallback(onSearch, [term]);
  useEffect(() => {
    onSearch(term);
  }, [term]);

  return (
    <Fragment>
      <section className='section'>
        <div className='container'>
          <h1 className='title has-text-centered'>Open Library books search</h1>
        </div>
      </section>
      <SearchForm onQueryChange={onQueryChange} query={query} />
      <BooksList
        loading={isFetching}
        books={books}
        count={numFound}
        userBooks={props.userBooks}
        setUserBooks={props.setUserBooks}
        currBook={props.currBook}
        setCurrBook={props.setCurrBook}
        wishlist={props.wishlist}
        setWishlist={props.setWishlist}
        newBook={props.newBook}
        show={props.show}
        setShow={props.setShow}
        setClubBook={props.setClubBook}
        clubs={props.clubs}
      />
    </Fragment>
  );
};

export default SearchIndex;
