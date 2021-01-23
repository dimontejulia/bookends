import React from 'react';
import ClubNewsForm from '../Social/NewPostForm';
import ClubNewsFeed from '../Social/NewsFeed'; //newsList & Name
import NewsItem from '../Social/NewsFeedItem';

export default function ClubInfo(props) {
  const { postClubNews, clubNews, clubId } = props;

  //Iterate over News Obj for this Club's News
  //Generate Items
  clubNews &&
    Object.values(clubNews).map((newsItem) => {
      console.log('MAPS!!!', newsItem);
    });

  return (
    <section>
      <ClubNewsForm />
      <ClubNewsFeed newsList={clubNews} listName='Club News:' />
    </section>
  );
}

/* 
<NewPostForm
user={props.user}
news={props.news}
setNews={props.setNews}
/>
<NewsFeed newsList={newsList} listName="News" /> */
