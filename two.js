var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var mysql = require('mysql');  
 

var app = express();
// for parsing application/json
app.use(bodyParser.json()); 
app.set('view engine', 'ejs');

// for parsing application/xwww-
 // form-urlencodedz
 app.use(express.urlencoded({extended:false}))

// for parsing multipart/form-data

app.use(express.static('public'));

 app.get('/demo' ,(req,res)=>{
res.render('index');
 })







let name;
let age;


 
 app.post('/demo/Signup',(req,res)=>{
 
   name=req.body.name;
   age=req.body.age;
   console.log(age,name)
 res.send(name+" "+age+"  inserted succesfully")

   insertdata(name,age);

   
 })



 var con = mysql.createConnection({  
   host: "localhost",  
   user: "root",  
   password: ""  ,
   database:"details"
 });  
let insertdata=(name,age)=>{
 con.connect(function(err) {  
  if (err) throw err;  
  console.log("Connected!");  

  var sql = `INSERT INTO data ( name, age) VALUES ('${name}', ${age})`;;  
  con.query(sql, function (err, result) {  
  if (err) throw err;  
  console.log("1 record inserted");  
  });  
})
}

 app.listen(8080,()=>{console.log("STARTEED")})
