import React from "react";
import BookList from "./BookList";
import CardGroup from "react-bootstrap/CardGroup";
import { numBooksAward, oldBook, newBook } from "./awards";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Wave from "../Wave";
import "../Shelf.scss";

export default function Index(props) {
  const {
    books,
    wishlist,
    setUserBooks,
    setWishlist,
    setCurrBook,
    user,
    clubs,
  } = props;

  const date = new Date();
  const currentYear = date.getFullYear();

  const numBooks = books ? Object.keys(books).length : 0;
  const years = books
    ? Object.values(books).map((book) => parseInt(book.first_publish_year))
    : null;
  const oldestBook = Math.min.apply(Math, years);
  const newestBook = Math.max.apply(Math, years);

  return (
    <div>
      <Wave />
      <div className="container">
        <h1 className="page-title">Book Shelf</h1>
      </div>
      <div className="container">
        <section className="sidebar">
          <div className="card-group-awards">
            <h1 className="sidebar__subheading">Reading Awards</h1>
            {numBooksAward(numBooks)}
            {oldBook(currentYear, oldestBook)}
            {newBook(currentYear, newestBook)}
          </div>
        </section>
        <section className="main-content">
          <Tabs defaultActiveKey="mybooks" id="my-shelf-tabs">
            <Tab eventKey="mybooks" title="My Books">
              <BookList
                books={books}
                setUserBooks={setUserBooks}
                setCurrBook={setCurrBook}
              />
            </Tab>
            <Tab eventKey="wishlist" title="Wishlist">
              <BookList
                books={wishlist}
                setUserBooks={setWishlist}
                setCurrBook={setCurrBook}
              />
            </Tab>
          </Tabs>
        </section>
      </div>
    </div>
  );
}
