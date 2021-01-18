import React from 'react';
import NewsList from '../List';
import NewsListItem from '../ListItem';

export default function NewsFeed(props) {
  // const [state, setState] = useState();
  let userID = props.id;
  // console.log('>>>>>>>>>STATE>>>>>>>', state);
  const testList = ['Joaae', 'Saraaa', 'Beaath'];
  return (
    <section>
      <div>{userID ? userID : 'No ID'}</div>
      <NewsList list={testList} listName='News Feed' />
    </section>
  );
}
