/*
Navicat MySQL Data Transfer

Source Server         : 1085hhy1805
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mingxieku

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-09-26 09:18:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'haorenna', '123');
INSERT INTO `user` VALUES ('2', 'laoxie', '123');
INSERT INTO `user` VALUES ('3', 'haha', '111');
INSERT INTO `user` VALUES ('4', 'hahaha', '111');
INSERT INTO `user` VALUES ('5', 'laoda', '123');
INSERT INTO `user` VALUES ('6', 'zaoshui', '111222');
INSERT INTO `user` VALUES ('7', 'yaya', '111222');
INSERT INTO `user` VALUES ('8', '艾达王额', '123');
INSERT INTO `user` VALUES ('9', 'amos', '123');
INSERT INTO `user` VALUES ('26', 'qweqwe', '111');
SET FOREIGN_KEY_CHECKS=1;
