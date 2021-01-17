import React from "react";
import SearchBar from "../Search/SearchBar";
import BookCarosel from "./BookCarosel";

export default function Index() {
  return (
    <div>
      <h1>MainPage</h1>
      <SearchBar />
      <h3>Trending</h3>
      <BookCarosel />
      <h3>Latest Books...</h3>
      <BookCarosel />
    </div>
  );
}
