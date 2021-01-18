import React from 'react';
import NewsList from '../List';
import NewsListItem from '../ListItem';

export default function NewsFeed(props) {
  let userID = props.id;
  const testList = ['Joaae', 'Saraaa', 'Beaath'];
  return (
    <section>
      <div>{userID ? userID : 'No ID'}</div>
      <NewsList list={testList} listName='News Feed' />
    </section>
  );
}
