// Friends who also read the book

import React from "react";
import FriendsWhoReadList from "../List";

export default function AlsoReadList(props) {
  console.log("ALSO READ IT");
  console.log("people who read", props.friendsWhoRead);
  //console.log("friends ids", props.friends.user_id);
  return (
    <div>
      <FriendsWhoReadList
        list={props.friendsWhoRead}
        listName="Friends who also read this book..."
      />
    </div>
  );
}
