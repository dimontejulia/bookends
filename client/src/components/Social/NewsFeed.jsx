import React, { useState } from 'react';
import NewsList from '../List';
import NewsListItem from '../ListItem';

export default function NewsFeed() {
  const { state, setState } = useState();
  const testList = ['Joaae', 'Saraaa', 'Beaath'];
  return (
    <section>
      <div>{state ? state : 'No ID'}</div>
      <NewsList list={testList} listName='News Feed' />
    </section>
  );
}
