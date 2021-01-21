import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default function FriendList(props) {
  const [form, setForm] = useState([]);
  const { addFriend } = props;

  const handleChange = (e) => {
    const { value } = e.target;
    setForm((prevState) => ({
      value,
    }));
  };

  const handleClick = (e) => {
    console.log('EVENT', form.value);
    props.addFriend(form.value);
  };

  return (
    <Form inline>
      <FormControl
        onChange={handleChange}
        name='friendEmail'
        type='text'
        placeholder='Search by email'
        className='mr-sm-2'
      />
      <Button
        variant='outline-primary'
        onClick={() => {
          handleClick();
        }}
      >
        Add Friend
      </Button>
    </Form>
  );
}
