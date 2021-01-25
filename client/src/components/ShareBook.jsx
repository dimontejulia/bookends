import React from "react";
import { Accordion, Card } from "react-bootstrap";
import NewPostForm from "./Social/NewPostForm";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";

export default function ShareBook(props) {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Share Book</Popover.Title>
      <Popover.Content>
        <div>
          <NewPostForm
            user={props.user}
            setNews={props.setNews}
            placeholder={{
              title: `${props.book.title} by, ${props.book.author}`,
              body: "",
            }}
          />
        </div>
        <Button block variant="light" onClick={() => document.body.click()}>
          Cancel
        </Button>
      </Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger
      rootClose={true}
      trigger="click"
      placement="right"
      overlay={popover}
    >
      <Button block variant="outline-primary">
        Share Book
      </Button>
    </OverlayTrigger>
  );
}
