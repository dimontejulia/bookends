import React from 'react';
import Button from '../Button';

export default function UserNotes(props) {
  const { comments, setUserBookData, currBookID } = props;

  // const bookData =
  //   userBookData && userBookData.find((bookObj) => bookObj.id === currBook.id);
  // [{}, {}];
  const handleInput = (event) => {
    setUserBookData((prev) => [...prev, (comments: event.target.value)]);
  };

  return (
    <div>
      <h3>Notes</h3>
      <br />
      <textarea
        onChange={handleInput}
        name='userNotes'
        rows='15'
        cols='75'
        placeholder='Any notes about the book? Write them here...'
        value={comments ? comments : ''}
      ></textarea>
    </div>
  );
}
