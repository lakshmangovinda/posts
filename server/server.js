const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const config = require('cors');
const n = require('./db/index');

const con = mysql.createConnection({
  host: "localhost",
  port:"3306",
  user: "root",
  password: "password",
  database: "courses"
});
con.connect((error)=>{
  if(!error){
    console.log('connection successfull');
  }
  else {
    console.log('not connected' + JSON.stringify(error));
  }
});

const app = express();
app.use(config);
app.use(bodyparser.json());
app.use(n(con));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
const port = process.env.PORT || 3888;
app.listen(port,() => {console.log('connected'); });

app.get('/stu',(req,res)=>{
  con.query('SELECT * FROM courses.css;',(err,rows,fields)=>{
    console.log(rows);
    if(!err){
      res.send(rows);
    }
    else{
      console.log(err);
    }
  })
});

// app.post('/stu',(req,res)=>{
//   con.query('insert into students.students values (?)',[req.body.name],(err,rows,fields)=>{
//     if(!err){
//       console.log(rows);
//       res.send(rows);
//     }
//
//     else{
//       console.log(err);
//     }
//   })
// });

