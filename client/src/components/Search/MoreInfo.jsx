import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const MoreInfo = ({ book, key, description, ...props }) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {book.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Author: {book.author_name}</h4>
        <p>Description: {description}</p>
        <p>First published: {book.first_publish_year}</p>
        <a href={`https://openlibrary.org${book.key}`}>Show on Open Library</a>
        {/* <a href={`https://www.goodreads.com/book/show/${book.id_goodreads[0]}`}>
          Show on Goodreads
        </a> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MoreInfo;
