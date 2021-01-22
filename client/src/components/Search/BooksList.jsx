import React from "react";
import Book from "./Book.jsx";
import Spinner from "react-bootstrap/Spinner";

const BooksList = ({ loading = false, books = [], count = 0, ...props }) => {
  return (
    <section className="section">
      <div className="container">
        {loading && <Spinner animation="border" variant="secondary" />}
        {books.length > 0 && (
          <p className="subtitle">
            Showing <strong>{books.length}</strong> of <strong>{count}</strong>{" "}
            results.
          </p>
        )}
        {/* take out slice operator if we want more than 5 results */}
        {books.slice(0, 5).map((book) => (
          <Book
            book={book}
            key={book.key}
            userBooks={props.userBooks}
            setUserBooks={props.setUserBooks}
            currBook={props.currBook}
            setCurrBook={props.setCurrBook}
            wishlist={props.wishlist}
            setWishlist={props.setWishlist}
            newBook={props.newBook}
            show={props.show}
            setShow={props.setShow}
            setClubBook={props.setClubBook}
            clubs={props.clubs}
          />
        ))}
      </div>
    </section>
  );
};

export default BooksList;
