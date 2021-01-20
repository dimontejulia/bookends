import React from 'react';
import AddBookButton from './AddBookButton';
import BookListItem from './BookListItem';
import CardColumns from 'react-bootstrap/CardColumns';

export default function BookList(props) {
  const { books, setUserBooks, setCurrBook } = props;
  //books is object of objects (indv Books)

  const parsedList =
    books &&
    Object.values(books).map((book) => (
      <BookListItem
        title={book.title}
        author={book.author}
        bookID={book.id}
        setCurrBook={setCurrBook}
      />
    ));

  return (
    <section>
      <CardColumns>{parsedList}</CardColumns>
    </section>
  );
}
