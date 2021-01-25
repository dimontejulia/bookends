import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default function EditClub(props) {
  const { editClub, currClub } = props;
  const [form, setForm] = useState(currClub);

  console.log('EDIT CLUB FORM start >', form);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log('Form >>>>>>>', form);

    const editedClubObj = {
      ...currClub,
      book_club_name: form.book_club_name,
      club_description: form.club_description,
      avatar: form.avatar,
    };

    console.log('EVENT CLUB >>>>>>>', editedClubObj);
    editClub(editedClubObj, null);
    //Form resets w/o message and regardless of success or error...
    props.setClubInfo(editedClubObj);
    setForm({ book_club_name: '', club_description: '', avatar: '' });
    document.body.click();
  };

  return (
    <Form>
      <h1>Edit Club</h1>
      <Form.Group>
        <Form.Control
          onChange={handleChange}
          id='book_club_name'
          type='text'
          value={form.book_club_name}
          placeholder='Club Name'
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          onChange={handleChange}
          id='club_description'
          type='text'
          value={form.club_description}
          placeholder='Club Description'
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          onChange={handleChange}
          id='avatar'
          type='url'
          value={form.avatar}
          placeholder='Club Avatar Link'
        />
        <Form.Text className='text-muted'>
          Please use a direct link to the image!
        </Form.Text>
      </Form.Group>
      <Button variant='outline-primary' type='submit' onClick={handleClick}>
        Edit Club
      </Button>
    </Form>
  );
}
