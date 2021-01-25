import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function List(props) {
  const { listName, list, friends } = props;
  const parsedList =
    list &&
    list.map((listItem) => <ListGroup.Item> {listItem} </ListGroup.Item>);
  return (
    <section>
      <h3>{listName}</h3>
      <ListGroup variant="flush">{parsedList}</ListGroup>
      {/* 
      <ul>{parsedList}</ul> */}
    </section>
  );
}

// const parsedList =
//     friendList &&
//     friendList.map((friend) => (
//       <tr key={friend.userid}>
//         <td>
//           {" "}
//           {friend.firstname} {friend.lastname}
//         </td>
//         <td className="social__lists-button">
//           <Button
//             onClick={() => {
//               deleteFriend(friend.userid);
//             }}
//             variant="primary"
//           >
//             <i class="fas fa-user-times"></i>
//           </Button>
//         </td>
//       </tr>
//     ));
