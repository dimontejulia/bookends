import React from "react";
import classnames from "classnames";
import Button from "../Button";
import Details from "../Book/Details";
import ClubRegular from "./ClubRegular";
import ClubAdmin from "./ClubAdmin";

export default function ClubInfo(props) {
  console.log("club info>>>>>", props);

  const bookDetails = props.currBook;

  //   admin_id: 1
  // avatar: "https://i.pinimg.com/originals/15/fb/10/15fb10a831772d082c8a344b03bd75e8.jpg"
  // book_club_name: "Lighthouse Learners"
  // comments: "A fun read with friends!"
  // current_book: "OL16165161M"
  // date_read: "2020-07-20T04:00:00.000Z"
  // id: 1
  // rating: 4
  // status: "in_progress"

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
        {props.clubAdmin ? <ClubRegular /> : <ClubAdmin />}
      </section>
      <section className="book-club__content">
        <h3>Current Book:</h3>
        <Details book={bookDetails ? bookDetails : null} />
      </section>
    </div>
  );
}
