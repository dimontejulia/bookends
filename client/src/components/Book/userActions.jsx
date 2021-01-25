import React from "react";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function UserActions(props) {
  const { userBookData, setUserBookData, currBookID } = props;

  let readDate = null;

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
      <span>
        {/* <br></br>
        <h4>Status: {userBookData ? userBookData.status : null}</h4> */}

        {/* <select
          onChange={handleInput}
          name="status"
          id="status"
          value={userBookData ? userBookData.status : null}
        >
          <option value="onList">On my list</option>
          <option value="in_progress">Reading</option>
          <option value="finished">Read</option>
        </select> */}

        <Form>
          <Form.Group controlId="status__select">
            <Form.Control
              as="select"
              onChange={handleInput}
              name="status"
              id="status"
              value={userBookData ? userBookData.status : null}
            >
              <option value="onList">On my list</option>
              <option value="in_progress">Reading</option>
              <option value="finished">Finished Reading</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="read__cal">
            <Form.Control
              as="date"
              onChange={handleCal}
              type="date"
              name="read-date"
              id="read"
              value={userBookData ? readDate : null}
            ></Form.Control>
          </Form.Group>
        </Form>

        {/* <label htmlFor="read">Read: </label>
        <input
          onChange={handleCal}
          type="date"
          id="read"
          name="read-date"
          value={userBookData ? readDate : null}
        /> */}
      </span>
      {/* needs to rerender shelf list */}
    </div>
  );
}
