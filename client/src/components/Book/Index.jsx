import React from "react";
import Details from "./Details";
import Rating from "./Rating";
import UserNotes from "./UserNotes";
import UserActions from "./userActions";
import AlsoReadList from "./AlsoReadList";
import ButtonClick from "../Button";
import Wave from "../Wave";

import "../Details.scss";

export default function Index(props) {
  const {
    currBook,
    userBookData,
    setUserBookData,
    saveToDB,
    deleteUserBook,
  } = props;

  const bookData =
    userBookData &&
    Object.values(userBookData).find((bookObj) => bookObj.id === currBook.id);

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
          <Details book={currBook} deleteUserBook={deleteUserBook} />
        </div>
        <div className="right-sidebar">
          <h1 className="sidebar__subheading">Book Diary</h1>
          <Rating
            currBookID={currBook.id}
            userRating={bookData ? bookData.rating : 0}
            setUserBookData={setUserBookData}
          />
          <UserActions
            currBookID={currBook.id}
            userBookData={bookData}
            setUserBookData={setUserBookData}
            deleteUserBook={deleteUserBook}
          />
          <UserNotes
            currBookID={currBook.id}
            comments={bookData ? bookData.comments : null}
            setUserBookData={setUserBookData}
          />
          <br></br>
          {/* SAVE BUTTON WILL HAVE TO TRIGGER A SAVE TO DB HOOK */}
          <ButtonClick onClick={saveToDB}>Save</ButtonClick>
          <AlsoReadList friendsWhoRead={userBookData.friendsWhoReadIt} />
        </div>
      </div>
    </div>
  );
}
