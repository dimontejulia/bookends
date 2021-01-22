import React from "react";
import BookList from "./BookList";

export default function Index(props) {
  const { books, setUserBooks, setCurrBook, user, clubs } = props;

  const date = new Date();
  const currentYear = date.getFullYear();

  const numBooks = Object.keys(books).length;
  const years = Object.values(books).map((book) =>
    parseInt(book.first_publish_year)
  );
  const oldestBook = Math.min.apply(Math, years);
  const newestBook = Math.max.apply(Math, years);

  const numBooksAward = function () {
    if (numBooks > 30) {
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
    } else if (numBooks >= 1) {
      return (
        <div>
          <p>Bronze Reader</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>Get reading! </p>
        </div>
      );
    }
  };

  return (
    <div>
      <h1>Hello!</h1>
      <h2>{numBooksAward()}</h2>
      <p>You have {numBooks} books on your shelf</p>
      <p>
        The oldest book you've read is from {oldestBook} written{" "}
        {currentYear - oldestBook} years ago!
      </p>
      <p>The newest book you've read is from {newestBook}.</p>
      <BookList
        books={books}
        setUserBooks={setUserBooks}
        setCurrBook={setCurrBook}
      />
    </div>
  );
}
