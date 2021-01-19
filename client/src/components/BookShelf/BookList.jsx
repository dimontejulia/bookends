import React from 'react';
import AddBookButton from './AddBookButton';
import BookListItem from './BookListItem';
import CardColumns from 'react-bootstrap/CardColumns';

export default function BookList(props) {
  const { books, setUserBooks, setCurrBook } = props;
  const parsedList =
    books &&
    books.map((book) => (
      <BookListItem
        title={book.title}
        author={book.author}
        bookID={book.id}
        setCurrBook={setCurrBook}
      />
    ));

  return (
    <section>
      <h1>My Books</h1>
      <CardColumns>
        {/* <AddBookButton /> */}
        {parsedList}
      </CardColumns>
    </section>
  );
}
