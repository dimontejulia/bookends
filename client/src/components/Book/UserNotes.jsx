import React from "react";
import Button from "../Button";
import Form from "react-bootstrap/Form";

export default function UserNotes(props) {
  const { comments, setUserBookData, currBookID } = props;
  console.log(props);
  // [...prev, (comments: event.target.value)]
  const handleInput = (event) => {
    setUserBookData((prev) => ({
      ...prev,
      [currBookID]: { ...prev[currBookID], comments: event.target.value },
    }));
  };

  return (
    <div>
      <h1 className="sidebar__subheading">What did you think?</h1>
      <Form className="book__user-notes-form">
        <Form.Group controlId="body">
          <Form.Control
            onChange={handleInput}
            className="form__user-notes-input"
            name="userNotes"
            name="body"
            as="textarea"
            placeholder="Any notes about the book? Write them here..."
            rows={5}
            value={comments ? comments : ""}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
