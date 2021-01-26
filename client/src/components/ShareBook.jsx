import React from "react";
import { Accordion, Card } from "react-bootstrap";
import ShareBookForm from "./Social/ShareBookForm";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";

export default function ShareBook(props) {
  const popover = (
    <Popover className="share-book-popover" id="popover-basic">
      <Popover.Title as="h3">Share Book</Popover.Title>
      <Popover.Content>
        <div>
          <ShareBookForm
            key={`${props.book.id}_share_form`}
            user={props.user}
            setNews={props.setNews}
            placeholder={{
              title: `${props.book.title}, by ${props.book.author}`,
              body: "",
            }}
          />
        </div>
        <Button
          key={`${props.book.id}_cancel_btn`}
          block
          variant="light"
          onClick={() => document.body.click()}
        >
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
      <Button
        key={`${props.book.id}_share_btn`}
        block
        variant="outline-primary"
      >
        Share Book
      </Button>
    </OverlayTrigger>
  );
}
