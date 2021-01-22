import React from "react";
import AddBookButton from "./AddBookButton";
import BookListItem from "./BookListItem";
import CardColumns from "react-bootstrap/CardColumns";

export default function BookList(props) {
  const { books, setUserBooks, setCurrBook } = props;
  //books is object of objects (indv Books)
  console.log("BOOK LIST", props);
  const formatStatus = (inputStatus) => {
    switch (inputStatus) {
      case "in_progress":
        return "Reading";

      case "finished":
        return "Read it";
        break;
    }
  };
  const searchWord = "women";
  console.log("console.log books", books);
  const booklistitem = function (book) {
    if (
      book.subject.includes(searchWord) ||
      book.title.includes(searchWord) ||
      book.author.includes(searchWord)
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

  const parsedList =
    books && Object.values(books).map((book) => booklistitem(book));

  return (
    <section>
      <CardColumns>{parsedList}</CardColumns>
    </section>
  );
}
