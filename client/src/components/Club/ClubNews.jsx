import React from 'react';
import ClubNewsForm from './ClubNewsForm';
import ClubNewsFeed from '../Social/NewsFeed';
import NewsItem from '../Social/NewsFeedItem';

export default function ClubInfo(props) {
  const { postClubNews, clubNews } = props;

  return (
    <section>
      <ClubNewsForm postClubNews={postClubNews} />
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
