import React, { useState } from 'react';
import Button from '../Button';
import Form from 'react-bootstrap/Form';

export default function UserNotes(props) {
  const { comments, setBookState, currBookID } = props;
  const handleInput = (event) => {
    setBookState((prev) => ({
      ...prev,
      comments: event.target.value,
    }));
  };

  return (
    <div>
      <h3>Notes</h3>
      <Form className='newsfeed-post'>
        <Form.Group controlId='body'>
          <Form.Control
            onChange={handleInput}
            name='userNotes'
            name='body'
            as='textarea'
            placeholder='Notes about the book? Write them here, this one is just for you...'
            rows={3}
            value={comments ? comments : ''}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
