module.exports = (db) => {
  const addBookToUser = (book_id) => {
    const query = {
      text: `INSERT INTO books (id, title, subject) VALUES ($1, $2, $3) RETURNING *`,
      values: ["11", "harry potter", "magic"],
    };

    return db
      .query(query)
      .then((result) => {
        console.log("result.rows ------>>>>>", result.rows);
        return result.rows;
      })
      .catch((err) => err);
  };

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
    getSpecificBook,
    addBookToUser,
  };
};
