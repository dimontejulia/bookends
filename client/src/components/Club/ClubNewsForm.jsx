import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function NewsFeed(props) {
  const [post, setPost] = useState([]);

  const date = new Date();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPost((prevState) => ({
      ...prevState,
      [id]: value,
      timestamp: date.toLocaleString("en-CA", { hour12: false }),
    }));
  };
  // timestamp: date.toLocaleString('en-CA', { hour12: false }),
  const handleSubmitClick = (e) => {
    e.preventDefault();

    if (!post.title) {
      return null;
    }

    props.postClubNews(post).then(() => {
      setPost({ title: "", body: "" });
    });
  };

  return (
    <div className="form__club-post">
      <h1 className="sidebar__subheading">What do you think of the book?</h1>
      <Form>
        <Form.Group controlId="title">
          <Form.Control
            onChange={handleChange}
            name="title"
            value={post.title}
            placeholder="Post Title"
            className="form__club-post-title"
          />
        </Form.Group>
        <Form.Group controlId="body">
          <Form.Control
            onChange={handleChange}
            name="body"
            as="textarea"
            className="form__club-post-body"
            rows={3}
            value={post.body}
            placeholder="What are you reading? What did you think about a book you've read? Any
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
