// Friends who also read the book

import React from "react";
import FriendsWhoReadList from "../List";

export default function AlsoReadList(props) {
  return (
    <div className="list__container">
      <FriendsWhoReadList
        list={props.friendsWhoRead}
        listName="Friends who also read this book..."
      />
    </div>
  );
}
