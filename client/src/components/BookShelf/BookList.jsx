import React, { useState, useEffect, useMemo } from 'react';
import BookListItem from './BookListItem';
import CardDeck from 'react-bootstrap/CardDeck';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../Shelf.scss';

export default function BookList(props) {
  const { books, setUserBooks, setCurrBook } = props;
  const [results, setResults] = useState();
  const [form, setForm] = useState('');

  const formatStatus = (inputStatus) => {
    switch (inputStatus) {
      case 'in_progress':
        return 'Reading';
      case 'finished':
        return 'Read it';
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    console.log('FORM VALUE', e);
    setForm(value);
  };

  //map- take in obj of objs (books)
  const searchBooks = (bookObj, searchTerm) => {
    console.log('SEARCH', bookObj, searchTerm);
    if (Array.isArray(searchTerm)) {
      searchTerm = searchTerm.join();
    }
    searchTerm = searchTerm.toLowerCase();
    let results = {};
    //iterate over books obj - values
    Object.values(bookObj).map((iBook) => {
      //Iterate over values of inner obj
      Object.values(iBook).map((val) => {
        val = val.toString().toLowerCase();

        //Check values for search term (includes
        if (val.includes(searchTerm)) {
          results = { ...results, [iBook.id]: { ...iBook } };
        }
      });
    });
    //Result is object of objects send to parser
    return results;
  };

  useEffect(() => {
    console.log('STATE', books, results, form);
    setResults(searchBooks(books, form));
  }, [form]);

  const initList = Object.values(books).map((book) => (
    <BookListItem
      title={book.title}
      author={book.author}
      first_publish_year={book.first_publish_year}
      subject={book.subject}
      bookID={book.id}
      bookStatus={formatStatus(book.status)}
      setCurrBook={setCurrBook}
    />
  ));

  const parsedList =
    results &&
    Object.values(results).map((book) => (
      <BookListItem
        title={book.title}
        author={book.author}
        first_publish_year={book.first_publish_year}
        subject={book.subject}
        bookID={book.id}
        bookStatus={formatStatus(book.status)}
        setCurrBook={setCurrBook}
      />
    ));

  console.log('Book Count', initList.length);
  const resultsCount = parsedList ? parsedList.length : results;
  console.log('Search Results', resultsCount);
  return (
    <section>
      <Form className='search-books-bar'>
        <FormControl
          onChange={handleChange}
          id='searchBook'
          name='searchBook'
          type='text'
          className='search-bar'
          value={form}
          placeholder='Search by title, authour, genre etc.'
        />
      </Form>
      <div className='cards'>
        {resultsCount || form ? parsedList : initList}
      </div>
    </section>
  );
}
