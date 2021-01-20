import React from "react";
import Form from "react-bootstrap/Form";

export default function NewsFeed(props) {
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Control placeholder="Post Title" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>
          What are you reading? What did you think about a book you've read? Any
          other literary thoughts?
        </Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}
