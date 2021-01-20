import React from 'react';
import Button from '../Button';

export default function UserNotes(props) {
  const { comments, setUserBookData, currBookID } = props;
  console.log(props);
  // [...prev, (comments: event.target.value)]
  const handleInput = (event) => {
    setUserBookData((prev) => ({
      ...prev,
      [currBookID]: { ...prev[currBookID], comments: event.target.value },
    }));
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

// userBookData:{
// OL365902M: {id: "OL365902M", dateread: "2018-09-01T00:00:00.000Z", rating: 2, comments: "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue…libero quis orci. Nullam molestie nibh in lectus.", status: "finished", …}
// OL7353617M: {id: "OL7353617M", dateread: "2018-07-20T00:00:00.000Z", rating: 1, comments: "Etiam justo. Etiam pretium iaculis justo. In hac h…asse platea dictumst. Etiam faucibus cursus urna.", status: "in_progress", …}
// }
