const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const router = express.Router();

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/", function(req, response){
     response.render("landingpage")
  });
app.get("/landingpage",function(req,res){
  res.render('landingpage')
});
  app.get('/lenevo', function(req, res) {
      res.render('lenevo');
    });
app.get('/termscond', function(req, res) {
    res.render('termscond');
  });

app.get('/waranty', function(req,res){
  res.render('waranty');
});

app.get('/apple', function(req,res){
  res.render('apple');
});
app.get('/samsung', function(req,res){
  res.render('samsung');
});
app.get('/oppo', function(req,res){
  res.render('oppo');
});
app.get('/oneplus', function(req,res){
  res.render('oneplus');
});
app.get('/vivo', function(req,res){
  res.render('vivo');
});
app.get('/mi', function(req,res){
  res.render('mi');
});
app.get('/huawei', function(req,res){
  res.render('huawei');
});
app.get('/motorola', function(req,res){
  res.render('motorola');
});






app.listen(8080,function(){
  console.log("server is started on port 8080");
});
