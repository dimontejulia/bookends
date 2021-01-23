import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function AddList(props) {
  const [form, setForm] = useState([]);
  const { addFriend } = props;

  const handleChange = (e) => {
    const { value } = e.target;
    setForm((prevState) => ({
      value,
    }));
  };

  const handleClick = (e) => {
    props.addFriend(form.value);
    //Form resets w/o message and regardless of success or error...
    setForm((prev) => ({ ...prev, value: "" }));
  };

  return (
    <Form inline>
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
