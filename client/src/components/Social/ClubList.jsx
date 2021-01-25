import React from 'react';
import ClubListItem from './ClubListItem';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

export default function ClubList(props) {
  const { listName, list, setCurrClub } = props;

  const parsedList =
    list &&
    list.map((club) => (
      <tr key={club.id}>
        <Link onClick={() => setCurrClub(club.id)} to={`/clubs/${club.id}`}>
          <td className='text-dark'>{club.book_club_name}</td>
          <td>
            <Button>
              <i class='fas fa-arrow-circle-right'></i>
            </Button>
          </td>
        </Link>
      </tr>
    ));

  return (
    <section>
      <h1>{listName}</h1>
      <Table hover size='sm'>
        <tbody>{parsedList}</tbody>
      </Table>
    </section>
  );
}
