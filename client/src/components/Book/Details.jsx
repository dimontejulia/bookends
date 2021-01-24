import React from "react";
import Spinner from "react-bootstrap/Spinner";
export default function Details(props) {
  const {
    description,
    subjects,
    title,
    author,
    published,
    coverLink,
  } = props.book;
  console.log("subjects", subjects);

  return (
    <div>
      {!title ? (
        <Spinner animation="border" variant="secondary" />
      ) : (
        <div>
          <h1>
            {title} by {author}
          </h1>
          <div className="details-container">
            <div className="details-cover">
              <img className="book__cover-img" src={coverLink} alt={title} />
            </div>
            <div className="book-details">
              <h5>Description:</h5>
              <p>{description ? description : null}</p>
            </div>
          </div>
          Published: {published ? published : null}
          <br />
          Subjects: {subjects ? subjects.slice(0, 10) : null}
        </div>
      )}
    </div>
  );
}
