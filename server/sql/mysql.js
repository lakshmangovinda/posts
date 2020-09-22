const mysql = require('mysql');

const con = mysql.createPool({
  host: "localhost",
  port:"3306",
  user: "root",
  password: "password",
  database: "shop",
  multipleStatements: true,
});


module.exports = con;
