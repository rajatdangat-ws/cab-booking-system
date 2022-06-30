CREATE TABLE bookings
(
  id integer NOT NULL AUTO_INCREMENT,
  user_id integer NOT NULL,
  cab_id integer NOT NULL,
  pickup_location varchar(100) NOT NULL,
  drop_location varchar(100) NOT NULL,
  fare float NOT NULL DEFAULT 0,
  distance float NOT NULL DEFAULT 0,
  driver_id integer NOT NULL,
  CONSTRAINT pk_bookings PRIMARY KEY (id),
  CONSTRAINT FOREIGN KEY (cab_id) REFERENCES cabs (id),
  CONSTRAINT FOREIGN KEY (driver_id) REFERENCES drivers (id),
  CONSTRAINT FOREIGN KEY (user_id) REFERENCES users (id)
);
