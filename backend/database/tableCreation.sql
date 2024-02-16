-- Step 1: Create tables without foreign keys
CREATE TABLE `myBoxingTrainer`.`user` (
`id` INT NOT NULL AUTO_INCREMENT,
`first_name` VARCHAR(50) NOT NULL,
`last_name` VARCHAR(50) NOT NULL,
`email` VARCHAR(255) NOT NULL,
`password` VARCHAR(255) NOT NULL,
`role` VARCHAR(50) NOT NULL,
PRIMARY KEY (`id`)
);

CREATE TABLE `technique` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `picture` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `technique`
 VALUES (1,'Jab','/assets/gifs/jab.gif'), (2, 'Cross', '/assets/gifs/cross.gif'),
 (3, 'Lead hook', '/assets/gifs/leadHook.gif'), (4, 'Rear hook', '/assets/gifs/rearHook.gif'),
 (5, 'Lead uppercut', '/assets/gifs/leadUppercut.gif'), (6, 'Rear uppercut', '/assets/gifs/rearUppercut.gif'),
(7, 'Kick', '/assets/gifs/kick.gif'), (8, 'Switch kick', '/assets/gifs/switchKick.gif');


CREATE TABLE `techList` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `techniqueId` int NOT NULL,
  `comboId` int NOT NULL
);

CREATE TABLE `combo` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `techListId` int NOT NULL,
  `comboListId` int NOT NULL
);

CREATE TABLE `comboList` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `comboId` int NOT NULL,
  `roundId` int NOT NULL
);

CREATE TABLE `round` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `comboListId` int NOT NULL,
  `roundListId` int NOT NULL
);

CREATE TABLE `roundList` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `roundId` int NOT NULL,
  `trainingId` int NOT NULL
);

CREATE TABLE `training` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `roundListId` int NOT NULL
);

-- Step 2: Add foreign keys

ALTER TABLE `techList`
ADD FOREIGN KEY (`techniqueId`) REFERENCES `technique`(`id`),
ADD FOREIGN KEY (`comboId`) REFERENCES `combo`(`id`);

ALTER TABLE `combo`
ADD FOREIGN KEY (`techListId`) REFERENCES `techList`(`id`),
ADD FOREIGN KEY (`comboListId`) REFERENCES `comboList`(`id`);

ALTER TABLE `comboList`
ADD FOREIGN KEY (`comboId`) REFERENCES `combo`(`id`),
ADD FOREIGN KEY (`roundId`) REFERENCES `round`(`id`);

ALTER TABLE `round`
ADD FOREIGN KEY (`comboListId`) REFERENCES `comboList`(`id`),
ADD FOREIGN KEY (`roundListId`) REFERENCES `roundList`(`id`);

ALTER TABLE `roundList`
ADD FOREIGN KEY (`roundId`) REFERENCES `round`(`id`),
ADD FOREIGN KEY (`trainingId`) REFERENCES `training`(`id`);
