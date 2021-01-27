import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function List(props) {
  const { listName, list, friends } = props;
  const parsedList =
    list &&
    list.map((listItem) => (
      <ListGroup.Item key={listItem}> {listItem} </ListGroup.Item>
    ));
  return (
    <div className="list__container">
      <h1 className="sidebar__subheading">{listName}</h1>
      <ListGroup key={listName} variant="flush">
        {parsedList}
      </ListGroup>
      {/* 
      <ul>{parsedList}</ul> */}
    </div>
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
