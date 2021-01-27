import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default function ChangeBook(props) {
  const { book, clubs } = props;

  const handleClubClick = (clubInfo, bookDetails) => {
    props.setClubBook(clubInfo, bookDetails);
  };

  const parsedList =
    clubs &&
    Object.values(clubs).map((club) => (
      <Dropdown.Item
        id={club.id}
        key={`club-${club.id}`}
        onClick={(event) => handleClubClick(club, book)}
      >
        {club.book_club_name}
      </Dropdown.Item>
    ));

  return (
    <Dropdown key={`${props.book.id}_dd`} block="block">
      <Dropdown.Toggle
        key={`${props.book.id}_dd_btn`}
        block
        variant="primary"
        id="dropdown-basic"
      >
        Assign to Club
      </Dropdown.Toggle>
      <Dropdown.Menu key={`${props.book.id}_dd_list`}>
        {parsedList}
      </Dropdown.Menu>
    </Dropdown>
  );
}
