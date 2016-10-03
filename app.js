var express  = require('express');
var app = express();
var path = require("path");
var hbs = require('express-handlebars');
var port = process.env.PORT || 3000;
var err = `this is an error`;
var routes = require("./app_server/routes/index.js")

app.engine( 'handlebars',hbs({defaultLayout: 'main'}));
app.set('views', __dirname+"/views");
app.set('view engine',"handlebars")

app.use(express.static(path.join(__dirname,'public')));


app.use("/", routes);

app.use(function(req,res){
res.status(404);
res.render('404', {text: err});

})
app.listen(port, function(req,res){
  console.log(`Server has been connected to port ${port}`);
})
