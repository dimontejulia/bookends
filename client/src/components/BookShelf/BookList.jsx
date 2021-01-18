import React from 'react';
import AddBookButton from './AddBookButton';
import BookListItem from './BookListItem';

export default function BookList(props) {
  const { books, setUserBooks, setCurrBook } = props;
  console.log('=========', props);
  const parsedList =
    books &&
    books.map((userBookID) => (
      <BookListItem
        title='Book title'
        author='Book Author'
        bookID={userBookID}
        setCurrBook={setCurrBook}
      />
    ));

  return (
    <section>
      <h1>BookList</h1>
      <br />
      <AddBookButton />
      {parsedList}
      {/* <BookListItem
        title='Book title'
        author='Book Author'
        bookID={'OL365902M'}
        setCurrBook={setCurrBook}
      /> */}
    </section>
  );
}

// export default function BookList(props) {
//   const { listName, list } = props;

//   const parsedList =
//     list && list.map((listItem) => <ListItem item={listItem} />);
//   return (
//     <section>
//       <h1>My Books</h1>
//       <ul>{parsedList}</ul>
//     </section>
//   );
// }
