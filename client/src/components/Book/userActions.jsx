import React from "react";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function UserActions(props) {
  const { bookData, setBookState } = props;

  let readDate = null;

  const handleInput = (event) => {
    setBookState((prev) => ({
      ...prev,
      status: event.target.value,
    }));
  };

  const handleCal = (event) => {
    setBookState((prev) => ({
      ...prev,
      dateread: event.target.value,
    }));
  };

  const formatDate = (rawDate) => {
    if (rawDate) {
      return rawDate.slice(0, 10);
    }
  };

  if (bookData) {
    readDate = formatDate(bookData.dateread);
  }

  return (
    <div>
      <span>
        {/* <br></br>
        <h4>Status: {userBookData ? userBookData.status : null}</h4> */}
        {/* <select
          onChange={handleInput}
          name='status'
          id='status'
          value={bookData ? bookData.status : null}
        >
          <option value="onList">On my list</option>
          <option value="in_progress">Reading</option>
          <option value="finished">Read</option>
        </select> */}
        <Form>
          <Form.Group>
            <Form.Control
              as="select"
              onChange={handleInput}
              name="status"
              id="status"
              value={bookData ? bookData.status : ""}
            >
              <option value="On my list">On my list</option>
              <option value="In Progress">Reading</option>
              <option value="Finished">Finished Reading</option>
            </Form.Control>
            <Form.Text className="text-muted">Status</Form.Text>
          </Form.Group>
          <input
            onChange={handleCal}
            className="book__date-picker"
            type="date"
            id="read"
            name="read-date"
            value={bookData ? readDate : ""}
          />
          <Form.Text className="text-muted">Date Read</Form.Text>
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
