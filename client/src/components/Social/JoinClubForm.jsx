import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default function JoinClub(props) {
  const [form, setForm] = useState([]);
  const { joinClub } = props;

  const handleChange = (e) => {
    const { value } = e.target;
    setForm((prevState) => ({
      value,
    }));
  };

  const handleClick = (e) => {
    if (form.value) {
      props.joinClub(form.value);
      //Form resets w/o message and regardless of success or error...
      setForm((prev) => ({ ...prev, value: '' }));
    }
  };

  return (
    <Form inline>
      <FormControl
        onChange={handleChange}
        id='JoinClubForm'
        name='clubId'
        type='text'
        value={form.value}
        placeholder='Enter Book Club ID'
        className='mr-sm-2'
      />
      <Button
        variant='outline-primary'
        onClick={() => {
          handleClick();
        }}
      >
        Join Book Club
      </Button>
    </Form>
  );
}
