DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS users_books CASCADE;
DROP TABLE IF EXISTS friends CASCADE;
DROP TABLE IF EXISTS user_book_clubs CASCADE;
DROP TABLE IF EXISTS future_books CASCADE;
DROP TABLE IF EXISTS book_club CASCADE;
DROP TABLE IF EXISTS books CASCADE;


CREATE TABLE users (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "first_name" VARCHAR(255) NOT NULL,
  "last_name" VARCHAR(255) NOT NULL,
  "email" VARCHAR(255) NOT NULL,
  "password" VARCHAR(255) NOT NULL,
  "age" INT,
  "gender" VARCHAR(255),
  "created_at" DATE NOT NULL
);

CREATE TABLE friends (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "user_id" INTEGER REFERENCES users(id) ON DELETE CASCADE,
  "friend_list" int[]
);

CREATE TABLE books (
  "isbn" VARCHAR(255) PRIMARY KEY NOT NULL,
  "title" VARCHAR(255) NOT NULL,
  "author_last" VARCHAR(255) NOT NULL,
  "author_first" VARCHAR(255) NOT NULL
);

CREATE TABLE future_books (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "user_id" INTEGER REFERENCES users(id) ON DELETE CASCADE,
  "isbn" VARCHAR(255) REFERENCES books(isbn) ON DELETE CASCADE
);

CREATE TABLE book_club (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "current_isbn" VARCHAR(255) REFERENCES books(isbn) ON DELETE CASCADE,
  "book_club_name" VARCHAR(255) NOT NULL
);

CREATE TABLE user_book_clubs (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "user_id" INTEGER REFERENCES users(id) ON DELETE CASCADE,
  "book_club_id" INTEGER REFERENCES book_club(id) ON DELETE CASCADE
);

CREATE TABLE users_books (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "user_id" INTEGER REFERENCES users(id) ON DELETE CASCADE,
  "isbn" VARCHAR(255) NOT NULL,
  "date_read" DATE NOT NULL,
  "rating" int,
  "comments" text NOT NULL,
  "status" VARCHAR(255) NOT NULL
);