import React, { useState } from "react";
import Details from "./Details";
import Rating from "./Rating";
import UserNotes from "./UserNotes";
import UserActions from "./userActions";
import AlsoReadList from "./AlsoReadList";
import ButtonClick from "../Button";
import "../Details.scss";

export default function Index(props) {
  const { addBookToShelf, saveBookNotes, deleteUserBook } = props;
  const books = props.state.books;
  const currBook = props.state.currBook;

  const bookData =
    books && Object.values(books).find((bookObj) => bookObj.id === currBook.id);
  const [bookState, setBookState] = useState(bookData);

  return (
    <div className="container">
      <div className="sidebar">
        <h2>Book Diary</h2>
        <UserActions
          currBookID={currBook.id}
          bookData={bookState}
          setBookState={setBookState}
          deleteUserBook={deleteUserBook}
        />
        <UserNotes
          currBookID={currBook.id}
          comments={bookState ? bookState.comments : null}
          setBookState={setBookState}
        />

        <Rating
          currBookID={currBook.id}
          userRating={bookState ? bookState.rating : 0}
          setBookState={setBookState}
        />
        <br></br>
        {/* SAVE BUTTON WILL HAVE TO TRIGGER A SAVE TO DB HOOK */}
        <ButtonClick onClick={() => saveBookNotes(bookState)}>Save</ButtonClick>
        {currBook.friends_read
          ? currBook.friends_read.length > 1 && (
              <AlsoReadList
                list={currBook.friends_read}
                listName={`Friends who also read ${currBook.title}:`}
                friends={props.friends}
              />
            )
          : null}
      </div>
      <div className="main-content">
        <Details book={currBook} />
      </div>
    </div>
  );
}
