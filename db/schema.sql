DROP DATABASE IF EXISTS nike;

CREATE DATABASE nike;
\connect nike;

DROP TABLE IF EXISTS image;

CREATE TABLE image (
  id SERIAL PRIMARY KEY,
  shoeID INT NOT NULL,
  url VARCHAR(200)
);

COPY image(shoeID, url) FROM '/home/gora/Documents/gora-main_photo_gallery/shoes.csv' DELIMITERS ',' CSV;