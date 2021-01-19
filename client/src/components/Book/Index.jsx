import React from 'react';
import Details from './Details';
import Rating from './Rating';
import UserNotes from './UserNotes';
import AlsoReadList from './AlsoReadList';

export default function Index(props) {
  const { currBook, userBookData } = props;
  return (
    <div>
      <Details book={currBook} />
      <Rating userRating={userBookData.rating} />
      <UserNotes userBookData={userBookData} />
      <AlsoReadList friendsWhoRead={userBookData.friendsWhoReadIt} />
    </div>
  );
}
