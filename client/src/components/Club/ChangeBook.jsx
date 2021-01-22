import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function ChangeBook(props) {
  const { buttonBook } = props;
  const handleClubClick = (clubId, bookDetails) => {
    const id = clubId.replace('clubId-', '');
    //Get club ID from the click event?
    console.log('click event>>>>>>>', id, bookDetails);
    props.setClubBook(id, bookDetails);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant='success' id='dropdown-basic'>
        Add to Club
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          id='clubId-1'
          onClick={(event) => handleClubClick(event.target.id, buttonBook)}
        >
          club name 1
        </Dropdown.Item>
        <Dropdown.Item id='clubId-2' onClick={() => handleClubClick()}>
          club name 2
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
