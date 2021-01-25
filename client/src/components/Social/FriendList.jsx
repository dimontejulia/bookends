import React from "react";
import { Table, Button } from "react-bootstrap";

export default function FriendsList(props) {
  const { friendList, deleteFriend } = props;

  const parsedList =
    friendList &&
    friendList.map((friend) => (
      <tr key={friend.userid}>
        <td>
          {" "}
          {friend.firstname} {friend.lastname}
        </td>
        <td className="social__lists-button">
          <Button
            onClick={() => {
              deleteFriend(friend.userid);
            }}
            variant="primary"
          >
            <i class="fas fa-user-times"></i>
          </Button>
        </td>
      </tr>
    ));
  return (
    <section>
      <h1 className="sidebar__subheading">Friends</h1>
      <Table hover size="sm">
        <tbody>{parsedList}</tbody>
      </Table>
    </section>
  );
}
