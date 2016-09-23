var express  = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var routes = express.Router();


app.engine('handlebars', handlebars.engine);
app.set('port', process.env.PORT || 3000);
app.set("views", path.join(__dirname,'views'));

app.set("view engine", "handlebars");


app.use(express.static(__dirname+'/public'));

app.get('/', function(req,res){
	res.render("home");
})

app.get('/about', function(req,res){
	res.render("about");
})

app.use(function(req,res,next){

res.status(404)
res.render('404')
})

app.use(function(err,req,res,next){
console.error(err.stack)
res.status(500)
res.render('500')
})



app.listen(app.get('port'), function(){
	console.log("Server is connected, go to localhost:"+app.get('port'));
});