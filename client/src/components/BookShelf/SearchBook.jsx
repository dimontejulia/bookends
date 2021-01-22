import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SearchBook(props) {
  const [form, setForm] = useState([]);

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
    <Form>
      <FormControl
        onChange={handleChange}
        id="searchBook"
        name="searchBook"
        type="text"
        value={form.value}
        placeholder="Search by title, authour, genre etc."
        className="mr-lg-3"
      />
      <Button
        variant="outline-primary"
        onClick={() => {
          handleClick();
        }}
      >
        Search
      </Button>
    </Form>
  );
}
