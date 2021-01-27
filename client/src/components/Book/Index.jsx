import React, { useState, useEffect } from "react";
import Details from "./Details";
import Rating from "./Rating";
import UserNotes from "./UserNotes";
import UserActions from "./userActions";
import AlsoReadList from "./AlsoReadList";
import ButtonClick from "../Button";
import Wave from "../Wave";

import "../Details.scss";

export default function Index(props) {
  const { saveBookNotes, deleteUserBook, paramId, setCurrBook } = props;
  const books = props.state.books;
  const currBook = props.state.currBook;

  useEffect(() => {
    //Sets currBook if accessed directly by url
    setCurrBook({ ...props.state.currBook, id: paramId });
  }, []);

  useEffect(() => {
    //Updates User's book notes when books are changed
    //Other wise direct url wont load them
    setBookState(bookData);
  }, [books]);

  const bookData =
    books && Object.values(books).find((bookObj) => bookObj.id === currBook.id);
  const [bookState, setBookState] = useState();

  return (
    <div>
      <Wave />
      <div className="container">
        <div className="book__details">
          <h1 className="page-title">{currBook.title}</h1>
          <h3 className="book__details-author">{currBook.author}</h3>
        </div>
      </div>
      <div className="container">
        <div className="left-main-content">
          <Details
            book={currBook}
            deleteUserBook={deleteUserBook}
            currBookId={currBook.id}
            listName={currBook.listName}
          />
          {currBook.friends_read
            ? currBook.friends_read.length > 1 && (
                <AlsoReadList
                  key={`${currBook.id}_arl`}
                  list={currBook.friends_read}
                  listName={`Friends who also read ${currBook.title}:`}
                  friends={props.friends}
                />
              )
            : null}
        </div>
        <div className="right-sidebar">
          <h1 className="sidebar__subheading">Book Diary</h1>
          <Rating
            currBookID={currBook.id}
            userRating={bookState ? bookState.rating : 0}
            setBookState={setBookState}
          />

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

          {/* SAVE BUTTON WILL HAVE TO TRIGGER A SAVE TO DB HOOK */}
          <ButtonClick onClick={() => saveBookNotes(bookState)}>
            Save
          </ButtonClick>
        </div>
      </div>
    </div>
  );
}
