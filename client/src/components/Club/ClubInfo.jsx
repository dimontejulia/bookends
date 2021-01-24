import React from "react";
import Details from "../Book/Details";
import ClubRegular from "./ClubRegular";
import ClubAdmin from "./ClubAdmin";
import ClubNews from "./ClubNews";
import ClubMembers from "../List";

export default function ClubInfo(props) {
  const bookDetails = props.currBook;

  //getting book history - prop manipulation
  // const numBooks = Object.keys(props.currClub).length - 10;
  // let bookHistory = [];
  // for (var i = 0; i < numBooks; i++) bookHistory[i] = props.currClub[i];

  const members = props.currClub.members
    ? props.currClub.members.map((member) => Object.values(member))
    : null;

  const bookCount = props.currClub.history ? props.currClub.history.length : 0;

  return (
    <div className="container">
      <section className="sidebar">
        <img
          className="club-avatar"
          src={props.currClub.avatar}
          alt={props.currClub.book_club_name}
          width="20%"
        />
        <h1>{props.currClub.book_club_name}</h1>
        <h4>{props.currClub.club_description}</h4>
        <h5>Club ID: {props.currClub.id}</h5>

        {props.user.id === props.admin_id ? (
          <ClubRegular />
        ) : (
          <ClubAdmin
            currClub={props.currClub}
            deleteClub={props.deleteClub}
            editClub={props.editClub}
          />
        )}
        <br></br>
        <ClubMembers listName={"Book History"} list={props.currClub.history} />
        <h6 className="text-muted">{`${bookCount} books read`}</h6>
        <br></br>
        <ClubMembers listName={"Members"} list={members} />
      </section>
      <section className="main-content">
        <Details book={bookDetails ? bookDetails : null} />
        <ClubNews clubNews={props.clubNews} postClubNews={props.postClubNews} />
      </section>
      {/* <ClubHistory
        bookHistory={props.currClub.history}
        numBooks={props.currClub.history ? props.currClub.history.length : 0}
      /> */}
    </div>
  );
}
