import React from "react";
import FriendList from "../List";
import NewsFeed from "../List";

export default function Index(props) {
  const friends = props.friends;
  const friendList = friends.map((friend) => {
    return `${friend.firstname} ${friend.lastname}`;
  });
  const test = ["Randi Buzza", "Liuka B..."];
  return (
    <div>
      <FriendList list={friendList} listName="Friends" />
      <NewsFeed list={props.news} listName="News" />
    </div>
  );
}
