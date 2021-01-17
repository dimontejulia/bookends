import React from "react";

const Book = ({ book }) => {
  const {
    title,
    author_name,
    id_goodreads = [],
    key,
    first_publish_year,
    edition_count,
  } = book;

  return (
    <div className="card is-block" style={{ marginBottom: "50px" }}>
      <div className="card-content">
        <p className="title">{title}</p>
        {author_name && <p className="subtitle">by {author_name.join(", ")}</p>}
        <p>First published: {first_publish_year}</p>
        <p>Editions: {edition_count}</p>
      </div>
      <footer className="card-footer">
        <a href={`https://openlibrary.org${key}`} className="card-footer-item">
          Show on Open Library
        </a>
        {id_goodreads.length > 0 && (
          <a
            href={`https://www.goodreads.com/book/show/${id_goodreads[0]}`}
            className="card-footer-item"
          >
            Show on Goodreads
          </a>
        )}
      </footer>
    </div>
  );
};

export default Book;
