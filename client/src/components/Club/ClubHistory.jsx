import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

//As of 23 1400hrs not used (couldn't intigrate w. new currClub obj)

export default function ClubHistory(props) {
  const { bookHistory, numBooks } = props;
  console.log('bookHistory', bookHistory);
  //map1 = array1.map(x => x * 2);
  return (
    <div>
      <ListGroup>
        <ListGroup.Item variant='primary'>
          {`Book Club History : ${numBooks} books read`}
        </ListGroup.Item>
        {bookHistory.map((book) => (
          <ListGroup.Item>{book}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
