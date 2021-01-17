import React from 'react';
import NewsList from '../List';
import NewsListItem from '../ListItem';

export default function NewsFeed() {
  const testList = ['Joaae', 'Saraaa', 'Beaath'];
  return (
    <section>
      <NewsList list={testList} listName='News Feed' />
    </section>
  );
}
