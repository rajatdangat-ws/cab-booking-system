CREATE TABLE cabs
(
  id integer NOT NULL AUTO_INCREMENT,
  current_location point NOT NULL,
  car_model varchar(100) NOT NULL,
  vehicle_number varchar(8) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at DATETIME NULL on UPDATE CURRENT_TIMESTAMP, 
  CONSTRAINT pk_cabs PRIMARY KEY (id)
);