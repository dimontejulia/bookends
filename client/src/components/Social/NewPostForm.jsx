import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function NewsFeed(props) {
  const [post, setPost] = useState([]);
  const userId = props.userId;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPost((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    console.log("post", post);
    // axios
    //   .post("/register", props.user)
    //   .then((res) => {
    //     const userData = res.data[0];
    //     //If reseponse good (UserID)
    //     // update cookie here
    //     //Update userState
    //     // Book list friends (Later)
    //     props.setUser(userData);
    //   })
    //   .then(<Redirect to="/" />)
    //   .catch((err) => console.log(err));
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
        <Form.Label>
          What are you reading? What did you think about a book you've read? Any
          other literary thoughts?
        </Form.Label>
        <Form.Control
          onChange={handleChange}
          name="body"
          as="textarea"
          rows={3}
        />
      </Form.Group>
      <Button type="submit" onClick={handleSubmitClick}>
        Post
      </Button>
    </Form>
  );
}
