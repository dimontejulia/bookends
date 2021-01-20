import React from 'react';
import Button from '../Button';

export default function UserActions(props) {
  console.log('!!!!!!%%%%%%%%', props);
  let readDate = null;
  const formatDate = (rawDate) => {
    //from  dateread: "2018-07-20T00:00:00.000Z"
    return rawDate.slice(0, 10);
    //Need to format readDate to 2050-01-01
  };
  const { userBookData } = props;
  console.log('%%%%%%%%', userBookData);
  if (userBookData) {
    readDate = formatDate(userBookData.dateread);
  }
  console.log('DATE', readDate);
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
          placeholder={userBookData ? readDate : null}
        />
      </span>
    </div>
  );
}
