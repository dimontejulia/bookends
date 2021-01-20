import React from 'react';
import Details from './Details';
import Rating from './Rating';
import UserNotes from './UserNotes';
import UserActions from './userActions';
import AlsoReadList from './AlsoReadList';

export default function Index(props) {
  const { currBook, userBookData } = props;
  console.log('PROPS', props);

  const bookData = userBookData.find((bookObj) => bookObj.id === currBook.id);

  console.log('BookData', bookData);

  return (
    <div>
      <Details book={currBook} />
      <Rating userRating={bookData ? bookData.rating : 0} />
      <UserActions userBookData={bookData} />
      <UserNotes
        setUserBooks={console.log('Click')}
        comments={bookData ? bookData.comments : null}
      />
      <AlsoReadList friendsWhoRead={userBookData.friendsWhoReadIt} />
    </div>
  );
}
