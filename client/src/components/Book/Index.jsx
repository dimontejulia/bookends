import React from "react";
import Details from "./Details";
import Rating from "./Rating";
import UserNotes from "./UserNotes";
import UserActions from "./userActions";
import AlsoReadList from "./AlsoReadList";
import ButtonClick from "../Button";
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
    <div className="container">
      <div className="sidebar">
        <h2>Book Diary</h2>
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

        <Rating
          currBookID={currBook.id}
          userRating={bookData ? bookData.rating : 0}
          setUserBookData={setUserBookData}
        />
        <br></br>
        {/* SAVE BUTTON WILL HAVE TO TRIGGER A SAVE TO DB HOOK */}
        <ButtonClick onClick={saveToDB}>Save</ButtonClick>
        <AlsoReadList friendsWhoRead={userBookData.friendsWhoReadIt} />
      </div>
      <div className="main-content">
        <Details book={currBook} />
      </div>
    </div>
  );
}
