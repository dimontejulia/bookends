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

  const booklistitem = function (book) {
    let subject = book.subject;

    if (Array.isArray(book.subject)) {
      subject = book.subject.join();
    }
    if (
      subject.toLowerCase().includes(searchWord.toLowerCase()) ||
      book.title.toLowerCase().includes(searchWord.toLowerCase()) ||
      book.author.toLowerCase().includes(searchWord.toLowerCase())
    ) {
      return (
        <BookListItem
          title={book.title}
          author={book.author}
          first_publish_year={book.first_publish_year}
          subject={book.subject}
          bookID={book.id}
          bookStatus={formatStatus(book.status)}
          setCurrBook={setCurrBook}
        />
      );
    }
  };

  //map- take in obj of objs (books)
  const searchBooks = useCallback(
    (bookObj, searchTerm) => {
      if (Array.isArray(searchTerm)) {
        searchTerm = searchTerm.join();
      }
      searchTerm = searchTerm.toLowerCase();
      const results = Object.values(books).map((book) => {
        console.log('SEARCH', book);
        console.log('Term', searchTerm);

        return Object.values(book).map((val) => {
          // console.log('val', val);
          return val.toString().includes(searchTerm);
        });
        // books.id
      });
    },
    [form]
  );
  //iterate over books obj - values
  //Iterate over values of inner obj
  //Check values for search term (includes
  //Feed new arry into parsing map

  useEffect(() => {
    //Run Search of myBooks Generate new List
    console.log('USE EFFECT FORM');
    searchBooks(books, form);
  }, [form]);
  //UseEffect watching searchTerm
  //When term changes run

  const parsedList =
    books && Object.values(books).map((book) => booklistitem(book));

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
