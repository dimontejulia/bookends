import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function ChangeBook(props) {
  const { book, clubs } = props;
  console.log('Ptdfs', props);
  const parsedList =
    clubs &&
    Object.values(clubs).map((club) => (
      <Dropdown.Item
        id={club.id}
        onClick={(event) => handleClubClick(event.target.id, book)}
      >
        {club.book_club_name}
      </Dropdown.Item>
    ));

  const handleClubClick = (clubId, bookDetails) => {
    const id = clubId.replace('clubId-', '');
    //Get club ID from the click event?
    console.log('click event>>>>>>>', id, bookDetails);
    props.setClubBook(id, bookDetails);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant='success' id='dropdown-basic'>
        Assign to Book Club:
      </Dropdown.Toggle>
      <Dropdown.Menu>{parsedList}</Dropdown.Menu>
    </Dropdown>
  );
}
