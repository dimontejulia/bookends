import React from "react";
import Card from "react-bootstrap/Card";
import "../Shelf.scss";

export function numBooksAward(numBooks) {
  let medal;
  if (numBooks > 30) {
    medal = "Gold";
  } else if (numBooks > 20) {
    medal = "Silver";
  } else {
    medal = "Bronze";
  }
  return (
    <div className="award-card">
      <Card.Body>
        <Card.Img
          variant="top"
          src={process.env.PUBLIC_URL + `/images/${medal.toLowerCase()}.png`}
        />
        <Card.Text className="award__text">
          Wow. You have {numBooks} books on your shelf!
        </Card.Text>
      </Card.Body>
    </div>
  );
}

export function oldBook(currentYear, oldestBook) {
  if (currentYear - oldestBook >= 100) {
    return (
      <div className="award-card">
        <Card.Body>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/old_timer.png"}
          />
          <Card.Text className="award__text">
            You have a book on your shelf from 100 years ago! It was published
            in {oldestBook}, {currentYear - oldestBook} years ago!
          </Card.Text>
        </Card.Body>
      </div>
    );
  }
}

export function newBook(currentYear, newestBook) {
  if (newestBook === currentYear - 1) {
    return (
      <div className="award-card">
        <Card.Body>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/images/millennial_reader.png"}
          />
          <Card.Text>
            You've read a book published in the last year. It was published in{" "}
            {newestBook}. Keep on supporting todays authors!
          </Card.Text>
        </Card.Body>
      </div>
    );
  }
}
