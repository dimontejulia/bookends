import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

export default function ClubList(props) {
  const { listName, list, setCurrClub } = props;

  const parsedList =
    list &&
    list.map((club) => (
      <tr key={club.id}>
        <Link onClick={() => setCurrClub(club.id)} to={`/clubs/${club.id}`}>
          <td className="text-dark">{club.book_club_name}</td>
          <td className="social__lists-button">
            <Button>
              <i class="fas fa-arrow-circle-right"></i>
            </Button>
          </td>
        </Link>
      </tr>
    ));

  return (
    <section>
      <h1 className="sidebar__subheading">{listName}</h1>
      <Table hover size="sm">
        <tbody>{parsedList}</tbody>
      </Table>
    </section>
  );
}
