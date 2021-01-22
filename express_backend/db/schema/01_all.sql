DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS users_books CASCADE;
DROP TABLE IF EXISTS friends CASCADE;
DROP TABLE IF EXISTS user_book_clubs CASCADE;
DROP TABLE IF EXISTS future_books CASCADE;
DROP TABLE IF EXISTS book_club CASCADE;
DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS home_page_books CASCADE;
DROP TABLE IF EXISTS newsfeed_posts CASCADE;
DROP TABLE IF EXISTS club_posts CASCADE;


CREATE TABLE users (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "first_name" VARCHAR(255) NOT NULL,
  "last_name" VARCHAR(255) NOT NULL,
  "email" VARCHAR(255) NOT NULL,
  "password" VARCHAR(255) NOT NULL,
  "age" INT,
  "gender" VARCHAR(255),
  "created_at" DATE NOT NULL DEFAULT NOW()
);

CREATE TABLE friends (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "user_id" INTEGER REFERENCES users(id) ON DELETE CASCADE,
  "users_friend" INTEGER NOT NULL
);

CREATE TABLE books (
  "id" VARCHAR(255) PRIMARY KEY NOT NULL,
  "title" VARCHAR(255) NOT NULL, 
  "author" VARCHAR(255) NOT NULL, 
  "subject" VARCHAR,
  "first_publish_year" VARCHAR(255) 
);

CREATE TABLE future_books (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "user_id" INTEGER REFERENCES users(id) ON DELETE CASCADE,
  "book_id" VARCHAR(255) REFERENCES books(id) ON DELETE CASCADE
);

CREATE TABLE book_club (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "current_book" VARCHAR(255) REFERENCES books(id) ON DELETE CASCADE,
  "admin_id" INTEGER NOT NULL,
  "book_club_name" VARCHAR(255) NOT NULL,
  "date_read" DATE,
  "rating" INTEGER,
  "comments" TEXT,
  "status" VARCHAR(255),
  "avatar" TEXT
);

CREATE TABLE user_book_clubs (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "user_id" INTEGER REFERENCES users(id) ON DELETE CASCADE,
  "book_club_id" INTEGER REFERENCES book_club(id) ON DELETE CASCADE
);

CREATE TABLE users_books (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "user_id" INTEGER REFERENCES users(id) ON DELETE CASCADE,
  "book_id" VARCHAR(255) REFERENCES books(id) ON DELETE CASCADE,
  "date_read" DATE,
  "rating" INTEGER,
  "comments" TEXT,
  "status" VARCHAR(255)
);

CREATE TABLE home_page_books (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "category" VARCHAR(255) NOT NULL,
  "book_id" VARCHAR(255) REFERENCES books(id) ON DELETE CASCADE
);

CREATE TABLE newsfeed_posts (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "user_id" INTEGER REFERENCES users(id) ON DELETE CASCADE,
  "title" VARCHAR(255), 
  "body" TEXT NOT NULL,
  "timestamp" VARCHAR(255)
);

CREATE TABLE club_posts (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "user_id" INTEGER REFERENCES users(id) ON DELETE CASCADE,
  "book_club_id" INTEGER REFERENCES book_club(id) ON DELETE CASCADE,
  "title" VARCHAR(255), 
  "body" TEXT NOT NULL,
  "timestamp" VARCHAR(255)
);