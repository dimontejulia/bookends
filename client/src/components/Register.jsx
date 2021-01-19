import React from "react";

import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Redirect } from "react-router-dom";

export default function Register(props) {
  const { user, setUser } = props;
  console.log('User>>>', user);
  const handleChange = (e) => {
    const { id, value } = e.target;
    props.setUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    axios
      .post('/register',  props.user)
      .then((res)=>{
        console.log("AXIOS USER", props.user)
        const userData = res.data[0];
        //If reseponse good (UserID)
        // update cookie here
        //Update userState
        // Book list friends (Later)
        props.setUser(userData);
        
      })
      .then(<Redirect to="/" />)
      .catch(err => console.log(err))
  };

  return (
    <main>
      <Form>
        <h1>Registration</h1>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              id="first_name"
              onChange={handleChange}
              placeholder="First name"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              id="last_name"
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
