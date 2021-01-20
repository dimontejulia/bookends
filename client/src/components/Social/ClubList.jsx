import React from "react";
import ClubListItem from "./ClubListItem";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function ClubList(props) {
  console.log("props ========", props);
  const { listName, list } = props;

  const handleClubClick = (clubId) => {
    axios
      .get(`/api/clubs/${clubId}`)
      .then((res) => {
        console.log("CLUBS/ID >>>>>>", res.data);
      })
      .catch((err) => console.log(err));
  };

  const parsedList =
    list &&
    list.map((clubId) => (
      <Link to={`/clubs/${clubId}`}>
        <Button onClick={() => handleClubClick(clubId)}>Club {clubId}</Button>
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

// export default function ClubList(props) {
//   const { clubs } = props;

//   const usersClubs = (clubId) => {
//     axios
//       .get(`/api/club/${clubId}`)
//       .then((res) => {
//         console.log("RESDATA /API/CLUBS/ID ->>>>", res.data);
//       })
//       .catch((err) => err);
//   };

//

//   const parsedList = clubs && clubs.map((club) => <ClubListItem club={club} />);

//   return (
//     <section>
//       <h1>ClubList</h1>
//       <ul>{parsedList}</ul>
//     </section>
//   );
// }
