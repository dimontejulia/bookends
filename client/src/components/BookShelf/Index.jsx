import React from 'react';
import BookList from './BookList';

export default function Index(props) {
  const { books, setUserBooks, setCurrBook } = props;
  return (
    <div>
      <BookList
        books={books}
        setUserBooks={setUserBooks}
        setCurrBook={setCurrBook}
      />
    </div>
  );
}
