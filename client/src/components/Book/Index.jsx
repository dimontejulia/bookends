import React, { useState, useEffect } from 'react';
import Details from './Details';
import Rating from './Rating';
import UserNotes from './UserNotes';
import UserActions from './userActions';
import AlsoReadList from '../List';
import ButtonClick from '../Button';
import '../Details.scss';

export default function Index(props) {
  const { saveBookNotes, deleteUserBook, paramId, setCurrBook } = props;
  const books = props.state.books;
  const currBook = props.state.currBook;

  useEffect(() => {
    //Sets currBook if accessed directly by url
    setCurrBook({ ...props.state.currBook, id: paramId });
  }, []);

  useEffect(() => {
    //Updates User's book notes when books are changed
    //Other wise direct url wont load them
    setBookState(bookData);
  }, [books]);

  const bookData =
    books && Object.values(books).find((bookObj) => bookObj.id === currBook.id);
  const [bookState, setBookState] = useState();

  return (
    <div className='container'>
      <div className='sidebar'>
        <h2>Book Diary</h2>
        <UserActions
          currBookID={currBook.id}
          bookData={bookState}
          setBookState={setBookState}
          deleteUserBook={deleteUserBook}
        />
        <UserNotes
          currBookID={currBook.id}
          comments={bookState ? bookState.comments : null}
          setBookState={setBookState}
        />

        <Rating
          currBookID={currBook.id}
          userRating={bookState ? bookState.rating : 0}
          setBookState={setBookState}
        />
        <br></br>
        {/* SAVE BUTTON WILL HAVE TO TRIGGER A SAVE TO DB HOOK */}
        <ButtonClick onClick={() => saveBookNotes(bookState)}>Save</ButtonClick>
        {currBook.friends ? (
          <AlsoReadList
            list={currBook.friends}
            listName={`Friends Who also read ${currBook.title}`}
          />
        ) : null}
      </div>
      <div className='main-content'>
        <Details book={currBook} />
      </div>
    </div>
  );
}
