import React from 'react';
import Button from '../Button';
import Rating from './Rating';

export default function UserNotes() {
  return (
    <div>
      <Button>Send Book to Friend</Button>
      <h3>Notes</h3>
      <br />
      <textarea
        name='userNotes'
        rows='15'
        cols='75'
        placeholder='Any notes about the book? Write them here...'
      ></textarea>
      <br />
      <Button>Save Notes</Button>
    </div>
  );
}
