const express = require("express");
const cors = require("cors");
const db = require("./database");
const app = express();
const PORT = 3001;
//db connection

app.use(cors());
app.use(express.json());
app.post("/getEmployee", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  let sql = `SELECT * FROM employeedetails WHERE employeeEmail="${email}" AND employeePassword="${password}"`;
  db.query(sql, (err, data) => {
    if (err) throw err;
    if (data.length > 0) {
      res.json(data);
    } else {
      res.sendStatus(404);
    }
  });
});
app.listen(PORT, () => {
  console.log("server is running at port " + PORT);
});
