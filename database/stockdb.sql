CREATE DATABASE stockappdatabase;

use stockappdatabase;

CREATE TABLE stock(
    id INT(8) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    desc VARCHAR(60) NOT NULL,
    quant INT() NOT NULL,
);

--SHOW ALL TABLES
SHOW TABLES;

--DESCRIBE TABLES
describe stock;