CREATE TABLE cab_users
(
  id integer NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  password varchar(255) NOT NULL,
  email varchar(100) NOT NULL,
  CONSTRAINT id PRIMARY KEY (id)
);