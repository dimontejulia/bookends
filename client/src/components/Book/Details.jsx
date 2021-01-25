import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Link } from "react-router-dom";

export default function Details(props) {
  const {
    description,
    subjects,
    title,
    author,
    published,
    coverLink,
  } = props.book;

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Confirmation</Popover.Title>
      <Popover.Content>
        Are you sure that you want to <strong>remove</strong> this book?
        <br />
        <br />
        <Button variant="light" onClick={() => document.body.click()}>
          Cancel
        </Button>
        <Link to={`/${props.listName}`}>
          <Button
            variant="danger"
            onClick={() =>
              props.deleteUserBook(props.currBookId, props.listName)
            }
          >
            Delete
          </Button>
        </Link>
      </Popover.Content>
    </Popover>
  );

  const subjectStr =
    subjects &&
    subjects.map((subject) => {
      return (
        <Badge className="book__subject-badge" variant="dark">
          {subject}
        </Badge>
      );
    });

  const shortDescription =
    description && description.substring(0, 1000) + "...";

  return (
    <div>
      {!title || title === "" ? (
        <Spinner animation="border" variant="secondary" />
      ) : (
        <div>
          {/* <h1>
            {title} by {author}
          </h1> */}
          <div className="subjects-container">
            {subjects ? subjectStr.splice(0, 6) : null}
          </div>
          <div className="details-container">
            <img className="book__cover-img" src={coverLink} alt={title} />
            <div className="book__description">
              <div className="description__text">
                <p>{description ? description : null}</p>
                <p className="book__published">
                  Published: {published ? published : null}
                </p>
              </div>
              <div className="delete_container">
                <OverlayTrigger
                  rootClose={true}
                  trigger="click"
                  placement="right"
                  overlay={popover}
                >
                  <Button className="book__delete" variant="danger">
                    Delete Book
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
