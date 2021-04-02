use stockappdatabase;

CREATE TABLE sales(
    ID INT(8) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    date VARCHAR(10) NOT NULL,
    prodCode VARCHAR(8) NOT NULL,
    prodPrice INT(8) NOT NULL,
    quant INT(8) NOT NULL
);
