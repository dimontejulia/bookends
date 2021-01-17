import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const Register = ({ users, onCreatePressed }) => {
  const [state, setState] = useState({
    userData: {},
    bookData: {},
    clubData: {},
  });

  const registrationHandler = (event) => {
    console.log('=========State@start=========', state.userData);
    const target = event.target;
    const value = target.value;
    console.log('=========TARGET=========', target);
    console.log('=========VALUE=========', value);
    const name = target.name;
    //prev User Data
    let currUserData = state.userData;

    setState({
      ...state,
      userData: { ...currUserData, [target.name]: value, test: 11 },
    });
    // setUser((prevState) => ({
    //   name: {
    //     ...prevState,
    //     value,
    //   },
    // }));
  };

  return (
    <main>
      <Form>
        <h1>Registration</h1>
        <Form.Row>
          <Form.Group as={Col} controlId='formGridFirstName'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name='firstName'
              placeholder='First name'
              onChange={registrationHandler}
            />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridLastName'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name='lastName'
              placeholder='Last Name'
              onChange={registrationHandler}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name='email'
            type='email'
            placeholder='Enter email'
            onChange={registrationHandler}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name='password'
              type='password'
              placeholder='Password'
              onChange={registrationHandler}
            />
          </Form.Group>
          <Form.Group as={Col} controlId='formBasicPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              name='passwordConfirmation'
              type='password'
              placeholder='Password'
              onChange={registrationHandler}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId='formGridAge'>
            <Form.Label>Age</Form.Label>
            <Form.Control name='age' onChange={registrationHandler} />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridGender'>
            <Form.Label>Gender</Form.Label>
            <Form.Control
              name='gender'
              onChange={registrationHandler}
              as='select'
              defaultValue='Choose...'
            >
              <option>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Button
          name='submitRegister'
          variant='primary'
          value='submit'
          type='submit'
          onClick={(e) => {
            e.preventDefault();
            onCreatePressed(state);
          }}
        >
          Submit
        </Button>
      </Form>
    </main>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createUser(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);

//===============================
//vvvv reference from video vvvvv
//===============================

// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { createTodo } from './actions';
// import './NewTodoForm.css';

// const NewTodoForm = ({ todos, onCreatePressed }) => {
//     const [inputValue, setInputValue] = useState('');

//     return (
//         <div className="new-todo-form">
//             <input
//                 className="new-todo-input"
//                 type="text"
//                 placeholder="Type your new todo here"
//                 value={inputValue}
//                 onChange={e => setInputValue(e.target.value)} />
//             <button
//                 onClick={() => {
//                     const isDuplicateText =
//                         todos.some(todo => todo.text === inputValue);
//                     if (!isDuplicateText) {
//                         onCreatePressed(inputValue);
//                         setInputValue('');
//                     }
//                 }}
//                 className="new-todo-button">
//                 Create Todo
//             </button>
//         </div>
//     );
// };

// const mapStateToProps = state => ({
//     todos: state.todos,
// });

// const mapDispatchToProps = dispatch => ({
//     onCreatePressed: text => dispatch(createTodo(text)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
