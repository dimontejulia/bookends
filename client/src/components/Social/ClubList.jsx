import React from "react";
import ClubListItem from "./ClubListItem";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function ClubList(props) {
  console.log("props ========", props);
  const { listName, list, setCurrClub } = props;

  const currentClub = (clubID) => {
    axios
      .get(`/api/clubs/${clubID}`)
      .then((res) => {
        console.log("RESDATA /API/CLUBS/ID ->>>>", res.data);
        setCurrClub(res.data);
      })
      .catch((err) => err);
  };

  const parsedList =
    list &&
    list.map((clubId) => (
      <Link to={`/clubs/${clubId}`}>
        <Button onClick={() => currentClub(clubId)}>Club {clubId}</Button>
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
