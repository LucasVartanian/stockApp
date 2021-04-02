use stockappdatabase;

CREATE TABLE sales(
    nro INT(8) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    saleCode INT(8) NOT NULL,
    prodCode VARCHAR(8) NOT NULL,
    quant INT(8) NOT NULL
);
