
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  consumed BOOLEAN NOT NULL DEFAULT 1,
  PRIMARY KEY (id)
);

INSERT INTO burgers (name) VALUES ('California Buger');
INSERT INTO burgers (name) VALUES ('Cheeseburger');
INSERT INTO burgers (name) VALUES ('Bacon & Blue Burger');
