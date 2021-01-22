import React from 'react';
import ClubListItem from './ClubListItem';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function ClubList(props) {
  const { listName, list, setCurrClub, setCurrBook } = props;

  const currentClub = (clubID) => {
    axios
      .get(`/api/clubs/${clubID}`)
      .then((res) => {
        console.log('res daAAAAAA', res.data);
        setCurrClub(res.data);
        setCurrBook({ id: res.data.current_book });
      })
      .catch((err) => err);
  };

  const parsedList =
    list &&
    list.map((club) => (
      <Link to={`/clubs/${club.book_club_id}`}>
        <Button onClick={() => currentClub(club.book_club_id)}>
          {club.book_club_name}
        </Button>
      </Link>
    ));

  //localhost:3000/api/clubs/1
  return (
    <section>
      <h1>{listName}</h1>
      <ul>{parsedList}</ul>
    </section>
  );
}
