import React, { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import EditClub from "./EditClub";

export default function ClubAdmin(props) {
  const { deleteClub, currClub, editClub } = props;
  const clubId = currClub.id;
  const clubName = currClub.book_club_name;

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Edit Club</Popover.Title>
      <Popover.Content>
        <div>
          <EditClub
            editClub={editClub}
            currClub={currClub}
            setClubInfo={props.setClubInfo}
          />
        </div>
        <Button variant="light" onClick={() => document.body.click()}>
          Cancel
        </Button>
        <Link to={`/social`}>
          <Button variant="danger" onClick={() => deleteClub(clubId, clubName)}>
            Delete
          </Button>
        </Link>
      </Popover.Content>
    </Popover>
  );

  return (
    <div className="club__actions">
      {/* 
          admin buttons and features will probably be where normal user
          actions for the club are, we can switch later and refactor components as we go  
        */}
      {/* <Button>Call Club</Button>
      <Button>Add Post</Button> */}
      <Link to={"/search"}>
        <Button block>Change Book</Button>
      </Link>
      {/* <Button>Schedule a Meeting</Button> */}
      <OverlayTrigger
        rootClose={true}
        trigger="click"
        placement="right"
        overlay={popover}
      >
        <Button block variant="primary">
          Edit Club
        </Button>
      </OverlayTrigger>
    </div>
  );
}
