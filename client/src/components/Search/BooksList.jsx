import React from 'react';
import Book from './Book.jsx';
import Spinner from 'react-bootstrap/Spinner';

const BooksList = ({ loading = false, books = [], count = 0, ...props }) => {
  // console.log("BOOOOOKS", books);
  return (
    <section>
      <div className='search-cards'>
        {loading && (
          <Spinner animation='border' variant='primary' className='spinner' />
        )}

        {/* take out slice operator if we want more than 5 results */}
        {books.map((book) =>
          book.cover_i && book.cover_i !== -1 ? (
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
              addBookToWishlist={props.addBookToWishlist}
            />
          ) : null
        )}
      </div>
    </section>
  );
};

export default BooksList;
