import React from "react";
import ClubInfo from "./ClubInfo";
import axios from "axios";

export default function Index(props) {
  console.log("CLUB INDEX PROPS>>>>>>", props);
  const clubID = props.clubId;

  // const usersClubs = (clubID) => {
  //   axios
  //     .get(`/api/club/${clubID}`)
  //     .then((res) => {
  //       console.log("RESDATA /API/CLUBS/ID ->>>>", res.data);
  //     })
  //     .catch((err) => err);
  // };

  return <ClubInfo club={props.currClub} />;
}
