import React from 'react';
import { Table, Button } from 'react-bootstrap';

export default function FriendsList(props) {
  const { friendList, deleteFriend } = props;
  console.log('!!!!!!!!', friendList);

  // const friends = props.friends;
  // const friendList = friends.map((friend) => {
  //   return `${friend.firstname} ${friend.lastname}`;
  // });

  const handleClick = (e) => {};
  const parsedList =
    friendList &&
    friendList.map((friend) => (
      <tr>
        {console.log('FRIEND', friend)}
        <td>
          {' '}
          {friend.firstname} {friend.lastname}
        </td>
        <td>"x is Reading..."</td>
        <td>
          <Button
            onClick={() => {
              deleteFriend(friend.userid);
            }}
          >
            DELETE
          </Button>
        </td>
      </tr>
    ));
  return (
    <section>
      <h2>Friends</h2>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Latest Post</th>
            <th>*Toggle w. Options Button?*</th>
          </tr>
        </thead>
        <tbody>{parsedList}</tbody>
      </Table>
    </section>
  );
}
