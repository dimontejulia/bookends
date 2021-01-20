import React from "react";
import FriendList from "../List";
import ClubList from "./ClubList";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import NewsFeed from "../List";

export default function Index(props) {
  const friends = props.friends;
  const friendList = friends.map((friend) => {
    return `${friend.firstname} ${friend.lastname}`;
  });
  const clubs = props.clubs;
  console.log("clubs======", clubs);
  // const clubList = clubs.map((club) => {
  //   return `${club.book_club_id}`;
  // });

  const clubIdList =
    clubs &&
    clubs.map((club) => {
      console.log(club.book_club_id);
      return club.book_club_id;
    });

  console.log("clubIdList}}}}}}}}}}}", clubIdList);

  return (
    <div>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search by name or email"
          className="mr-sm-2"
        />
        <Button variant="outline-primary">Add Friend</Button>
      </Form>
      <FriendList list={friendList} listName="Friends" />
      <ClubList list={clubIdList} listName="Clubs" />
      <NewsFeed list={props.news} listName="News" />
    </div>
  );
}
