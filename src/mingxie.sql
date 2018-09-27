/*
Navicat MySQL Data Transfer

Source Server         : 1085hhy1805
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mingxieku

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-09-26 09:17:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for mingxie
-- ----------------------------
DROP TABLE IF EXISTS `mingxie`;
CREATE TABLE `mingxie` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `yuanjia` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `off` varchar(255) DEFAULT NULL,
  `star` varchar(255) DEFAULT NULL,
  `commentCount` varchar(255) DEFAULT NULL,
  `xiaotu1` varchar(255) DEFAULT NULL,
  `xiaotu2` varchar(255) DEFAULT NULL,
  `xiaotu3` varchar(255) DEFAULT NULL,
  `xiaotu4` varchar(255) DEFAULT NULL,
  `haoping` varchar(255) DEFAULT NULL,
  `xtp` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mingxie
-- ----------------------------
INSERT INTO `mingxie` VALUES ('G002', '男子跑步鞋', 'shoes', 'images/x4.jpg', '0', '998', '698', '43', '12', '10002', 'images/x4.jpg', 'images/x3.jpg', 'images/x7.jpg', 'images/x6.jpg', 'images/xingxing.jpg', 'images/xxz2.jpg', 'haorenna', null);
INSERT INTO `mingxie` VALUES ('G005', '哈哈鞋', 'shoes', 'images/x10.jpg', '100', '13112', '3423', '34', '54', '10002', 'images/x6.jpg', 'images/x3.jpg', 'images/x7.jpg', 'images/x9.jpg', 'images/xingxing.jpg', null, null, null);
INSERT INTO `mingxie` VALUES ('G004', '超级鞋', 'shoes', 'images/x9.jpg', '12', '143123', '2313', '54', '1', '10002', 'images/x6.jpg', 'images/x3.jpg', 'images/x8.jpg', 'images/x10.jpg', 'images/xingxing.jpg', null, null, null);
INSERT INTO `mingxie` VALUES ('G003', '女子鞋', 'shoes', 'images/x8.jpg', '13', '131431', '123', '23', '111', '10002', 'images/x7.jpg', 'images/x3.jpg', 'images/x8.jpg', 'images/x10.jpg', 'images/xingxing.jpg', null, null, null);
INSERT INTO `mingxie` VALUES ('G006', '拖拉机鞋', 'shoes', 'images/x6.jpg', '43', '33398', '6998', '43', '412', '10002', 'images/x6.jpg', 'images/x8.jpg', 'images/x3.jpg', 'images/x4.jpg', 'images/xingxing.jpg', null, null, null);
INSERT INTO `mingxie` VALUES ('G007', '超级拖拉机鞋', 'shoes', 'images/x7.jpg', '65', '4398', '3998', '34', '35', '10002', 'images/x7.jpg', 'images/x3.jpg', 'images/x8.jpg', 'images/x9.jpg', 'images/xingxing.jpg', null, null, null);
INSERT INTO `mingxie` VALUES ('G008', '跑步鞋\r\n', 'shoes', 'images/x8.jpg', '54', '898', '698', '38', '64', '10002', 'images/x8.jpg', 'images/x3.jpg', 'images/x7.jpg', 'images/x10.jpg', 'images/xingxing.jpg', null, null, null);
INSERT INTO `mingxie` VALUES ('G009', '美女运动鞋', 'shoes', 'images/x9.jpg', '43', '22398', '1998', '39', '57', '10002', 'images/x9.jpg', 'images/x10.jpg', 'images/x3.jpg', 'images/x4.jpg', 'images/xingxing.jpg', null, null, null);
INSERT INTO `mingxie` VALUES ('G0010', '好人鞋', 'shoes', 'images/x10.jpg', '87', '3398', '2998', '43', '76', '10002', 'images/x10.jpg', 'images/x3.jpg', 'images/x5.jpg', 'images/x9.jpg', 'images/xingxing.jpg', null, null, null);
INSERT INTO `mingxie` VALUES ('b001', '男子运动服', 'shoes', 'images/y1.jpg', '65', '2998', '1899', '23', '876', '10002', 'images/y1.jpg', 'images/y7.jpg', 'images/y3.jpg', 'images/y2.jpg', 'images/xingxing.jpg', null, null, null);
INSERT INTO `mingxie` VALUES ('b002', '男子跑步服', 'shoes', 'images/y2.jpg', '345', '9198', '6298', '43', '654', '10002', 'images/y2.jpg', 'images/y5.jpg', 'images/y3.jpg', 'images/y4.jpg', 'images/xingxing.jpg', null, null, null);
INSERT INTO `mingxie` VALUES ('b003', '超级跑步服', 'shoes', 'images/y3.jpg', '65', '2498', '1398', '45', '4543', '10002', 'images/y3.jpg', 'images/y5.jpg', 'images/y6.jpg', 'images/y2.jpg', 'images/xingxing.jpg', null, null, null);
INSERT INTO `mingxie` VALUES ('b004', '休闲服', 'shoes', 'images/y4.jpg', '8', '1928', '1998', '40', '123', '10002', 'images/y1.jpg', 'images/y4.jpg', 'images/y5.jpg', 'images/y7.jpg', 'images/xingxing.jpg', null, null, null);
INSERT INTO `mingxie` VALUES ('b005', '超级休闲服', 'shoes', 'images/y5.jpg', '5', '1398', '1938', '34', '123', '10002', 'images/y5.jpg', 'images/y2.jpg', 'images/y3.jpg', 'images/y2.jpg', 'images/xingxing.jpg', null, null, null);
INSERT INTO `mingxie` VALUES ('b006', '拖拉机服', 'shoes', 'images/y6.jpg', '12', '333938', '69398', '34', '98', '10002', 'images/y6.jpg', 'images/y1.jpg', 'images/y2.jpg', 'images/y3.jpg', 'images/xingxing.jpg', null, null, null);
INSERT INTO `mingxie` VALUES ('b007', '超级拖拉机服', 'shoes', 'images/y7.jpg', '1', '41398', '39198', '43', '7654', '10002', 'images/y7.jpg', 'images/y1.jpg', 'images/y2.jpg', 'images/y5.jpg', 'images/xingxing.jpg', null, null, null);
INSERT INTO `mingxie` VALUES ('b008', '平底服', 'shoes', 'images/y2.jpg', '65', '8398', '6398', '54', '3456', '10002', 'images/y1.jpg', 'images/y2.jpg', 'images/y4.jpg', 'images/y3.jpg', 'images/xingxing.jpg', null, null, null);
INSERT INTO `mingxie` VALUES ('b009', '美女运动服', 'shoes', 'images/y7.jpg', '87', '22398', '19298', '53', '4765', '10002', 'images/y7.jpg', 'images/y1.jpg', 'images/y3.jpg', 'images/y6.jpg', 'images/xingxing.jpg', null, null, null);
INSERT INTO `mingxie` VALUES ('b010', '好人服', 'shoes', 'images/y1.jpg', '98', '3398', '2998', '43', '654', '10002', 'images/y1.jpg', 'images/y2.jpg', 'images/y3.jpg', 'images/y4.jpg', 'images/xingxing.jpg', null, null, null);
INSERT INTO `mingxie` VALUES ('b011', '男子运动鞋', 'shoes', 'images/x8.jpg', '87', '9198', '1899', '23', '7654', '10002', 'images/x8.jpg', 'images/x3.jpg', 'images/x4.jpg', 'images/x7.jpg', 'images/xingxing.jpg', null, null, null);
INSERT INTO `mingxie` VALUES ('b012', '男子跑步鞋', 'shoes', 'images/x5.jpg', '#', '9398', '6398', '45', '414', '10002', 'images/x4.jpg', 'images/x8.jpg', 'images/x5.jpg', 'images/x3.jpg', 'images/xingxing.jpg', null, null, null);
INSERT INTO `mingxie` VALUES ('b013', '超级跑步鞋', 'shoes', 'images/x3.jpg', '#', '4298', '3928', '233', '42', '10002', 'images/x8.jpg', 'images/x4.jpg', 'images/x9.jpg', 'images/x10.jpg', 'images/xingxing.jpg', null, null, null);
INSERT INTO `mingxie` VALUES ('b014', '休闲鞋', 'shoes', 'images/x4.jpg', '#', '19298', '9098', '54', '421', '10002', 'images/x10.jpg', 'images/x4.jpg', 'images/x6.jpg', 'images/x8.jpg', 'images/xingxing.jpg', null, null, null);
INSERT INTO `mingxie` VALUES ('G001', '男子鞋', 'shoes', 'images/x3.jpg', null, '2381', '834', '34', '13', null, 'images/x10.jpg', 'images/x8.jpg', 'images/x5.jpg', 'images/x3.jpg', 'images/xingxing.jpg', null, null, null);
SET FOREIGN_KEY_CHECKS=1;
