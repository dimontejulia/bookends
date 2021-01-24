import React, { useEffect, useCallback } from 'react';
import classnames from 'classnames';
import { Button, Popover, Accordion, Card } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Popover from 'react-bootstrap/Popover';
import NewPostForm from './Social/NewPostForm';

export default function ShareBook(props) {
  const popover = (
    <Popover id='popover-basic'>
      <Popover.Title as='h3'>Share this book...</Popover.Title>
      <Popover.Content>
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

  //   <OverlayTrigger
  //   rootClose={true}
  //   trigger='click'
  //   placement='auto-end'
  //   overlay={popover}
  // >
  //   <Button block classNames='carousel__book-button'>
  //     Share Book
  //   </Button>
  // </OverlayTrigger>
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey='0'>
          Share Book
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <NewPostForm
            user={props.user}
            setNews={props.setNews}
            placeholder={{
              title: `${props.book.title} by, ${props.book.author}`,
              body: '',
            }}
          />
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
