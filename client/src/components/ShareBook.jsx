import React from 'react';
import { Button, Popover, Accordion, Card } from 'react-bootstrap';
import NewPostForm from './Social/NewPostForm';

export default function ShareBook(props) {
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
