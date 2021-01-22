import React, { useState } from "react";
import BookListItem from "./BookListItem";
import CardColumns from "react-bootstrap/CardColumns";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function BookList(props) {
  const { books, setUserBooks, setCurrBook } = props;
  const [form, setForm] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const formatStatus = (inputStatus) => {
    switch (inputStatus) {
      case "in_progress":
        return "Reading";

      case "finished":
        return "Read it";
        break;
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setForm((prevState) => ({
      value,
    }));
  };

  const handleClick = (e) => {
    setSearchWord(form.value);
    //Form resets w/o message and regardless of success or error...
    setForm((prev) => ({ ...prev, value: "" }));
  };
  const clickReset = (e) => {
    setSearchWord("");
    setForm((prev) => ({ ...prev, value: "" }));
  };

  const booklistitem = function (book) {
    if (
      book.subject.toLowerCase().includes(searchWord.toLowerCase()) ||
      book.title.toLowerCase().includes(searchWord.toLowerCase()) ||
      book.author.toLowerCase().includes(searchWord.toLowerCase())
    ) {
      return (
        <BookListItem
          title={book.title}
          author={book.author}
          first_publish_year={book.first_publish_year}
          subject={book.subject}
          bookID={book.id}
          bookStatus={formatStatus(book.status)}
          setCurrBook={setCurrBook}
        />
      );
    }
  };

  const parsedList =
    books && Object.values(books).map((book) => booklistitem(book));

  return (
    <section>
      <Form>
        <FormControl
          onChange={handleChange}
          id="searchBook"
          name="searchBook"
          type="text"
          value={form.value}
          placeholder="Search by title, authour, genre etc."
          className="mr-lg-3"
        />
        <Button
          variant="outline-primary"
          onClick={() => {
            handleClick();
          }}
        >
          Search
        </Button>
        <Button
          variant="outline-dark"
          onClick={() => {
            clickReset();
          }}
        >
          Reset
        </Button>
      </Form>
      <CardColumns>{parsedList}</CardColumns>
    </section>
  );
}
