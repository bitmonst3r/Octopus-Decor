const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// gets the config settings for the db
const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
};

const pool = mysql.createPool(sqlConfig);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: 'Octopus Decor' });
});

/**
 * Sends user to Login Page
 */
 router.get("/login", function (req, res, next) {
  return res.render("login");
});

/**
* Sends the user to the shopping cart page if they are logged in.
*/
router.get("/shoppingCart", function (req, res, next) {
    return res.render("shoppingCart");
});

module.exports = router;
