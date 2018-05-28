CREATE TABLE   IF NOT EXISTS  `user_info` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `email` varchar(255) DEFAULT NULL,
    `password` varchar(255) DEFAULT NULL,
    `name` varchar(255) DEFAULT NULL,
    `nick` varchar(255) DEFAULT NULL,
    `detail_info` varchar(255) DEFAULT NULL,
    `create_time` varchar(20) DEFAULT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  ;
  
  INSERT INTO `user_info` set name='admin', email='11111@qq.com', password='123456';
  INSERT INTO `user_info` set name='admin', email='22222@qq.com', password='123456';
  INSERT INTO `user_info` set name='admin', email='33333@qq.com', password='123456';
  INSERT INTO `user_info` set name='admin', email='44444@qq.com', password='123456';
  