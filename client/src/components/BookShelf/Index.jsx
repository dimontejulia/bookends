import React from "react";
import BookList from "./BookList";
import Image from "react-bootstrap/Image";

export default function Index(props) {
  const { books, setUserBooks, setCurrBook, user, clubs } = props;
  const numBooks = Object.keys(books).length;
  const numBooksAward = function () {
    if (numBooks > 0) {
      return (
        <div>
          <p>Gold Reader</p>
        </div>
      );
    } else if (numBooks > 20) {
      return (
        <div>
          <p>Silver Reader</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>Bronze Reader</p>
        </div>
      );
    }
  };

  return (
    <div>
      <h1>Hello!</h1>
      <h2>{numBooksAward()}</h2>
      <p>You have {numBooks} books on your shelf</p>
      <BookList
        books={books}
        setUserBooks={setUserBooks}
        setCurrBook={setCurrBook}
      />
    </div>
  );
}
