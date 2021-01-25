import React from 'react';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Link } from 'react-router-dom';

export default function UserActions(props) {
  const { bookData, setBookState } = props;

  let readDate = null;

  const popover = (
    <Popover id='popover-basic'>
      <Popover.Title as='h3'>Confirmation</Popover.Title>
      <Popover.Content>
        Are you sure that you would like to <strong>delete</strong> this book?
        <br />
        <br />
        <Button variant='light' onClick={() => document.body.click()}>
          Cancel
        </Button>
        <Link to={`/${props.listName}`}>
          <Button
            variant='danger'
            onClick={() =>
              props.deleteUserBook(props.currBookID, props.listName)
            }
          >
            Delete
          </Button>
        </Link>
      </Popover.Content>
    </Popover>
  );

  const handleInput = (event) => {
    setBookState((prev) => ({
      ...prev,
      status: event.target.value,
    }));
  };

  const handleCal = (event) => {
    setBookState((prev) => ({
      ...prev,
      dateread: event.target.value,
    }));
  };

  const formatDate = (rawDate) => {
    if (rawDate) {
      return rawDate.slice(0, 10);
    }
  };

  if (bookData) {
    readDate = formatDate(bookData.dateread);
  }

  return (
    <div>
      <Button>Add to list</Button>
      <OverlayTrigger
        rootClose={true}
        trigger='click'
        placement='right'
        overlay={popover}
      >
        <Button variant='danger'>Delete Book</Button>
      </OverlayTrigger>
      <br></br>
      <span>
        <br></br>
        <h4>Status: {bookData ? bookData.status : null}</h4>

        <select
          onChange={handleInput}
          name='status'
          id='status'
          value={bookData ? bookData.status : null}
        >
          <option value='On my list'>On my list</option>
          <option value='In Progress'>Reading</option>
          <option value='Finished'>Read</option>
        </select>
        {bookData && bookData.status === 'Finished' ? (
          <span>
            <label htmlFor='read'>Read: </label>
            <input
              onChange={handleCal}
              type='date'
              id='read'
              name='read-date'
              value={bookData ? readDate : null}
            />
          </span>
        ) : null}
      </span>
      {/* needs to rerender shelf list */}
    </div>
  );
}
