import React from 'react';
import { Table, Button, ListGroup } from 'react-bootstrap';

export default function FriendsList(props) {
  const { friendList, deleteFriend } = props;

  const parsedList =
    friendList &&
    friendList.map((friend) => (
      <tr key={friend.userid}>
        <td>
          {' '}
          {friend.firstname} {friend.lastname}
        </td>
        {/* <td>"x is Reading..."</td> */}
        <td>
          <Button
            onClick={() => {
              deleteFriend(friend.userid);
            }}
          >
            <i class='fas fa-user-times'></i>
          </Button>
        </td>
      </tr>
    ));
  return (
    <section>
      <h1>Friends</h1>
      <Table hover size='sm'>
        <tbody>{parsedList}</tbody>
      </Table>
    </section>
  );
}
