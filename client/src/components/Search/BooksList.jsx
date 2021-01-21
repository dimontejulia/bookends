import React from "react";
import Book from "./Book.jsx";

const BooksList = ({ loading = false, books = [], count = 0, ...props }) => {
  return (
    <section className="section">
      <div className="container">
        {loading && (
          <span
            className="loader"
            style={{ margin: "0 auto", width: "30px", height: "30px" }}
          />
        )}
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
<<<<<<< HEAD
            wishlist={props.wishlist}
            setWishlist={props.setWishlist}
=======
            newBook={props.newBook}
>>>>>>> feature/bookNotes
          />
        ))}
      </div>
    </section>
  );
};

export default BooksList;
