import React, { useState, useEffect, useCallback } from 'react';
import BookListItem from './BookListItem';
import CardDeck from 'react-bootstrap/CardDeck';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../Shelf.scss';

export default function BookList(props) {
  const { books, setUserBooks, setCurrBook } = props;
  const [form, setForm] = useState([]);
  const [results, setResults] = useState(books);
  const [searchWord, setSearchWord] = useState('');

  console.log('Form', form);
  console.log('Word', props);

  const formatStatus = (inputStatus) => {
    switch (inputStatus) {
      case 'in_progress':
        return 'Reading';

      case 'finished':
        return 'Read it';
        break;
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setForm(value);
  };

  const handleClick = (e) => {
    setSearchWord(form.value);
    //Form resets w/o message and regardless of success or error...
    setForm((prev) => ({ ...prev, value: '' }));
  };
  const clickReset = (e) => {
    setSearchWord('');
    setForm((prev) => ({ ...prev, value: '' }));
  };

  // const booklistitem = function (book) {
  //   let subject = book.subject;

  //   if (Array.isArray(book.subject)) {
  //     subject = book.subject.join();
  //   }
  //   if (
  //     subject.toLowerCase().includes(searchWord.toLowerCase()) ||
  //     book.title.toLowerCase().includes(searchWord.toLowerCase()) ||
  //     book.author.toLowerCase().includes(searchWord.toLowerCase())
  //   ) {
  //     return (
  //       <BookListItem
  //         title={book.title}
  //         author={book.author}
  //         first_publish_year={book.first_publish_year}
  //         subject={book.subject}
  //         bookID={book.id}
  //         bookStatus={formatStatus(book.status)}
  //         setCurrBook={setCurrBook}
  //       />
  //     );
  //   }
  // };

  //map- take in obj of objs (books)
  const searchBooks = useCallback(
    (bookObj, searchTerm) => {
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

      console.log('Restults', results);
      //Result is object of objects send to parser
      return results;
    },
    [form]
  );
  let searchResults = {};
  useEffect(() => {
    //Watching for changes in form
    //Run Search of myBooks Generate new List
    setResults(searchBooks(books, form));
  }, [form]);
  console.log('RES', results);
  const parsedList =
    books &&
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

  return (
    <section>
      <Form className='search-books-bar'>
        <FormControl
          onChange={handleChange}
          id='searchBook'
          name='searchBook'
          type='text'
          className='search-bar'
          value={form.value}
          placeholder='Search by title, authour, genre etc.'
        />
        <Button
          variant='outline-primary'
          onClick={() => {
            handleClick();
          }}
        >
          Search
        </Button>
        <Button
          variant='outline-dark'
          onClick={() => {
            clickReset();
          }}
        >
          Reset
        </Button>
      </Form>
      <div className='cards'>{parsedList}</div>
    </section>
  );
}
