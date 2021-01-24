import React from "react";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Link } from "react-router-dom";

export default function UserActions(props) {
  const { userBookData, setUserBookData, currBookID } = props;

  let readDate = null;

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Confirmation</Popover.Title>
      <Popover.Content>
        Are you sure that you would like to <strong>delete</strong> this book?
        <br />
        <br />
        <Button variant="light" onClick={() => document.body.click()}>
          Cancel
        </Button>
        <Link to={`/shelf`}>
          <Button
            variant="danger"
            onClick={() => props.deleteUserBook(props.currBookID)}
          >
            Delete
          </Button>
        </Link>
      </Popover.Content>
    </Popover>
  );

  const handleInput = (event) => {
    setUserBookData((prev) => ({
      ...prev,
      [currBookID]: { ...prev[currBookID], status: event.target.value },
    }));
  };

  const handleCal = (event) => {
    setUserBookData((prev) => ({
      ...prev,
      [currBookID]: { ...prev[currBookID], dateread: event.target.value },
    }));
  };

  const formatDate = (rawDate) => {
    if (rawDate) {
      return rawDate.slice(0, 10);
    }
  };

  if (userBookData) {
    readDate = formatDate(userBookData.dateread);
  }

  return (
    <div>
      <Button>Add to list</Button>
      <OverlayTrigger
        rootClose={true}
        trigger="click"
        placement="right"
        overlay={popover}
      >
        <Button variant="danger">Delete Book</Button>
      </OverlayTrigger>
      <br></br>
      <span>
        <br></br>
        <h4>Status: {userBookData ? userBookData.status : null}</h4>

        <select
          onChange={handleInput}
          name="status"
          id="status"
          value={userBookData ? userBookData.status : null}
        >
          <option value="onList">On my list</option>
          <option value="in_progress">Reading</option>
          <option value="finished">Read</option>
        </select>
        <label htmlFor="read">Read: </label>
        <input
          onChange={handleCal}
          type="date"
          id="read"
          name="read-date"
          value={userBookData ? readDate : null}
        />
      </span>
      {/* needs to rerender shelf list */}
    </div>
  );
}
