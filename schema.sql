
CREATE DATABASE burger_db;

USE burger_db;

-- Create the table tasks.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  consumed BOOLEAN NOT NULL DEFAULT 0;
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO buger (name) VALUES ('California Buger');
INSERT INTO buger (name) VALUES ('Cheeseburger');
INSERT INTO buger (name) VALUES ('Bacon & Blue Burger');
