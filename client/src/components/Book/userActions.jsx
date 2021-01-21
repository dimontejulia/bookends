import React from "react";
import Button from "../Button";
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
      <p>
        <br />
        <Button>Add to list</Button>
      </p>
      <span>
        Status: {userBookData ? userBookData.status : null}
        <br />
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
      <Link to={`/shelf`}>
        <Button onClick={() => props.deleteUserBook(props.currBookID)}>
          Remove Book from Shelf
        </Button>
      </Link>
    </div>
  );
}
