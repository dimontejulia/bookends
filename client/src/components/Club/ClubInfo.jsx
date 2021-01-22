import React from "react";
import classnames from "classnames";
import Button from "../Button";
import Details from "../Book/Details";
import ClubRegular from "./ClubRegular";
import ClubAdmin from "./ClubAdmin";

export default function ClubInfo(props) {
  const bookDetails = props.currBook;

  const placeholderBook = {
    id: 1,
    current_book: "OL7353617M",
    admin_id: 1,
    book_club_name: "Lighthouse Learners",
    date_read: "2020-07-20T04:00:00.000Z",
    rating: 4,
    comments: "A fun read with friends!",
    status: "finished",
    avatar: "https://picsum.photos/200",
  };

  return (
    <div>
      <section className="book-club__header">
        <img
          className="book__cover-img"
          src={props.club.avatar}
          alt={props.club.book_club_name}
          width="20%"
        />
        <br />
        <h1>{props.club.book_club_name}</h1>
        <h3>{props.club.comments}</h3>
        {props.user.id === props.admin_id ? <ClubRegular /> : <ClubAdmin />}
      </section>
      <section className="book-club__content">
        <h3>Current Book:</h3>
        <Details book={bookDetails ? bookDetails : null} />
      </section>
    </div>
  );
}
