import React from 'react';
import Button from '../Button';

export default function UserActions(props) {
  console.log('!!!!!!%%%%%%%%', props);
  let readDate = null;
  const { userBookData } = props;
  console.log('%%%%%%%%', userBookData);
  if (userBookData) {
    readDate = userBookData.dateread;
  }

  return (
    <div>
      <p>
        <br />
        Status: {userBookData ? userBookData.status : null}
      </p>
      <span>
        <Button>Add to list</Button>
        <br />
        <select name='status' id='status'>
          <option value='reading'>Reading</option>
          <option value='read'>Read</option>
          <option value='wantTo'>Want to read</option>
        </select>
        <label htmlFor='read'>Read: </label>
        <input
          type='date'
          id='read'
          name='read-date'
          value={userBookData ? readDate : '2050-01-01'}
          max='2021-04-01'
        />
      </span>
    </div>
  );
}
