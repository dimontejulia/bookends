import React from 'react';
import Details from './Details';
import Rating from './Rating';
import UserNotes from './UserNotes';
import UserActions from './userActions';
import AlsoReadList from './AlsoReadList';
import Button from '../Button';

export default function Index(props) {
  const { currBook, userBookData } = props;
  console.log('PROPS', props);

  const bookData = userBookData.find((bookObj) => bookObj.id === currBook.id);

  console.log('BookData', bookData);

  return (
    <div>
      <Details book={currBook} />
      <br />
      <Rating userRating={bookData ? bookData.rating : 0} />
      <UserActions userBookData={bookData} />
      <UserNotes comments={bookData ? bookData.comments : null} />
      <Button>Save</Button>
      <br />
      <AlsoReadList friendsWhoRead={userBookData.friendsWhoReadIt} />
    </div>
  );
}
