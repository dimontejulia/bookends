import React from 'react';
import Button from '../Button';

export default function UserActions(props) {
  let readDate = null;
  const formatDate = (rawDate) => {
    return rawDate.slice(0, 10);
  };
  const { userBookData } = props;
  if (userBookData) {
    readDate = formatDate(userBookData.dateread);
  }
  return (
    <div>
      <p>
        <br />
        <Button>Add to list</Button>
      </p>
      <span>
        Status: {userBookData ? userBookData.status : null}
        <br />
        <select
          name='status'
          id='status'
          value={userBookData ? userBookData.status : null}
        >
          <option value='onList'>On my list</option>
          <option value='in_progress'>Reading</option>
          <option value='finished'>Read</option>
        </select>
        <label htmlFor='read'>Read: </label>
        <input
          type='date'
          id='read'
          name='read-date'
          value={userBookData ? readDate : null}
        />
      </span>
    </div>
  );
}
