import React from "react";
import SearchIndex from "../Search/SearchIndex.jsx";
import BookCarosel from "./BookCarosel";

export default function Index(props) {
  return (
    <div>
      <h1>MainPage</h1>
      <SearchIndex />
      <h3>Trending</h3>
      <BookCarosel />
      <h3>Latest Books...</h3>
      <BookCarosel />
    </div>
  );
}
