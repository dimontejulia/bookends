import React from 'react';
// import {connect} from 'react-redux';

export default function AddBookButton() {
  return (
    <img
      src={'https://via.placeholder.com/150x200.png?text=Add'}
      alt={'Add Book to Shelf'}
    />
  );
};

// const mapStateToProps = (state) => ({
//     books: state.book
// })

// const mapDispatchToProps = dispatch => ({
//   onCreatePressed: text => dispatch(addBook(text)),
// });
