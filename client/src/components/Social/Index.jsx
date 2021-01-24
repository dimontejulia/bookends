import React from "react";
import FriendList from "./FriendList";
import ClubList from "./ClubList";
import NewsFeed from "./NewsFeed";
import NewPostForm from "./NewPostForm";
import AddFriendForm from "./AddFriend";
import JoinClubForm from "./JoinClubForm";
import AddClub from "./AddClub";

import "../Social.scss";

export default function Index(props) {
  console.log("SOCIAL INDEX PROPS ======", props);

  const clubs = props.clubs;
  const clubIdList =
    clubs &&
    Object.values(clubs).map((club) => {
      return club;
    });

  const news = props.news;
  const newsList =
    news &&
    news.map((post) => {
      return post;
    });

  return (
    <div className="container">
      <div className="sidebar">
        <h2>Connect with Fellow Readers!</h2>
        <FriendList
          friendList={props.friends}
          deleteFriend={props.deleteFriend}
        />
        <AddFriendForm className="search-bar" addFriend={props.addFriend} />
        <br></br>
        <ClubList
          setCurrClub={props.setCurrClub}
          currClub={props.currClub}
          setCurrBook={props.setCurrBook}
          list={clubIdList}
          listName={"Clubs"}
          setClubNews={props.setClubNews}
        />
        <JoinClubForm joinClub={props.joinClub} />
        <br></br>
        <AddClub className="search-bar" addClub={props.addClub} />
      </div>
      <div className="main-content social__main-content">
        <h1>Book Talk</h1>
        <NewPostForm user={props.user} setNews={props.setNews} />
        <NewsFeed newsList={newsList} />
      </div>
    </div>
  );
}
