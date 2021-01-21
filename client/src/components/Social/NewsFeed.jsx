import React from "react";
import Card from "react-bootstrap/Card";
import NewsFeedItem from "./NewsFeedItem";

export default function NewsFeed(props) {
  const { listName, newsList } = props;
  const parsedList =
    newsList && newsList.map((listItem) => <NewsFeedItem item={listItem} />);

  return (
    <section>
      <h1>NewsFeed</h1>
      <h1>{parsedList}</h1>
    </section>
  );
}
