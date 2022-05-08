const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "meetingroom",
});
db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("db conencted");
  }
});
module.exports = db;