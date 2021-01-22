import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function AddClub(props) {
  const [form, setForm] = useState([]);
  // const { addFriend } = props;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleClick = (e) => {
    // props.addClub();
    //Form resets w/o message and regardless of success or error...
    setForm((prev) => ({}));
  };

  return (
    <Form>
      <Form.Group controlId="formClubName">
        <Form.Control
          onChange={handleChange}
          id="clubName"
          type="text"
          placeholder="Club Name"
        />
      </Form.Group>
      <Form.Group controlId="formClubAvatar">
        <Form.Control
          onChange={handleChange}
          id="clubAvatar"
          type="url"
          placeholder="Club Avatar Link"
        />
        <Form.Text className="text-muted">
          Please use a direct link to the image!
        </Form.Text>
      </Form.Group>
      <Button
        variant="outline-primary"
        type="submit"
        onClick={() => handleClick()}
      >
        Add Club
      </Button>
    </Form>
  );
}
