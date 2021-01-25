import React from "react";
import Form from "react-bootstrap/Form";

export default function UserNotes(props) {
  const { comments, setUserBookData, currBookID } = props;

  // [...prev, (comments: event.target.value)]
  const handleInput = (event) => {
    setUserBookData((prev) => ({
      ...prev,
      [currBookID]: { ...prev[currBookID], comments: event.target.value },
    }));
  };

  return (
    <div>
      <h3>Notes</h3>
      <Form className="newsfeed-post">
        <Form.Group controlId="body">
          <Form.Control
            onChange={handleInput}
            name="userNotes"
            // name="body"
            as="textarea"
            placeholder="Any notes about the book? Write them here..."
            rows={3}
            value={comments ? comments : ""}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
