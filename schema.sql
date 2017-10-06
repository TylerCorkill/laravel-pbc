CREATE TABLE IF NOT EXISTS `fifty` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `RouteDataID` int(11) DEFAULT NULL,
  `countrynum` int(11) DEFAULT NULL,
  `statenum` int(11) DEFAULT NULL,
  `Route` smallint(6) DEFAULT NULL,
  `RPID` smallint(6) DEFAULT NULL,
  `year` smallint(6) DEFAULT NULL,
  `AOU` smallint(6) DEFAULT NULL,
  `Stop1` smallint(6) DEFAULT NULL,
  `Stop2` smallint(6) DEFAULT NULL,
  `Stop3` smallint(6) DEFAULT NULL,
  `Stop4` smallint(6) DEFAULT NULL,
  `Stop5` smallint(6) DEFAULT NULL,
  `Stop6` smallint(6) DEFAULT NULL,
  `Stop7` smallint(6) DEFAULT NULL,
  `Stop8` smallint(6) DEFAULT NULL,
  `Stop9` smallint(6) DEFAULT NULL,
  `Stop10` smallint(6) DEFAULT NULL,
  `Stop11` smallint(6) DEFAULT NULL,
  `Stop12` smallint(6) DEFAULT NULL,
  `Stop13` smallint(6) DEFAULT NULL,
  `Stop14` smallint(6) DEFAULT NULL,
  `Stop15` smallint(6) DEFAULT NULL,
  `Stop16` smallint(6) DEFAULT NULL,
  `Stop17` smallint(6) DEFAULT NULL,
  `Stop18` smallint(6) DEFAULT NULL,
  `Stop19` smallint(6) DEFAULT NULL,
  `Stop20` smallint(6) DEFAULT NULL,
  `Stop21` smallint(6) DEFAULT NULL,
  `Stop22` smallint(6) DEFAULT NULL,
  `Stop23` smallint(6) DEFAULT NULL,
  `Stop24` smallint(6) DEFAULT NULL,
  `Stop25` smallint(6) DEFAULT NULL,
  `Stop26` smallint(6) DEFAULT NULL,
  `Stop27` smallint(6) DEFAULT NULL,
  `Stop28` smallint(6) DEFAULT NULL,
  `Stop29` smallint(6) DEFAULT NULL,
  `Stop30` smallint(6) DEFAULT NULL,
  `Stop31` smallint(6) DEFAULT NULL,
  `Stop32` smallint(6) DEFAULT NULL,
  `Stop33` smallint(6) DEFAULT NULL,
  `Stop34` smallint(6) DEFAULT NULL,
  `Stop35` smallint(6) DEFAULT NULL,
  `Stop36` smallint(6) DEFAULT NULL,
  `Stop37` smallint(6) DEFAULT NULL,
  `Stop38` smallint(6) DEFAULT NULL,
  `Stop39` smallint(6) DEFAULT NULL,
  `Stop40` smallint(6) DEFAULT NULL,
  `Stop41` smallint(6) DEFAULT NULL,
  `Stop42` smallint(6) DEFAULT NULL,
  `Stop43` smallint(6) DEFAULT NULL,
  `Stop44` smallint(6) DEFAULT NULL,
  `Stop45` smallint(6) DEFAULT NULL,
  `Stop46` smallint(6) DEFAULT NULL,
  `Stop47` smallint(6) DEFAULT NULL,
  `Stop48` smallint(6) DEFAULT NULL,
  `Stop49` smallint(6) DEFAULT NULL,
  `Stop50` smallint(6) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `routes_join` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `fifty_id` int(11) NOT NULL,
  `route_id` int(11) NOT NULL
);

CREATE TABLE IF NOT EXISTS `routes` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `countrynum` int(11) DEFAULT NULL,
  `statenum` int(11) DEFAULT NULL,
  `Route` int(11) DEFAULT NULL,
  `RouteName` char(50) DEFAULT NULL,
  `Active` tinyint(4) DEFAULT NULL,
  `Latitude` double DEFAULT NULL,
  `Longitude` double DEFAULT NULL,
  `Stratum` smallint(6) DEFAULT NULL,
  `BCR` smallint(6) DEFAULT NULL,
  `LandTypeID` tinyint(4) DEFAULT NULL,
  `RouteTypeID` tinyint(4) DEFAULT NULL,
  `RouteTypeDetailID` tinyint(4) DEFAULT NULL
);




ALTER TABLE `routes_join` ADD FOREIGN KEY (`route_id`) REFERENCES `routes` (`id`);
ALTER TABLE `routes_join` ADD FOREIGN KEY (`fifty_id`) REFERENCES `fifty` (`id`);
