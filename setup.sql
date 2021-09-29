CREATE TABLE IF NOT EXISTS `prevail_reg` (
  `id` int(11) NOT NULL SERIAL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;