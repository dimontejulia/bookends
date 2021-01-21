import React from "react";

export default function Details(props) {
  const {
    description,
    subjects,
    title,
    author,
    published,
    coverLink,
  } = props.book;

  return (
    <div>
      <h2>
        {title} by {author}
      </h2>
      <img className="book__cover-img" src={coverLink} alt={title} />
      <h5>Description:</h5>
      <p>{description ? description : null}</p>
      Published: {published ? published : null}
      <br />
      Subjects: {subjects ? subjects : null}
    </div>
  );
}
