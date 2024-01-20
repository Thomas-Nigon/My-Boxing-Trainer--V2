CREATE DATABASE IF NOT EXISTS `myBoxingTrainer`;
USE `myBoxingTrainer`;

CREATE TABLE
    IF NOT EXISTS `myBoxingTrainer`.`user` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `first_name` VARCHAR(50) NOT NULL,
        `last_name` VARCHAR(50) NOT NULL,
        `email` VARCHAR(255) NOT NULL,
        `password` VARCHAR(255) NOT NULL,
        `role` VARCHAR(50) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB;