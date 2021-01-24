import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function NewsFeed(props) {
  const [post, setPost] = useState(props.placeholder ? props.placeholder : "");
  const user = props.user;

  const date = new Date();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPost((prevState) => ({
      ...prevState,
      user_id: user.id,
      firstname: user.firstName,
      lastname: user.lastName,
      [id]: value,
      timestamp: date.toLocaleString("en-CA"),
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();

    if (!post.title) {
      return null;
    }
    console.log("USER IN POST ", user);
    axios
      .post(`/api/users/${user.id}/posts`, post)
      .then(() => {
        props.setNews((prevState) => [post, ...prevState]);
        setPost({ title: "", body: "" });
      })
      .catch((err) => console.log("errorroroor", err));
  };

  return (
    <div className="form__newsfeed-post">
      <h1 className="sidebar__subheading">What are you reading?</h1>
      <Form>
        <Form.Group controlId="title">
          <Form.Control
            onChange={handleChange}
            name="title"
            className="form__newsfeed-post-title"
            value={post.title}
            placeholder="Post Title"
          />
        </Form.Group>
        <Form.Group controlId="body">
          <Form.Control
            onChange={handleChange}
            name="body"
            as="textarea"
            className="form__newsfeed-post-body"
            rows={3}
            value={post.body}
            placeholder="What did you think about a book you've read? Any
          other literary thoughts?"
          />
        </Form.Group>
        <Button block type="submit" onClick={handleSubmitClick}>
          Post
        </Button>
      </Form>
    </div>
  );
}
