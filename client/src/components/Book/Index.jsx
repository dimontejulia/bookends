import React from 'react';
import Details from './Details';
import Rating from './Rating';
import UserNotes from './UserNotes';
import AlsoReadList from './AlsoReadList';

export default function Index(props) {
  const { bookID, userBookData } = props;
  return (
    <div>
      <h1>Book Details</h1>
      <Details bookID={bookID} />
      <Rating userRating={userBookData.rating} />
      <UserNotes userBookData={userBookData} />
      <AlsoReadList />
    </div>
  );
}
