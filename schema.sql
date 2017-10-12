CREATE TABLE IF NOT EXISTS `fifty` (
  `Route` smallint(6) DEFAULT NULL,
  `year` smallint(6) DEFAULT NULL,
  `AOU` smallint(6) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `routes` (
  `Route` int(11) DEFAULT NULL,
  `Latitude` double DEFAULT NULL,
  `Longitude` double DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `species` (
  `AOU` smallint(6) NOT NULL PRIMARY KEY,
  `en_name` char(100) DEFAULT NULL
);