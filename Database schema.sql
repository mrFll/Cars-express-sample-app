CREATE DATABASE cars;
USE cars;

CREATE TABLE IF NOT EXISTS `users` (
  `id` int AUTO_INCREMENT NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50),
  `email` varchar(50) NOT NULL,
  `age` int,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS `cars` (
  `id` int AUTO_INCREMENT NOT NULL,
  `series` varchar(50) NOT NULL,
  `company` varchar(50) NOT NULL,
  `color` varchar(50) NOT NULL,
  `owner_id` int,
  FOREIGN KEY (`owner_id`) REFERENCES `users`(`id`),
  PRIMARY KEY (id)
);