
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "il8735495LEN",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;

    console.log("Connected as " + connection.threadId);
    displayAllItems();
});

var auctionItems;

function displayAllItems() {
    var query = connection.query("\nSELECT item_id, product_name, price FROM products", function (err, res) {
        console.log(query.sql);
        console.log("-----------------------------------");
        for (var i = 0; i < res.length; i++) {
            auctionItems = (res[i].item_id + " | " + res[i].product_name + " | " + res[i].price);
            console.log(auctionItems);
        }
        console.log("-----------------------------------");
        auctionStart(res);
    });
};

function auctionStart(results) {
    inquirer.prompt([
        {
            type: "list",
            message: "Please choose the item you wish to purchase.",
            choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            name: "itembid"
        }
    ]).then(function (userChoice) {
        inquirer.prompt([
            {
                type: "input",
                message: "How many units would you like to purchase?",
                name: "itemAmount"
            }
        ]).then(function (userAmount) {
            if (userChoice.itembid == 1) {
                connection.query("SELECT stock_quantity FROM products WHERE item_id = 1", function (err, res) {
                    if (userAmount.itemAmount > res[0].stock_quantity) {
                        console.log("Sorry, we don't have enough in stock! Only " + res[0].stock_quantity + " left in store!\n");
                        auctionStart();
                    }
                    else {
                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    stock_quantity: JSON.parse(res[0].stock_quantity - userAmount.itemAmount)
                                },
                                {
                                    item_id: 1
                                }
                            ],
                            function (err, res) {
                                console.log("Thank you for your purchase!\n");
                                auctionStart();
                            })
                    }
                })
            }
            else if (userChoice.itembid == 2) {
                connection.query("SELECT stock_quantity FROM products WHERE item_id = 2", function (err, res) {
                    if (userAmount.itemAmount > res[0].stock_quantity) {
                        console.log("Sorry, we don't have enough in stock! Only " + res[0].stock_quantity + " left in store!\n");
                        auctionStart();
                    }
                    else {
                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    stock_quantity: JSON.parse(res[0].stock_quantity - userAmount.itemAmount)
                                },
                                {
                                    item_id: 2
                                }
                            ],
                            function (err, res) {
                                console.log("Thank you for your purchase!\n");
                                auctionStart();
                            })
                    }
                })
            }
            else if (userChoice.itembid == 3) {
                connection.query("SELECT stock_quantity FROM products WHERE item_id = 3", function (err, res) {
                    if (userAmount.itemAmount > res[0].stock_quantity) {
                        console.log("Sorry, we don't have enough in stock! Only " + res[0].stock_quantity + " left in store!\n");
                        auctionStart();
                    }
                    else {
                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    stock_quantity: JSON.parse(res[0].stock_quantity - userAmount.itemAmount)
                                },
                                {
                                    item_id: 3
                                }
                            ],
                            function (err, res) {
                                console.log("Thank you for your purchase!\n");
                                auctionStart();
                            })
                    }
                })
            }
            else if (userChoice.itembid == 4) {
                connection.query("SELECT stock_quantity FROM products WHERE item_id = 4", function (err, res) {
                    if (userAmount.itemAmount > res[0].stock_quantity) {
                        console.log("Sorry, we don't have enough in stock! Only " + res[0].stock_quantity + " left in store!\n");
                        auctionStart();
                    }
                    else {
                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    stock_quantity: JSON.parse(res[0].stock_quantity - userAmount.itemAmount)
                                },
                                {
                                    item_id: 4
                                }
                            ],
                            function (err, res) {
                                console.log("Thank you for your purchase!\n");
                                auctionStart();
                            })
                    }
                })
            }
            else if (userChoice.itembid == 5) {
                connection.query("SELECT stock_quantity FROM products WHERE item_id = 5", function (err, res) {
                    if (userAmount.itemAmount > res[0].stock_quantity) {
                        console.log("Sorry, we don't have enough in stock! Only " + res[0].stock_quantity + " left in store!\n");
                        auctionStart();
                    }
                    else {
                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    stock_quantity: JSON.parse(res[0].stock_quantity - userAmount.itemAmount)
                                },
                                {
                                    item_id: 5
                                }
                            ],
                            function (err, res) {
                                console.log("Thank you for your purchase!\n");
                                auctionStart();
                            })
                    }
                })
            }
            else if (userChoice.itembid == 6) {
                connection.query("SELECT stock_quantity FROM products WHERE item_id = 6", function (err, res) {
                    if (userAmount.itemAmount > res[0].stock_quantity) {
                        console.log("Sorry, we don't have enough in stock! Only " + res[0].stock_quantity + " left in store!\n");
                        auctionStart();
                    }
                    else {
                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    stock_quantity: JSON.parse(res[0].stock_quantity - userAmount.itemAmount)
                                },
                                {
                                    item_id: 6
                                }
                            ],
                            function (err, res) {
                                console.log("Thank you for your purchase!\n");
                                auctionStart();
                            })
                    }
                })
            }
            else if (userChoice.itembid == 7) {
                connection.query("SELECT stock_quantity FROM products WHERE item_id = 7", function (err, res) {
                    if (userAmount.itemAmount > res[0].stock_quantity) {
                        console.log("Sorry, we don't have enough in stock! Only " + res[0].stock_quantity + " left in store!\n");
                        auctionStart();
                    }
                    else {
                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    stock_quantity: JSON.parse(res[0].stock_quantity - userAmount.itemAmount)
                                },
                                {
                                    item_id: 7
                                }
                            ],
                            function (err, res) {
                                console.log("Thank you for your purchase!\n");
                                auctionStart();
                            })
                    }
                })
            }
            else if (userChoice.itembid == 8) {
                connection.query("SELECT stock_quantity FROM products WHERE item_id = 8", function (err, res) {
                    if (userAmount.itemAmount > res[0].stock_quantity) {
                        console.log("Sorry, we don't have enough in stock! Only " + res[0].stock_quantity + " left in store!\n");
                        auctionStart();
                    }
                    else {
                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    stock_quantity: JSON.parse(res[0].stock_quantity - userAmount.itemAmount)
                                },
                                {
                                    item_id: 8
                                }
                            ],
                            function (err, res) {
                                console.log("Thank you for your purchase!\n");
                                auctionStart();
                            })
                    }
                })
            }
            else if (userChoice.itembid == 9) {
                connection.query("SELECT stock_quantity FROM products WHERE item_id = 9", function (err, res) {
                    if (userAmount.itemAmount > res[0].stock_quantity) {
                        console.log("Sorry, we don't have enough in stock! Only " + res[0].stock_quantity + " left in store!\n");
                        auctionStart();
                    }
                    else {
                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    stock_quantity: JSON.parse(res[0].stock_quantity - userAmount.itemAmount)
                                },
                                {
                                    item_id: 9
                                }
                            ],
                            function (err, res) {
                                console.log("Thank you for your purchase!\n");
                                auctionStart();
                            })
                    }
                })
            }
            else if (userChoice.itembid == 10) {
                connection.query("SELECT stock_quantity FROM products WHERE item_id = 10", function (err, res) {
                    if (userAmount.itemAmount > res[0].stock_quantity) {
                        console.log("Sorry, we don't have enough in stock! Only " + res[0].stock_quantity + " left in store!\n");
                        auctionStart();
                    }
                    else {
                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    stock_quantity: JSON.parse(res[0].stock_quantity - userAmount.itemAmount)
                                },
                                {
                                    item_id: 10
                                }
                            ],
                            function (err, res) {
                                console.log("Thank you for your purchase!\n");
                                auctionStart();
                            })
                    }
                })
            }
        })
    });
};

