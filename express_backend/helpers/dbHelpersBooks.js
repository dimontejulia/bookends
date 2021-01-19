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

  const getSpecificBook = (book_id) => {
    const query = {
      text: "SELECT * FROM users_books WHERE id = $1",
      values: [book_id],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  return {
    getBooks,
    getSpecificBook
  };
};
