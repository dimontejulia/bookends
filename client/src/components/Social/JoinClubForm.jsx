import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function JoinClub(props) {
  const [form, setForm] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setForm((prevState) => ({
      value,
    }));
  };

  const handleClick = (e) => {
    if (form.value && Number.isInteger(parseInt(form.value))) {
      props.joinClub(form.value);
      setForm((prev) => ({ ...prev, value: "" }));
      props.setShow({ item: `Successfully joined new club.`, status: true });
    } else {
      props.setShow({ item: `Invalid club ID.`, status: true });
    }
  };

  return (
    <Form className="search-social">
      <FormControl
        onChange={handleChange}
        id="JoinClubForm"
        name="clubId"
        type="text"
        value={form.value}
        placeholder="Enter Book Club ID"
        className="mr-sm-2"
      />
      <Button
        variant="outline-primary"
        onClick={() => {
          handleClick();
        }}
      >
        <i className="fas fa-users"></i>
      </Button>
    </Form>
  );
}
