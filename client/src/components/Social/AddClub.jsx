import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function AddClub(props) {
  const [form, setForm] = useState([]);
  const { addClub } = props;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("EVENT CLUB >>>>>>>", form);
    addClub(form.clubName, form.clubAvatar);
    //Form resets w/o message and regardless of success or error...
    setForm({ clubName: "", avatar: "" });
  };

  return (
    <Form>
      <h1>Add a Club</h1>
      <Form.Group>
        <Form.Control
          onChange={handleChange}
          id="clubName"
          type="text"
          placeholder="Club Name"
        />
      </Form.Group>
      <Form.Group>
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
      <Button variant="outline-primary" type="submit" onClick={handleClick}>
        Add Club
      </Button>
    </Form>
  );
}
