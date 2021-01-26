module.exports = (db) => {
  const getBooks = () => {
    const query = {
      text: "SELECT * FROM users_books",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getAllBookData = (book_id) => {
    const query = {
      text: "SELECT * FROM books where id = $1",
      values: [book_id],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getBookReaders = (book_id) => {
    const query = {
      text: `
      SELECT user_id 
      FROM users_books
      WHERE book_id = $1`,
      values: [book_id],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getCarouselBooks = (category) => {
    const query = {
      text: `
        SELECT book_id as id, title, author, subject, first_publish_year
        FROM books
        JOIN home_page_books hp ON books.id = hp.book_id
        WHERE category = $1
      `,
      values: [category],
    };

    console.log("checking DB...");

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  return {
    getBooks,
    getBookReaders,
    getCarouselBooks,
    getAllBookData,
  };
};
