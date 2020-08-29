// Set up MySQL connection.
const mysql = require("mysql");
require("dotenv").config()

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQLPASSWORD,
    database: "burgers_db"
  });
}

// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;