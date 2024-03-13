CREATE DATABASE IF NOT EXISTS `myBoxingTrainer`;
USE `myBoxingTrainer`;

DROP TABLE IF EXISTS `myBoxingTrainer`.`user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE
    IF NOT EXISTS `myBoxingTrainer`.`user` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `username` VARCHAR(50) NOT NULL,
        `email` VARCHAR(255) NOT NULL UNIQUE,
        `password` VARCHAR(255) NOT NULL,
        `role` VARCHAR(50) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `technique`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `technique` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `picture` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `technique` WRITE;
/*!40000 ALTER TABLE `technique` DISABLE KEYS */;
INSERT INTO `technique` VALUES (1,'Ail','/assets/ingredients/ail.jpg'), (2, 'Cross', '/assets/gifs/cross.gif'), (3, 'Lead hook', '/assets/gifs/leadHook.gif'), (4, 'Rear hook', '/assets/gifs/rearHook.gif'), (5, 'Lead uppercut', '/assets/gifs/leadUppercut.gif'), (6, 'Rear uppercut', '/assets/gifs/rearUppercut.gif'),
(7, 'Kick', '/assets/gifs/kick.gif'), (8, 'Switch kick', '/assets/gifs/switchKick.gif')
/*!40000 ALTER TABLE `technique` ENABLE KEYS */;
UNLOCK TABLES;    
