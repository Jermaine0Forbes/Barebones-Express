var express  = require('express');
var app = express();
var path = require("path");
var hbs = require("express-handlebars");
var text = ` This is some regular text in a paragraph`;
app.set('port', process.env.PORT || 3000);
app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set("views", __dirname+"/views");
app.use(express.static(__dirname+"/public"));

app.get("/", function(req,res){
  res.render('home',{text:text})
});

app.use(function(req,res,next){
  res.status(404);
  res.render('404')
});

app.use(function(req,res){
  res.status(500);
  res.render('500')
})
app.listen(app.get('port'), function(){
  console.log(`Server has been connected to port ${app.get("port")}`);
})
