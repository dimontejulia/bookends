import React from "react";
import FriendList from "../List";
import ClubList from "./ClubList";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import NewsFeed from "./NewsFeed";
import NewPostForm from "./NewPostForm";

export default function Index(props) {
  console.log("SOCIAL INDEX PROPS ======", props);

  const friends = props.friends;
  const friendList = friends.map((friend) => {
    return `${friend.firstname} ${friend.lastname}`;
  });

  const clubs = props.clubs;
  const clubIdList =
    clubs &&
    clubs.map((club) => {
      console.log(club.book_club_id);
      return club.book_club_id;
    });

  const news = props.news;
  const newsList =
    news &&
    news.map((post) => {
      return post;
    });
  console.log("postList}}}}}}}}}}}", newsList);

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
      <ClubList
        setCurrClub={props.setCurrClub}
        currClub={props.currClub}
        list={clubIdList}
        listName="Clubs"
      />
      <NewPostForm
        userId={props.user.id}
        news={props.news}
        setNews={props.setNews}
      />
      <NewsFeed newsList={newsList} listName="News" />
    </div>
  );
}
