import React from "react";
import FriendList from "./FriendList";
import ClubList from "./ClubList";
import NewsFeed from "./NewsFeed";
import NewPostForm from "./NewPostForm";
import AddFriend from "./AddFriend";
import AddClub from "./AddClub";

export default function Index(props) {
  console.log("SOCIAL INDEX PROPS ======", props);

  const clubs = props.clubs;
  const clubIdList =
    clubs &&
    clubs.map((club) => {
      return club;
    });

  const news = props.news;
  const newsList =
    news &&
    news.map((post) => {
      return post;
    });

  return (
    <div>
      <AddFriend addFriend={props.addFriend} />
      <FriendList
        friendList={props.friends}
        deleteFriend={props.deleteFriend}
      />
      <AddClub addClub={props.addClub} />
      <ClubList
        setCurrClub={props.setCurrClub}
        currClub={props.currClub}
        setCurrBook={props.setCurrBook}
        list={clubIdList}
        listName={"Clubs"}
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
