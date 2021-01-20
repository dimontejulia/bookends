import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MoreInfo from './MoreInfo';

const Book = ({ book, ...props }) => {
  const {
    title,
    author_name,
    id_goodreads = [],
    key,
    first_publish_year,
    cover_edition_key,
  } = book;
  const { currBook, setCurrBook } = props;
  const [modalShow, setModalShow] = useState(false);

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const bookKey = key.split('/works/')[1];
    props.setUserBooks((prevState) => ({
      ...prevState,
      [cover_edition_key]: {
        id: cover_edition_key,
        title: title,
        author: author_name,
      },
    }));

    // setUserBookData((prev) => ({
    //   ...prev,
    //   [currBookID]: { ...prev[currBookID], comments: event.target.value },
    // }));
  };

  const addBook = () => {
    // const bookKey = key.split('/works/')[1];
    // const URL = `/api/books/`;
    // axios
    //   .put(`${URL}${bookKey}`, { book_id: bookKey })
    //   .then(function (response) {
    //     if (response.status === 200) {
    //       props.setUserBooks((prevState) => [
    //         ...prevState,
    //         { id: cover_edition_key, title: title, author: author_name },
    //       ]);
    //       console.log('success', props, cover_edition_key);
    //       // props.showError(null);
    //     } else {
    //       console.log('error');
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log('Search.Book ERROR: ', error);
    //   });
  };

  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img
        variant='top'
        src={`http://covers.openlibrary.org/b/olid/${cover_edition_key}-M.jpg`}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          {/* {author_name.join(', ')} */}
          {author_name}
        </Card.Subtitle>

        <Button onClick={handleSubmitClick}>Add to shelf</Button>
        <Button
          variant='primary'
          onClick={() => {
            setCurrBook({ id: book.text[0] });
            setModalShow(true);
          }}
        >
          More Info
        </Button>

        <MoreInfo
          book={book}
          key={book.key}
          description={currBook.description}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Card.Body>
    </Card>
  );
};

export default Book;
