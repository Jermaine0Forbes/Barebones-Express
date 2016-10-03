var express  = require('express');
var app = express();
var path = require("path");
var hbs = require('express-handlebars');
var port = process.env.PORT || 3000;
app.engine(hbs.engine)
app.set('views', hbs.create{defaultLayout: 'main'});
app.set('view engine',"handlebars")

app.use(express.static(path.join(__dirname,'public'))


app.get("/", function(req,res){
  res.type = "text/html";
  res.send("This is a response");
})
