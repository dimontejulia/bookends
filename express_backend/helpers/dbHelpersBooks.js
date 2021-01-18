module.exports = (db) => {
  const getUserBooks = (userID) => {
    const query = {
      text: `SELECT * FROM users_books WHERE user_id = $1`,
      values: [userID],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const addBookToUser = (user_id, book_id) => {
    const query = {
      text: `INSERT INTO users_books (user_id, book_id) VALUES ($1, $2) RETURNING *`,
      values: [user_id, book_id],
    };

    return db
      .query(query)
      .then(() => {
        res.status(204).json({});
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

  return {
    getBooks,
    getUserBooks,
    addBookToUser,
  };
};
