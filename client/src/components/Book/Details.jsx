import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Badge from "react-bootstrap/Badge";

export default function Details(props) {
  const {
    description,
    subjects,
    title,
    author,
    published,
    coverLink,
  } = props.book;

  const subjectStr =
    subjects &&
    subjects.map((subject) => {
      return (
        <Badge className="book__subject-badge" variant="dark">
          {subject}
        </Badge>
      );
    });

  return (
    <div>
      {!title ? (
        <Spinner animation="border" variant="secondary" />
      ) : (
        <div>
          {/* <h1>
            {title} by {author}
          </h1> */}
          <div className="subjects-container">
            {subjects ? subjectStr.splice(0, 6) : null}
          </div>
          <div className="details-container">
            <img className="book__cover-img" src={coverLink} alt={title} />
            <div className="book__description">
              <p>{description ? description : null}</p>
              <p className="book__published">
                Published: {published ? published : null}
              </p>
              <p></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
