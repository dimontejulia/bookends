import React from 'react';
import NewsFeedItem from './NewsFeedItem';

export default function NewsFeed(props) {
  const { newsList } = props;
  const parsedList =
    newsList &&
    newsList.map((listItem) => (
      <NewsFeedItem key={listItem.postid} item={listItem} />
    ));

  return (
    <section>
      <h1>NewsFeed</h1>
      <h1>{parsedList}</h1>
    </section>
  );
}
