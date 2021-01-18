import React from 'react';
import BookList from '../List';

export default function Index(props) {
  // const [books, setBook] = props;
  console.log('Books INDEX', props);
  // let books = ['OL362125M', 'OL25428864M', 'OL15501024M', 'OL4424220M'];
  return (
    <div>
      <p>User books will go here</p>
      <BookList list={props.books} listName='My List' />
    </div>
  );
}
