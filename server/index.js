const express = require("express");
const cors = require("cors");
const db = require("./database");
const app = express();
const PORT = 3001;
//db connection

app.use(cors());
app.use(express.json());
app.post("/getEmployee", (req, res) => {
  // console.log(req.body);
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

app.post("/create-booking", (req, res) => {
  // console.log(req.body);
  const employeeId = req.body.employeeId;
  const name = req.body.name;
  const description = req.body.description;
  const typeofroom = req.body.typeofroom;
  const date = req.body.date;
  const starttime = req.body.starttime;
  for (let i = 0; i < starttime.length; i++) {
    let sql = `INSERT INTO meetingbooking (employeeId, name, description,typeofroom,date,starttime) VALUES("${employeeId}","${name}","${description}","${typeofroom}",STR_TO_DATE("${date}","%m/%d/%Y"),"${starttime[i]}")`;
    db.query(sql);
  }
  res.send(200);
});
app.listen(PORT, () => {
  console.log("server is running at port " + PORT);
});
