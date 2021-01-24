import React from 'react';
import classnames from 'classnames';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import NewPostForm from './Social/NewPostForm';

export default function ShareBook(props) {
  const popover = (
    <Popover id='popover-basic'>
      <Popover.Title as='h3'>Share this book...</Popover.Title>
      <Popover.Content>
        Edit or Delete your club.
        <br />
        <br />
        <div>
          <NewPostForm
            user={props.user}
            setNews={props.setNews}
            placeholder={{
              title: `${props.book.title} by, ${props.book.author}`,
              body: '',
            }}
          />
        </div>
        <Button variant='light' onClick={() => document.body.click()}>
          Cancel
        </Button>
      </Popover.Content>
    </Popover>
  );
  return (
    <OverlayTrigger
      rootClose={true}
      trigger='click'
      placement='right'
      overlay={popover}
    >
      <Button block classNames='carousel__book-button'>
        Share Book
      </Button>
    </OverlayTrigger>
  );
}
