import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export default function ClubAdmin(props) {
  const { clubId, clubName, deleteClub } = props;

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Confirmation</Popover.Title>
      <Popover.Content>
        Are you sure that you would like to <strong>delete</strong> this club?
        <br />
        <br />
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
    <div>
      {/* 
          admin buttons and features will probably be where normal user
          actions for the club are, we can switch later and refactor components as we go  
        */}
      <Button>Call Club</Button>
      <Button>Add Post</Button>
      <Link to={"/search"}>
        <Button>Change Book</Button>
      </Link>
      <Button>Schedule a Meeting</Button>
      <OverlayTrigger
        rootClose={true}
        trigger="click"
        placement="right"
        overlay={popover}
      >
        <Button variant="danger">Delete Club</Button>
      </OverlayTrigger>
      <br />
      <span>Announce Message:</span>
    </div>
  );
}
