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
  //Need to format readDate to 2050-01-01
  //from  dateread: "2018-07-20T00:00:00.000Z"
  return (
    <div>
      <p>
        <br />
        Status: {userBookData ? userBookData.status : null}
      </p>
      <span>
        <Button>Add to list</Button>
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
          value={userBookData ? readDate : '2050-01-01'}
          max='2021-04-01'
        />
      </span>
    </div>
  );
}
