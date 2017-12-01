DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(45) NULL,
    department_name VARCHAR(45) NULL,
    price DECIMAL(10, 2) NULL,
    stock_quantity INTEGER(5) NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cue Robot", "Technology", 139.99, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gift Wrap", "Home", 4.19, 55);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Scooter", "Sports", 224.24, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Echo Dot", "Technology", 29.99, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fire TV Stick", "Technology", 59.98, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Archer Vest", "Sports", 44.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("HomeTop Shoes", "Clothing", 13.99, 136);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BIC Extra-Sparkle Pencil", "Home", 3.89, 9977);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Playground Ball", "Sports", 4.91, 5391);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Long Sleeve V Neck", "Clothing", 17.59, 389);

SELECT * FROM products