CREATE table albums (
    id serial primary key,
    name TEXT,
    artist TEXT
);

CREATE TABLE users (
    id serial primary key,
    name TEXT,
    email TEXT
);

CREATE TABLE reviews (
    id serial primary key,
    users_id INT REFERENCES users(id),
    stars INT
    CHECK (stars >= 1 and stars <= 5),
    title TEXT,
    review TEXT,
    album_id INT REFERENCES albums(id)
);
