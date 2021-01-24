import React from "react";
import BookList from "./BookList";
import CardGroup from "react-bootstrap/CardGroup";
import { numBooksAward, oldBook, newBook } from "./awards";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Wave from "../Wave";
import "../Shelf.scss";

export default function Index(props) {
  const { userBooks, wishlist, setUserBooks, setCurrBook, user, clubs } = props;

  const date = new Date();
  const currentYear = date.getFullYear();

  const numBooks = Object.keys(userBooks).length;
  const years = Object.values(userBooks).map((userBook) =>
    parseInt(userBook.first_publish_year)
  );
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
            <h2>Reading Awards</h2>
            {numBooksAward(numBooks)}
            {oldBook(currentYear, oldestBook)}
            {newBook(currentYear, newestBook)}
          </div>
        </section>
        <section className="main-content">
          <Tabs defaultActiveKey="mybooks" id="my-shelf-tabs">
            <Tab eventKey="mybooks" title="My Books">
              <BookList
                books={userBooks}
                setUserBooks={setUserBooks}
                setCurrBook={setCurrBook}
              />
            </Tab>
            <Tab eventKey="wishlist" title="Wishlist">
              <BookList
                books={wishlist}
                setUserBooks={setUserBooks}
                setCurrBook={setCurrBook}
              />
            </Tab>
          </Tabs>
        </section>
      </div>
    </div>
  );
}
