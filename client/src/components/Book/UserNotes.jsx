import React from 'react';
import Button from '../Button';
import Rating from './Rating';

export default function UserNotes() {
  return (
    <div>
      <div>
        <p>Status: (ref user read date/ reading / Add to List...etc)</p>
        <span>
          <Button>Add to list</Button>
          <Button>Reading</Button>
          <label htmlFor='read'>Read: </label>
          <input
            type='date'
            id='read'
            name='read-date'
            value='2021-01-01'
            max='2021-04-01'
          />
          <Button>Edit Date</Button>
          <Button>Send Book to Friend</Button>
        </span>
      </div>
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
