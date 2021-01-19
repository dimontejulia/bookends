import React from "react";

import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export default function Register(props) {
  const { user, setUser } = props;
  console.log("User>>>", user);
  const handleChange = (e) => {
    const { id, value } = e.target;
    props.setUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    registerUser();
    // props.setUser((prevState) => ({
    //   ...prevState,
    //   id: 123,
    // }));
  };

  const registerUser = () => {
    const userInfo = {
      first_name: "testFirst",
      last_name: "testLast",
      email: "test@email.com",
      password: "123password",
    };
    const URL = `/register`;
    axios
      .post(`${URL}`, userInfo)
      .then(function (response) {
        if (response.status === 200) {
          console.log("userInfo =====", userInfo);
          props.setUser((prevState) => [...prevState, userInfo]);
        } else {
          console.log("error!");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <main>
      <Form>
        <h1>Registration</h1>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              id="firstName"
              onChange={handleChange}
              placeholder="First name"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              id="lastName"
              onChange={handleChange}
              placeholder="Last Name"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              id="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              id="confirmPassword"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridAge">
            <Form.Label>Age</Form.Label>
            <Form.Control onChange={handleChange} id="age" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Choose..."
              onChange={handleChange}
              id="gender"
            >
              <option>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit" onClick={handleSubmitClick}>
          Submit
        </Button>
      </Form>
    </main>
  );
}
