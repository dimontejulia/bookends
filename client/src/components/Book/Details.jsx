import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
export default function Details(props) {
  const {
    description,
    subjects,
    title,
    author,
    published,
    coverLink,
  } = props.book;
  return (
    <div>
      <h1> Book Details</h1>
      {!title ? (
        <Spinner animation='border' variant='secondary' />
      ) : (
        <div>
          <h2>
            {title} by {author}
          </h2>
          <div className='details-container'>
            <div className='details-cover'>
              <img className='book__cover-img' src={coverLink} alt={title} />
            </div>
            <div className='book-details'>
              <h5>Description:</h5>
              <p>{description ? description : null}</p>
            </div>
          </div>
          Published: {published ? published : null}
          <br />
          Subjects: {subjects ? subjects.slice(0, 10) : null}
        </div>
      )}
    </div>
  );
}
