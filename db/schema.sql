DROP DATABASE IF EXISTS nike;

CREATE DATABASE nike;
\connect nike;

DROP TABLE IF EXISTS shoe;

CREATE TABLE shoe (
  shoeID VARCHAR(60) PRIMARY KEY,
  imageUrls VARCHAR[]
);

COPY shoe FROM 'C:/Users/caram/Desktop/records.csv' DELIMITERS ',' CSV;