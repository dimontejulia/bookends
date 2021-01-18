import React from 'react';
import Button from '../Button';
import Rating from './Rating';

export default function UserNotes(props) {
  let { status, readDate, notes } = props.userBookData;
  return (
    <div>
      <div>
        <p>
          (ref user read date/ reading / Add to List...etc)
          <br />
          Status: {status}
        </p>
        <span>
          <Button>Add to list</Button>
          <Button>Reading</Button>
          <label htmlFor='read'>Read: </label>
          <input
            type='date'
            id='read'
            name='read-date'
            value={readDate ? readDate : '2021-01-01'}
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
        value={notes ? notes : ''}
      ></textarea>
      <br />
      <Button>Save Notes</Button>
    </div>
  );
}
