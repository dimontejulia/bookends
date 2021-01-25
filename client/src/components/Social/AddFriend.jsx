import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function AddList(props) {
  const [form, setForm] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setForm((prevState) => ({
      value,
    }));
  };

  const handleClick = (e) => {
    if (form.value) {
      props.addFriend(form.value.toLowerCase());
      setForm((prev) => ({ ...prev, value: "" }));
    } else {
      props.setShow({ item: "Email cannot be blank.", status: true });
    }
  };

  return (
    <Form className="search-social">
      <FormControl
        onChange={handleChange}
        id="friendEmailForm"
        name="friendEmail"
        type="text"
        value={form.value}
        placeholder="Search by email"
        className="mr-sm-2"
      />

      <Button
        variant="outline-primary"
        onClick={() => {
          handleClick();
        }}
      >
        <i class="fas fa-user-plus"></i>
      </Button>
    </Form>
  );
}
