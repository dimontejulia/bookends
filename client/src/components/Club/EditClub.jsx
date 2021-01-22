import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function EditClub(props) {
  const { editClub, club } = props;
  const [form, setForm] = useState(club);

  console.log("EDIT CLUB FORM start >", form);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Form >>>>>>>", form);

    const editedClubObj = {
      book_club_name: form.clubName,
      club_description: form.clubDescription,
      avatar: form.clubAvatar,
    };

    console.log("EVENT CLUB >>>>>>>", editedClubObj);
    // editClub(editedclubObj, null);
    //Form resets w/o message and regardless of success or error...
    setForm({ clubName: "", clubDescription: "", avatar: "" });
  };

  return (
    <Form>
      <h1>Edit Club</h1>
      <Form.Group>
        <Form.Control
          onChange={handleChange}
          id="clubName"
          type="text"
          defaultValue={club.book_club_name}
          placeholder="Club Name"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          onChange={handleChange}
          id="clubDescription"
          type="text"
          defaultValue={club.club_description}
          placeholder="Club Description"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          onChange={handleChange}
          id="clubAvatar"
          type="url"
          defaultValue={club.avatar}
          placeholder="Club Avatar Link"
        />
        <Form.Text className="text-muted">
          Please use a direct link to the image!
        </Form.Text>
      </Form.Group>
      <Button variant="outline-primary" type="submit" onClick={handleClick}>
        Edit Club
      </Button>
    </Form>
  );
}
