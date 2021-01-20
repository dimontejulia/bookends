import React from "react";
import Details from "./Details";
import Rating from "./Rating";
import UserNotes from "./UserNotes";
import AlsoReadList from "./AlsoReadList";

export default function Index(props) {
  const { currBook, userBookData, deleteUserBook } = props;

  return (
    <div>
      <Details book={currBook} />
      <Rating userRating={userBookData.rating} />
      <UserNotes
        currBook={currBook}
        deleteUserBook={deleteUserBook}
        userBookData={userBookData}
      />
      <AlsoReadList friendsWhoRead={userBookData.friendsWhoReadIt} />
    </div>
  );
}
