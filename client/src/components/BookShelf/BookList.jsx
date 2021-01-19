import React from 'react';
import AddBookButton from './AddBookButton';
import BookListItem from './BookListItem';

export default function BookList(props) {
  const { books, setUserBooks, setCurrBook } = props;
  const parsedList =
    books &&
    books.map((userBookID) => (
      <BookListItem
        title='Book title'
        author='Book Author'
        bookID={userBookID}
        setCurrBook={setCurrBook}
      />
    ));

  return (
    <section>
      <h1>My Books</h1>
      {/* <AddBookButton /> */}
      {parsedList}
    </section>
  );
}
