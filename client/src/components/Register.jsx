import React, { useState } from 'react';

//import { registerUser } from '../hooks/useApplicationData';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default function Register(props) {
  // const [state, setState] = useState({
  //   userID: '',
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  //   age: '',
  //   gender: '',
  // });
  const handleChange = (e) => {
    const { id, value } = e.target;
    props.setUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleSubmitClick = (e) => {
    e.preventDefault();
    props.setUser((prevState) => ({
      ...prevState,
      userID: 123,
    }));
    // if (state.password === state.confirmPassword) {
    //   //registerUser();
    // } else {
    //   props.showError('Passwords do not match');
    // }
  };

  // const registrationHandler = (event) => {
  //   console.log('=========State@start=========', state.userData);
  //   const target = event.target;
  //   const value = target.value;
  //   console.log('=========TARGET=========', target);
  //   console.log('=========VALUE=========', value);
  //   const name = target.name;
  //   //prev User Data
  //   let currUserData = state.userData;

  //   setState({
  //     ...state,
  //     userData: { ...currUserData, [target.name]: value },
  //   });

  return (
    <main>
      <Form>
        <h1>Registration</h1>
        <Form.Row>
          <Form.Group as={Col} controlId='formGridFirstName'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              id='firstName'
              onChange={handleChange}
              placeholder='First name'
            />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridLastName'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              id='lastNam'
              onChange={handleChange}
              placeholder='Last Name'
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleChange}
            id='email'
            type='email'
            placeholder='Enter email'
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              id='password'
              type='password'
              placeholder='Password'
            />
          </Form.Group>
          <Form.Group as={Col} controlId='formBasicPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              onChange={handleChange}
              id='confirmPassword'
              type='password'
              placeholder='Password'
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId='formGridAge'>
            <Form.Label>Age</Form.Label>
            <Form.Control onChange={handleChange} id='age' />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridGender'>
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as='select'
              defaultValue='Choose...'
              onChange={handleChange}
              id='gender'
            >
              <option>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Button variant='primary' type='submit' onClick={handleSubmitClick}>
          Submit
        </Button>
      </Form>
    </main>
  );
}
