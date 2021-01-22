// Friends who also read the book

import React from "react";
import FriendsWhoReadList from "../List";

export default function AlsoReadList(props) {
  return (
    <div>
      <FriendsWhoReadList
        list={props.friendsWhoRead}
        listName="Friends who also read this book..."
      />
    </div>
  );
}
