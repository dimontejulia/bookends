import React, { useState, useEffect } from "react";
import BookListItem from "./BookListItem";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

import "../Shelf.scss";

export default function BookList(props) {
  const { books, setCurrBook, wishlist } = props;
  const [results, setResults] = useState(books);
  const [form, setForm] = useState("");

  const formatStatus = (inputStatus) => {
    switch (inputStatus) {
      case "In Progress":
        return "Reading";
      case "Finished":
        return "Read it";
      case "On my list":
        return "";
      case "":
        return "New";
      default:
        return "New";
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setForm(value);
  };

  //map- take in obj of objs (books)
  const searchBooks = (bookObj, searchTerm) => {
    if (!bookObj) {
      return;
    }
    if (Array.isArray(searchTerm)) {
      searchTerm = searchTerm.join();
    }
    searchTerm = searchTerm.toLowerCase();
    let fresults = {};
    //iterate over books obj - values
    Object.values(bookObj).map((iBook) => {
      //Iterate over values of inner obj
      Object.values(iBook).map((val) => {
        if (val) {
          val = val.toString().toLowerCase();
          //Check values for search term (includes
          if (val.includes(searchTerm)) {
            fresults = { ...fresults, [iBook.id]: { ...iBook } };
          }
        }
      });
    });
    //Result is object of objects send to parser
    return fresults;
  };

  useEffect(() => {
    setResults(searchBooks(books, form));
  }, [form, books]);

  // const initList = books
  //   ? Object.values(books).map((book) => (
  //       <BookListItem
  //         title={book.title}
  //         author={book.author}
  //         first_publish_year={book.first_publish_year}
  //         subject={book.subject}
  //         bookID={book.id}
  //         bookStatus={formatStatus(book.status)}
  //         setCurrBook={setCurrBook}
  //         listName={props.listName}
  //       />
  //     ))
  //   : 0;

  const parsedList =
    results &&
    Object.values(results).map((book) => (
      <BookListItem
        key={book.id}
        title={book.title}
        author={book.author}
        first_publish_year={book.first_publish_year}
        subject={book.subject}
        bookID={book.id}
        bookStatus={formatStatus(book.status)}
        setCurrBook={setCurrBook}
        listName={props.listName}
      />
    ));

  const resultsCount = parsedList ? parsedList.length : results;
  return (
    <section>
      <Form className="search-books-bar">
        <FormControl
          onChange={handleChange}
          id="searchBook"
          name="searchBook"
          type="text"
          className="search-bar"
          value={form}
          placeholder="Search by title, author, genre etc."
        />
      </Form>
      <div className="cards">
        {resultsCount || form ? parsedList : parsedList}
      </div>
    </section>
  );
}
