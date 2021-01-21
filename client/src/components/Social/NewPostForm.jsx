import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function NewsFeed(props) {
  const [post, setPost] = useState([]);
  const userId = props.userId;

  const date = new Date();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPost((prevState) => ({
      ...prevState,
      user_id: userId,
      [id]: value,
      timestamp: date,
    }));
  };

  console.log("post", post);

  const handleSubmitClick = (e) => {
    e.preventDefault();
    axios
      .post(`/api/users/${userId}/posts`, post)
      .then(props.setNews((prevState) => [...prevState, post]))
      .catch((err) => console.log("errorroroor", err));
  };

  return (
    <Form>
      <Form.Group controlId="title">
        <Form.Control
          onChange={handleChange}
          name="title"
          placeholder="Post Title"
        />
      </Form.Group>
      <Form.Group controlId="body">
        <Form.Control
          onChange={handleChange}
          name="body"
          as="textarea"
          rows={3}
          placeholder="What are you reading? What did you think about a book you've read? Any
          other literary thoughts?"
        />
      </Form.Group>
      <Button type="submit" onClick={handleSubmitClick}>
        Post
      </Button>
    </Form>
  );
}
