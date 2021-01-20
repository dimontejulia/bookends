import React from "react";
import ClubListItem from "./ClubListItem";

export default function ClubList(props) {
  props = [
    {
      book_club_id: 1,
    },
    {
      book_club_id: 2,
    },
  ];
  const { clubs } = props;

  const parsedList = clubs && clubs.map((club) => <ClubListItem club={club} />);

  return (
    <section>
      <h1>ClubList</h1>
      <ul>{parsedList}</ul>
    </section>
  );
}
