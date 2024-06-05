-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (arm64)
--
-- Host: 127.0.0.1    Database: the-mobile-hour
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `changelog`
--

DROP TABLE IF EXISTS `changelog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `changelog` (
  `changelog_id` int NOT NULL AUTO_INCREMENT,
  `changelog_date` datetime NOT NULL,
  `changelog_user_id` int DEFAULT NULL,
  `changelog_message` varchar(150) NOT NULL,
  PRIMARY KEY (`changelog_id`)
) ENGINE=InnoDB AUTO_INCREMENT=302 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `changelog`
--

LOCK TABLES `changelog` WRITE;
/*!40000 ALTER TABLE `changelog` DISABLE KEYS */;
INSERT INTO `changelog` VALUES (1,'2023-10-03 22:38:13',1,'Product created'),(2,'2023-10-03 22:38:55',1,'Product created'),(3,'2023-10-04 12:30:28',1,'Product created'),(4,'2023-10-05 10:04:26',1,'Product created'),(5,'2023-10-05 11:11:46',1,'Order created for Pepe Laugh'),(6,'2023-10-05 11:25:25',1,'Product created: test3'),(7,'2023-10-05 11:29:07',1,'Staff member logged in'),(8,'2023-10-05 11:29:15',1,'Staff member logged in'),(9,'2023-10-05 11:30:26',1,'dylan logged in'),(10,'2023-10-05 11:41:55',1,'dylan logged in'),(11,'2023-10-05 11:42:24',1,'Staff member created john '),(12,'2023-10-05 11:45:53',1,'dylan logged in'),(13,'2023-10-05 11:46:13',1,'manager updated bill '),(14,'2023-10-05 11:48:10',1,'dylan logged in'),(15,'2023-10-05 11:54:24',1,'dylan logged in'),(16,'2023-10-05 12:57:40',1,'dylan logged in'),(17,'2023-10-05 13:05:52',1,'dylan logged in'),(18,'2023-10-05 14:34:02',1,'dylan logged in'),(19,'2023-10-05 14:40:01',1,'manager deleted staff member with ID 6 '),(20,'2023-10-05 14:40:37',1,'manager updated staff member with ID 5 '),(21,'2023-10-05 15:07:27',1,'manager updated staff member with ID 5 '),(22,'2023-10-05 15:32:46',1,'dylan logged in'),(23,'2023-10-05 15:34:03',1,'dylan logged in'),(24,'2023-10-05 15:34:49',1,'Product created: Samsung'),(25,'2023-10-05 15:56:07',1,'dylan logged in'),(26,'2023-10-06 13:44:04',1,'dylan logged in'),(27,'2023-10-06 13:52:15',1,'dylan logged in'),(28,'2023-10-06 13:53:25',1,'dylan logged in'),(29,'2023-10-06 13:54:33',1,'dylan logged in'),(30,'2023-10-06 14:20:12',1,'dylan logged in'),(31,'2023-10-06 14:25:32',1,'dylan logged in'),(32,'2023-10-06 14:25:46',1,'dylan logged in'),(33,'2023-10-06 14:28:07',1,'dylan logged in'),(34,'2023-10-06 14:31:17',4,'lizer logged in'),(35,'2023-10-06 14:32:30',4,'manager created staff member with ID 0 '),(36,'2023-10-06 14:34:18',1,'dylan logged in'),(37,'2023-10-06 14:39:19',1,'dylan logged in'),(38,'2023-10-06 14:46:13',1,'dylan logged in'),(39,'2023-10-06 14:46:34',1,'manager deleted staff member'),(40,'2023-10-06 14:46:55',1,'dylan logged in'),(41,'2023-10-06 14:55:44',1,'dylan logged in'),(42,'2023-10-06 15:06:38',1,'dylan logged in'),(43,'2023-10-06 15:06:45',1,'Order 16 status updated to packing'),(44,'2023-10-06 15:07:42',1,'dylan logged in'),(46,'2023-10-06 15:12:20',1,'dylan logged in'),(47,'2023-10-06 15:13:04',1,'dylan logged in'),(48,'2023-10-06 15:13:24',1,'Order 1 status updated to shipped'),(49,'2023-10-06 17:43:50',1,'dylan logged in'),(50,'2023-10-06 18:24:27',1,'dylan logged in'),(51,'2023-10-07 10:26:50',1,'manager deleted product'),(52,'2023-10-07 10:27:31',1,'dylan logged in'),(54,'2023-10-07 10:29:10',1,'dylan logged in'),(55,'2023-10-07 10:29:27',1,'manager deleted product: Apple iPhone 13 Pro Max'),(56,'2023-10-07 10:30:52',1,'dylan logged in'),(57,'2023-10-07 10:32:36',1,'dylan logged in'),(58,'2023-10-07 10:32:58',1,'manager updated staff member: Santa Claus'),(59,'2023-10-07 10:40:59',1,'manager deleted staff member: Santa Claus'),(60,'2023-10-07 10:41:24',1,'dylan logged in'),(61,'2023-10-07 10:56:35',1,'dylan logged in'),(62,'2023-10-07 11:15:09',1,'dylan logged in'),(63,'2023-10-07 11:20:47',1,'dylan logged in'),(64,'2023-10-07 11:23:38',1,'dylan logged in'),(65,'2023-10-07 12:18:46',1,'dylan logged in'),(66,'2023-10-07 12:21:46',1,'dylan logged in'),(67,'2023-10-07 12:22:39',1,'dylan logged in'),(68,'2023-10-07 13:41:57',1,'dylan logged in'),(69,'2023-10-07 13:42:23',1,'dylan logged in'),(70,'2023-10-07 13:43:53',1,'dylan logged in'),(71,'2023-10-07 13:44:28',1,'dylan logged in'),(72,'2023-10-07 14:27:57',1,'dylan logged in'),(73,'2023-10-07 14:30:56',1,'dylan logged in'),(74,'2023-10-07 14:36:42',1,'dylan logged in'),(75,'2023-10-07 14:45:05',1,'dylan logged in'),(76,'2023-10-07 14:46:27',1,'dylan logged in'),(77,'2023-10-07 14:48:18',1,'dylan logged in'),(78,'2023-10-07 14:49:46',1,'manager updated feature'),(79,'2023-10-07 14:51:19',1,'manager updated feature'),(80,'2023-10-07 14:57:50',1,'dylan logged in'),(81,'2023-10-07 14:58:25',1,'manager updated feature'),(82,'2023-10-07 15:02:11',1,'dylan logged in'),(83,'2023-10-07 15:02:41',1,'dylan logged in'),(84,'2023-10-07 15:03:37',1,'dylan logged in'),(85,'2023-10-07 15:07:36',1,'dylan logged in'),(86,'2023-10-07 15:43:49',1,'manager deleted product: Apple iPhone 15 Pro'),(87,'2023-10-07 15:50:42',1,'Feature created'),(88,'2023-10-07 16:11:24',1,'Product created: test'),(89,'2023-10-07 16:17:28',1,'Product created: test2'),(90,'2023-10-07 16:31:30',1,'Feature created'),(91,'2023-10-07 16:34:22',1,'manager deleted product: test'),(92,'2023-10-07 18:17:15',1,'dylan logged in'),(93,'2023-10-10 11:44:08',1,'dylan logged in'),(94,'2023-10-10 14:20:36',1,'dylan logged in'),(95,'2023-10-10 17:24:42',1,'dylan logged in'),(96,'2023-10-10 17:25:43',1,'dylan logged in'),(97,'2023-10-10 17:27:36',1,'dylan logged in'),(98,'2023-10-10 17:27:48',1,'Product created: test'),(99,'2023-10-10 17:27:58',1,'manager deleted product: test'),(100,'2023-10-10 17:49:49',1,'dylan logged in'),(101,'2023-10-10 17:50:26',1,'Order created: Rubber Duck'),(102,'2023-10-10 18:10:37',1,'Order created: Dylan Lindsay'),(103,'2023-10-11 18:11:20',1,'dylan logged in'),(104,'2023-10-11 18:12:57',1,'dylan logged in'),(105,'2023-10-11 18:13:28',1,'Order 19 status updated to packing'),(106,'2023-10-11 20:17:06',1,'dylan logged in'),(107,'2023-10-11 20:17:22',1,'manager updated staff member: David Lindsay'),(108,'2023-10-11 20:17:30',5,'david logged in'),(109,'2023-10-11 20:17:55',5,'david logged in'),(110,'2023-10-11 20:22:48',1,'dylan logged in'),(111,'2023-10-11 20:26:19',5,'david logged in'),(112,'2023-10-13 15:52:46',1,'dylan logged in'),(113,'2023-10-13 15:52:58',1,'manager deleted product: test2'),(114,'2023-10-13 15:59:07',1,'Feature created'),(115,'2023-10-13 15:59:24',1,'manager deleted feature'),(116,'2023-10-13 16:12:53',1,'dylan logged in'),(117,'2023-10-13 16:13:07',1,'manager deleted feature'),(118,'2023-10-13 16:28:52',1,'dylan logged in'),(119,'2023-10-13 16:44:40',1,'Product created: Google Pixel 8 Pro 256GB (Obsidian)'),(120,'2023-10-13 17:45:02',1,'dylan logged in'),(121,'2023-10-17 09:06:59',1,'dylan logged in'),(122,'2023-10-17 09:21:12',1,'dylan logged in'),(123,'2023-10-17 15:33:16',1,'dylan logged in'),(124,'2023-10-17 15:55:20',1,'dylan logged in'),(125,'2023-10-17 16:05:25',1,'dylan logged in'),(126,'2023-10-17 16:29:38',1,'dylan logged in'),(127,'2023-10-17 17:07:26',1,'dylan logged in'),(128,'2023-10-17 17:21:19',1,'dylan logged in'),(129,'2023-10-17 17:21:52',1,'dylan logged in'),(130,'2023-10-17 17:21:58',1,'Order created: Dylan Lindsay'),(131,'2023-10-17 17:22:11',1,'Order created: Dylan Lindsay'),(132,'2023-10-17 17:22:28',1,'Order created: Dylan Lindsay'),(133,'2023-10-17 17:23:29',1,'dylan logged in'),(134,'2023-10-17 17:23:51',1,'Order created: Jane Smith'),(135,'2023-10-17 17:24:28',1,'Order created: Helen Smith0'),(136,'2023-10-17 17:25:38',1,'Order created: Fiona Smith'),(137,'2023-10-17 17:31:27',1,'dylan logged in'),(138,'2023-10-19 14:27:32',1,'dylan logged in'),(139,'2023-10-19 14:27:46',1,'Order 31 status updated to cancelled'),(140,'2023-10-19 14:27:49',1,'Order 32 status updated to cancelled'),(141,'2023-10-19 14:27:57',1,'Order created: Dylan Lindsay'),(142,'2023-10-19 14:28:10',1,'Order created: Dylan Lindsay'),(143,'2023-10-20 18:02:55',1,'dylan logged in'),(144,'2023-10-20 18:03:15',1,'Order 36 status updated to pending'),(145,'2023-10-20 18:03:21',1,'Order 36 status updated to shipped'),(146,'2023-10-20 18:03:24',1,'Order 30 status updated to packing'),(147,'2023-10-20 18:03:27',1,'Order 34 status updated to packing'),(148,'2023-10-20 18:03:31',1,'Order 39 status updated to cancelled'),(149,'2023-10-20 18:03:34',1,'Order 38 status updated to packing'),(150,'2023-10-20 18:03:36',1,'Order 37 status updated to shipped'),(151,'2023-10-21 14:36:16',1,'dylan logged in'),(152,'2023-10-21 14:36:24',1,'Order 25 status updated to shipped'),(153,'2023-10-21 15:44:56',1,'Order 24 status updated to undefined'),(154,'2023-10-21 15:45:40',5,'david logged in'),(155,'2023-10-24 12:12:44',1,'dylan logged in'),(156,'2023-10-24 12:27:45',1,'dylan logged in'),(157,'2023-10-24 12:48:48',1,'Order created: test test'),(158,'2023-10-24 12:51:22',5,'david logged in'),(159,'2023-10-24 12:51:50',5,'david logged in'),(160,'2023-10-24 12:52:13',5,'Order 40 status updated to packing'),(161,'2023-10-24 12:53:07',5,'Feature created'),(162,'2023-10-24 12:55:57',5,'david logged in'),(163,'2023-10-24 12:57:11',1,'dylan logged in'),(164,'2023-10-24 12:57:38',1,'manager created staff member: test test'),(165,'2023-10-24 12:57:46',1,'manager updated staff member: test123 test'),(166,'2023-10-24 12:57:51',1,'manager deleted staff member: test123 test'),(167,'2023-10-24 12:59:54',1,'dylan logged in'),(168,'2023-10-24 13:18:42',5,'david logged in'),(169,'2023-10-24 13:20:03',5,'david logged in'),(170,'2023-10-24 13:20:11',5,'Order 40 status updated to cancelled'),(171,'2023-10-25 12:15:30',1,'dylan logged in'),(172,'2023-10-25 12:32:01',1,'dylan logged in'),(173,'2023-10-25 12:32:15',1,'manager updated product: Apple iPhone 14 Pro 128GB (Silver)'),(174,'2023-10-25 12:32:40',1,'Product created: test'),(175,'2023-10-25 12:33:01',1,'dylan logged in'),(176,'2023-10-25 12:33:05',1,'manager deleted product: test'),(177,'2023-10-25 12:38:39',1,'dylan logged in'),(178,'2023-10-25 12:48:20',1,'dylan logged in'),(179,'2023-10-25 12:54:34',1,'Product created: test'),(180,'2023-10-25 14:22:25',1,'dylan logged in'),(181,'2023-10-25 14:32:58',1,'dylan logged in'),(182,'2023-10-25 14:35:06',1,'dylan logged in'),(183,'2023-10-25 14:35:41',1,'Feature created'),(184,'2023-10-25 14:35:47',1,'manager deleted feature'),(185,'2023-10-25 14:41:00',1,'dylan logged in'),(186,'2023-10-25 14:41:48',1,'manager deleted feature'),(187,'2023-10-25 14:45:21',1,'dylan logged in'),(188,'2023-10-25 14:45:34',1,'manager updated product: Google Pixel 8 Pro 256GB (Obsidian)'),(189,'2023-10-25 14:46:32',1,'dylan logged in'),(190,'2023-10-25 14:47:49',1,'manager deleted product: test'),(191,'2023-10-26 10:56:23',1,'dylan logged in'),(192,'2023-10-27 17:59:14',1,'dylan logged in'),(193,'2023-11-07 10:05:29',1,'dylan logged in'),(194,'2023-11-07 10:06:07',1,'Feature created'),(195,'2023-11-07 10:06:28',1,'manager updated feature'),(196,'2023-11-07 10:15:29',1,'manager updated product: Google Pixel 8 Pro 256GB (Obsidian)'),(197,'2023-11-07 10:15:39',1,'manager updated product: Apple iPhone 14 Pro 128GB (Silver)'),(198,'2023-11-07 10:15:45',1,'manager updated product: Samsung Galaxy S23 128GB (Phantom Black)'),(199,'2023-11-07 10:16:08',1,'manager updated product: Google Pixel 8 Pro 256GB (Obsidian)'),(200,'2023-11-07 10:32:10',1,'dylan logged in'),(201,'2023-11-07 10:55:48',1,'dylan logged in'),(202,'2023-11-07 10:57:44',1,'dylan logged in'),(203,'2023-11-07 10:57:53',1,'manager updated product: Google Pixel 8 Pro 256GB (Obsidian)'),(204,'2023-11-07 10:58:00',1,'manager updated product: Google Pixel 8 Pro 256GB (Obsidian)'),(205,'2023-11-07 10:58:38',1,'dylan logged in'),(206,'2023-11-07 11:30:54',1,'dylan logged in'),(207,'2023-11-07 11:31:25',1,'Product created: test'),(208,'2023-11-07 11:37:38',1,'dylan logged in'),(209,'2023-11-07 11:38:48',1,'dylan logged in'),(210,'2023-11-07 11:42:35',1,'dylan logged in'),(211,'2023-11-07 11:44:09',1,'dylan logged in'),(212,'2023-11-07 11:44:14',1,'manager updated product: test'),(213,'2023-11-07 11:55:19',1,'dylan logged in'),(214,'2023-11-07 12:13:10',1,'dylan logged in'),(215,'2023-11-07 12:14:02',1,'manager updated feature'),(216,'2023-11-07 12:14:32',1,'manager updated feature'),(217,'2023-11-07 12:31:32',1,'dylan logged in'),(218,'2023-11-07 12:33:24',1,'manager updated feature'),(219,'2023-11-07 12:39:56',1,'dylan logged in'),(220,'2023-11-07 12:43:46',1,'dylan logged in'),(221,'2023-11-07 12:50:08',1,'dylan logged in'),(222,'2023-11-07 12:51:31',1,'dylan logged in'),(223,'2023-11-07 12:51:40',1,'manager updated product: test'),(224,'2023-11-07 12:55:01',1,'dylan logged in'),(225,'2023-11-07 12:58:09',1,'dylan logged in'),(226,'2023-11-07 12:59:22',1,'dylan logged in'),(227,'2023-11-07 13:04:04',1,'dylan logged in'),(228,'2023-11-07 13:04:41',1,'manager updated feature'),(229,'2023-11-07 13:05:33',1,'dylan logged in'),(230,'2023-11-07 13:05:55',1,'manager updated feature'),(231,'2023-11-07 13:06:00',1,'manager updated feature'),(232,'2023-11-07 13:06:02',1,'manager updated feature'),(233,'2023-11-07 13:06:13',1,'manager updated feature'),(234,'2023-11-07 13:07:28',1,'dylan logged in'),(235,'2023-11-07 13:09:01',1,'dylan logged in'),(236,'2023-11-07 13:11:01',1,'dylan logged in'),(237,'2023-11-07 13:15:05',1,'dylan logged in'),(238,'2023-11-07 13:15:10',1,'manager updated feature'),(239,'2023-11-07 13:15:50',1,'dylan logged in'),(240,'2023-11-07 13:15:55',1,'manager updated feature'),(241,'2023-11-07 13:15:58',1,'manager updated feature'),(242,'2023-11-07 13:16:00',1,'manager updated feature'),(243,'2023-11-07 13:16:42',1,'Feature created'),(244,'2023-11-07 13:16:47',1,'manager updated feature'),(245,'2023-11-07 13:16:49',1,'manager deleted feature'),(246,'2023-11-07 13:17:04',1,'manager updated product: test'),(247,'2023-11-07 13:21:16',1,'dylan logged in'),(248,'2023-11-07 13:21:28',1,'manager created staff member: John Smith'),(249,'2023-11-07 13:21:35',1,'manager updated staff member: John Smith'),(250,'2023-11-07 13:21:38',1,'manager deleted staff member: John Smith'),(251,'2023-11-07 13:21:48',1,'manager updated product: test'),(252,'2023-11-07 13:24:08',1,'manager deleted product: test'),(253,'2023-11-07 13:25:46',1,'manager updated product: Google Pixel 8 Pro 256GB (Obsidian)'),(254,'2023-11-13 14:22:26',1,'dylan logged in'),(255,'2023-11-13 14:25:51',1,'dylan logged in'),(256,'2023-11-13 14:34:39',1,'dylan logged in'),(257,'2023-11-13 14:35:46',1,'dylan logged in'),(258,'2023-11-13 14:36:19',1,'manager updated product: Google Pixel 8 Pro 256GB (Obsidian)'),(259,'2023-11-13 14:36:30',1,'manager updated product: Google Pixel 8 Pro 256GB (Obsidian)'),(260,'2023-11-13 14:40:51',1,'manager updated product: Google Pixel 8 Pro 256GB (Obsidian)'),(261,'2023-11-13 14:41:28',1,'manager updated product: Google Pixel 8 Pro 256GB (Obsidian)'),(262,'2023-11-13 14:42:41',1,'manager updated product: Google Pixel 8 Pro 256GB (Obsidian)'),(263,'2023-11-13 14:49:34',1,'manager updated feature'),(264,'2023-11-13 14:49:37',1,'manager updated feature'),(265,'2023-11-13 14:49:39',1,'manager updated feature'),(266,'2023-11-13 14:52:41',1,'manager updated product: Samsung Galaxy S23 128GB (Phantom Black)'),(267,'2023-11-13 15:33:39',1,'dylan logged in'),(268,'2023-11-13 15:46:33',1,'dylan logged in'),(269,'2023-11-13 15:49:41',1,'dylan logged in'),(270,'2023-11-13 15:57:13',1,'dylan logged in'),(271,'2023-11-13 16:00:57',1,'dylan logged in'),(272,'2023-11-13 16:09:07',1,'dylan logged in'),(273,'2023-11-13 16:48:23',1,'dylan logged in'),(274,'2023-11-13 17:03:10',1,'dylan logged in'),(275,'2023-11-13 17:03:13',1,'Order 11 status updated to packing'),(276,'2023-11-13 17:03:25',1,'Order 4 status updated to shipped'),(277,'2023-11-13 17:04:45',1,'manager updated staff member: David Lindsay'),(278,'2023-11-13 17:04:49',1,'manager updated staff member: David Lindsay'),(279,'2023-11-13 17:07:25',1,'Product created: test'),(280,'2023-11-13 17:07:41',1,'manager updated product: test'),(281,'2023-11-13 17:07:46',1,'manager deleted product: test'),(282,'2023-11-13 17:09:34',1,'Feature created'),(283,'2023-11-13 17:09:47',1,'manager deleted feature'),(284,'2023-11-13 17:10:22',1,'dylan logged in'),(285,'2024-01-18 14:17:49',1,'dylan logged in'),(286,'2024-01-29 16:17:36',1,'dylan logged in'),(287,'2024-01-29 17:02:04',1,'dylan logged in'),(288,'2024-01-29 20:06:02',NULL,'Order 12 status updated to packing'),(289,'2024-01-29 20:06:18',NULL,'Order 29 status updated to shipped'),(290,'2024-01-29 20:07:05',NULL,'manager updated product: Samsung Galaxy S23 128GB (Phantom Black)'),(291,'2024-01-29 20:07:20',NULL,'manager updated product: Google Pixel 8 Pro 256GB (Obsidian)'),(292,'2024-01-29 20:07:33',NULL,'manager updated product: Google Pixel 8 Pro 256GB (Obsidian)'),(293,'2024-01-29 20:07:54',NULL,'manager created staff member: test test2'),(294,'2024-01-29 20:07:58',NULL,'manager deleted staff member: test test2'),(295,'2024-01-29 20:08:13',NULL,'manager updated product: test2'),(296,'2024-01-29 20:09:15',NULL,'manager updated product: Google Pixel 8 Pro 256GB (Obsidian)'),(297,'2024-01-29 20:09:16',NULL,'manager updated product: Google Pixel 8 Pro 256GB (Obsidian)'),(298,'2024-01-29 20:09:43',NULL,'manager updated product: Google Pixel 8 Pro 256GB (Obsidian)'),(299,'2024-01-29 20:16:47',1,'dylan logged in'),(300,'2024-01-29 20:34:59',1,'dylan logged in'),(301,'2024-01-29 20:36:47',1,'dylan logged in');
/*!40000 ALTER TABLE `changelog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feature`
--

DROP TABLE IF EXISTS `feature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feature` (
  `feature_id` int NOT NULL AUTO_INCREMENT,
  `feature_color` varchar(100) NOT NULL,
  `feature_weight` varchar(100) NOT NULL,
  `feature_dimensions` varchar(100) NOT NULL,
  `feature_OS` varchar(100) NOT NULL,
  `feature_screensize` varchar(100) NOT NULL,
  `feature_resolution` varchar(100) NOT NULL,
  `feature_CPU` varchar(150) NOT NULL,
  `feature_RAM` varchar(100) NOT NULL,
  `feature_storage` varchar(100) NOT NULL,
  `feature_battery` varchar(100) NOT NULL,
  `feature_rear_camera` varchar(100) NOT NULL,
  `feature_front_camera` varchar(100) NOT NULL,
  `feature_removed` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`feature_id`),
  UNIQUE KEY `feature_id_UNIQUE` (`feature_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feature`
--

LOCK TABLES `feature` WRITE;
/*!40000 ALTER TABLE `feature` DISABLE KEYS */;
INSERT INTO `feature` VALUES (1,'Silver','206','5.81 x 2.81 x 0.31','iOS 16','6.1','2556 x 1179','Hexa-core (2x3.46 GHz Everest, 4x2.02 GHz Sawtooth)','6','128','3200','48','12',0),(2,'Phantom Black','168','5.76 x 2.79 x 0.30','Android 13','6.1','2340 x 1080','Octa-core (1x3.36 GHz Cortex-X3, 2x2.8 GHz Cortex-A715, 2x2.8 GHz Cortex-A710, 3x2.0 GHz Cortex-A510)','8','128','3900','50','12',0),(3,'test','test','test','test','test','test','test','test','test','test','test','test',1),(4,'hello','hello','hello','hello','helllo','helllo','helllo','helllo','helllo','helllo','helllo','helllo',1),(5,'Obsidian','213','6.40 x 3.01 x 0.35','Android 14','6.7','1344 x 2992','Nona-core (1x3.0 GHz Cortex-X3, 4x2.45 GHz Cortex-A715, 4x2.15 GHz Cortex-A510)','12','256','5050','50','10.5',0),(6,'test','test','test','test','test','test','test','test','test','test','test','test',1),(7,'test2','test2','test2','test2','test2','test2','test2','test2','test2','test2','test2','test2',1),(8,'tested','tes','test','test','test','test','test','test','test','test','test','test',1),(9,'Black','250','6.40 x 3.01 x 0.35','Android 14','6.7','1344 x 2992','Nona-core (1x3.0 GHz Cortex-X3, 4x2.45 GHz Cortex-A715, 4x2.15 GHz Cortex-A510)','12','256','5050','48','12',1),(10,'test','100','50x50x50','test','5.2','5321 x 2300','test','12','500','500','12','48',1);
/*!40000 ALTER TABLE `feature` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `customer_first_name` varchar(70) NOT NULL,
  `customer_last_name` varchar(70) NOT NULL,
  `customer_phone` varchar(45) NOT NULL,
  `customer_email` varchar(256) NOT NULL,
  `order_status` enum('pending','packing','shipped','cancelled') NOT NULL,
  `order_datetime` datetime NOT NULL,
  PRIMARY KEY (`order_id`),
  UNIQUE KEY `order_id_UNIQUE` (`order_id`),
  KEY `fk_orders_products_idx` (`product_id`),
  CONSTRAINT `fk_orders_products` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,'John','Smith','0434678801','john.smith@gmail.com','shipped','2023-09-18 20:53:20'),(3,1,'David','Lindsay','0400 000 000','david@server.com','shipped','2023-09-20 05:52:54'),(4,1,'Kathy','Lindsay','0400 000 000','kathy@server.com','shipped','2023-09-20 05:56:04'),(5,2,'Lisa','Hinton','0000 000 000','lisa@email.com','cancelled','2023-09-21 04:24:38'),(11,1,'Jamie','Carter','0412 345 678','jamie.carter@gmail.com','packing','2023-09-26 05:24:29'),(12,1,'Tane','Sadler','0400 000 000','tane.sadler@gmail.com','packing','2023-09-26 05:33:02'),(13,1,'Sean','Lock','0400 000 000','sean.lock@gmail.com','shipped','2023-09-26 05:54:14'),(14,1,'Dylan','Lindsay','0424548904','dylan.lindsay234@gmail.com','pending','2023-09-28 07:29:33'),(15,1,'Dylan','Lindsay','0424548904','dylan.lindsay234@gmail.com','shipped','2023-09-28 07:31:21'),(16,1,'Dylan','Lindsay','0424548904','dylan.lindsay234@gmail.com','shipped','2023-09-28 07:34:03'),(17,1,'Dylan','Lindsay','0424548904','dylan.lindsay234@gmail.com','cancelled','2023-09-30 06:53:24'),(18,2,'Pepe','Laugh','0434618902','pepe.laugh@gmail.com','cancelled','2023-10-05 01:11:46'),(19,1,'Rubber','Duck','0400 000 000','rubberduck@email.com','packing','2023-10-10 07:50:26'),(20,1,'Dylan','Lindsay','0424548904','dylan.lindsay234@gmail.com','pending','2023-10-10 08:10:37'),(21,1,'janeh','smith','0400 000 000','jane.smith@email.com','pending','2023-10-17 07:17:54'),(22,1,'Dylan','Lindsay','0424548904','dylan.lindsay234@gmail.com','pending','2023-10-17 07:18:37'),(23,1,'Dylan','Lindsay','0424548904','dylan.lindsay234@gmail.com','pending','2023-10-17 07:21:58'),(24,1,'Dylan','Lindsay','0424548904','dylan.lindsay234@gmail.com','pending','2023-10-17 07:22:11'),(25,16,'Dylan','Lindsay','0424548904','dylan.lindsay234@gmail.com','shipped','2023-10-17 07:22:28'),(26,1,'janeh','smith','0400 000 000','jane.smith@email.com','pending','2023-10-17 07:23:01'),(27,1,'janeh','smith','0400 000 000','jane.smith@email.com','pending','2023-10-17 07:23:11'),(28,16,'Jane','Smith','0400 000 000','jane.smith@email.com','pending','2023-10-17 07:23:51'),(29,1,'Helen','Smith0','0400 000 000','helen.smith@email.com','shipped','2023-10-17 07:24:28'),(30,1,'Fiona','Smith','0400 000 000','fiona.smith@email.com','packing','2023-10-17 07:25:38'),(31,1,'asd','asd','0800 000 000','dylan.lindsay234@gmail.com','cancelled','2023-10-19 04:26:27'),(32,1,'asd','asd','0800 000 000','dylan.lindsay234@gmail.com','cancelled','2023-10-19 04:26:52'),(33,16,'Dylan','Lindsay','0424548904','dylan.lindsay234@gmail.com','pending','2023-10-19 04:27:17'),(34,1,'Dylan','Lindsay','0424548904','dylan.lindsay234@gmail.com','packing','2023-10-19 04:27:57'),(35,16,'Dylan','Lindsay','0424548904','dylan.lindsay234@gmail.com','pending','2023-10-19 04:28:10'),(36,16,'John','Smith','0400 000 000','john.smith@gmail.com','shipped','2023-10-19 04:40:21'),(37,16,'John','Smith','0400 000 000','john.smith@gmail.com','shipped','2023-10-19 04:43:33'),(38,16,'John','Smith','0400 000 000','john.smith@gmail.com','packing','2023-10-19 04:44:20'),(39,16,'Dylan','Lindsay','0424548904','dylan.lindsay234@gmail.com','cancelled','2023-10-19 04:44:27'),(40,1,'test','test','0400 000 000','test@server.com','cancelled','2023-10-24 02:48:48'),(41,1,'Dylan','Lindsay','0424548904','dylan.lindsay234@gmail.com','pending','2023-10-27 07:58:36'),(42,1,'Dylan','Lindsay','0424548904','dylan.lindsay234@gmail.com','pending','2023-11-13 06:56:07');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(100) NOT NULL,
  `product_model` varchar(100) NOT NULL,
  `product_manufacturer` varchar(100) NOT NULL,
  `product_price` decimal(10,0) NOT NULL,
  `product_stock` int NOT NULL,
  `product_description` varchar(800) NOT NULL,
  `product_last_updated_by_staff_id` int NOT NULL,
  `product_feature_id` int NOT NULL,
  `product_removed` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`product_id`),
  UNIQUE KEY `product_id_UNIQUE` (`product_id`),
  KEY `fk_products_staff_idx` (`product_last_updated_by_staff_id`),
  KEY `fk_products_feature_idx` (`product_feature_id`),
  CONSTRAINT `fk_products_feature` FOREIGN KEY (`product_feature_id`) REFERENCES `feature` (`feature_id`),
  CONSTRAINT `fk_products_staff` FOREIGN KEY (`product_last_updated_by_staff_id`) REFERENCES `staff` (`staff_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Apple iPhone 14 Pro 128GB (Silver)','iPhone 14 Pro','Apple Inc.',1550,8,'The iPhone 14 Pro captures incredible detail with its 48MP Main camera, the addition of Dynamic Island allows users to interact with the iPhone differently and the all-day battery life gives you more access to your phone.',1,1,0),(2,'Samsung Galaxy S23 128GB (Phantom Black)','Galaxy S23','Samsung',1200,0,'The Galaxy S23 is your access pass to an epic camera, epic performance and epic display. An improved Front Camera* so you can take epic selfies and be the group’s unofficial photographer. An epic gaming performance, whether it is heavy, or casual is all powered by the fastest chipset in a Galaxy so you can share your epic victories with friends. An epic bright and adaptive display even outdoors, so you can enjoy it all no matter how bright it gets.',1,2,0),(14,'test2','test2','test2',1500,50,'test',1,3,1),(15,'test','test','test',50,50,'testing',1,1,1),(16,'Google Pixel 8 Pro 256GB (Obsidian)','Pixel 8 Pro','Google',1799,30,'Introducing the Pixel 8 Pro, the all-pro phone engineered by Google. Its sleek, sophisticated, powerful and secure. With Google AI, you can do more, even faster. The triple camera system includes a dedicated 5x telephoto lens, improved auto-focus and full-resolution photography with Pro controls, and the all-day battery charges faster than ever.',1,5,0),(17,'test','test','test',50,50,'test',1,1,1),(18,'test','test','test',1500,50,'test',1,6,1),(19,'test','test','test',1500,50,'test',1,1,1),(20,'test','test','test',1500,50,'test',1,1,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff` (
  `staff_id` int NOT NULL AUTO_INCREMENT,
  `staff_first_name` varchar(70) NOT NULL,
  `staff_last_name` varchar(70) NOT NULL,
  `staff_access_role` enum('user','manager') NOT NULL,
  `staff_username` varchar(70) NOT NULL,
  `staff_password` varchar(100) NOT NULL,
  PRIMARY KEY (`staff_id`),
  UNIQUE KEY `idstaff_UNIQUE` (`staff_id`),
  UNIQUE KEY `staff_username_UNIQUE` (`staff_username`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` VALUES (1,'Dylan','Lindsay','manager','dylan','$2a$10$QdUhi1uhfNrtKXHqHViSuuC4xrgG9bJrP6Ggrw6S.vBSqHkZFzdGe'),(4,'Lisa','H','manager','lizer','$2a$10$GCdYPoF3a.om206r5s.3OuOkf2m7NNDnnAkLT9rMAUBjfDjYCF6sy'),(5,'David','Lindsay','user','david','$2a$10$9WTl6OrjR2WdKHjxlaQyQe66asO/YPS09Pz.gb4rTrLIJvv18mayi');
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-05 15:30:18
