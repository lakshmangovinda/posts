const express = require('express');
const mysql = require('mysql');
const app = express();
var cors = require('cors')
app.use(cors());

var bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res, next) => {
     res.header('Access-Control-Allow-Origin', '*');
     res.header('Access-Control-Allow-Methods', '*',
       'Access-Control-Allow-Credentials', 'true',
       'Access-Control-Allow-Headers', 'Content-Type, Authorization');
     res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,UPDATE');
     res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization,append,delete,entries,foreach,get,has,keys,set,values');
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
   });


  

const con = mysql.createConnection({
  host: "localhost",
  port:"3306",
  user: "root",
  password: "password",
  database: "pixabay",
  multipleStatements: true,
});

con.connect(function(err) {
     if (err) throw err;
     console.log("Connected! to mysql");
   });

 const port = process.env.PORT || 3888;
app.listen(port,() => {console.log('connected to 3888'); });

app.post('/post', (req, res) => {
  let todo = req.body.data; 
let stmt = `INSERT INTO images(imageurl)VALUES(?)`
  con.query(stmt, [todo], (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    else{
      console.log("uploaded sucessfully")
      res.send(results);
    }
   
  });
  
});
app.get('' , (req,res) =>{
  con.query('select * from pixabay.images', (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    else{
      console.log("Downloaded SuccessFully")
      res.send(results);
    }
   
  });


});

