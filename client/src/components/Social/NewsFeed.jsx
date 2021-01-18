import React from 'react';
import NewsList from '../List';

export default function NewsFeed(props) {
  return (
    <section>
      <NewsList list={props.newsList} listName='News Feed' />
    </section>
  );
}
