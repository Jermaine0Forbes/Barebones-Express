var express  = require('express');
var hbs = require("express-handlebars");
var body = require("body-parser");
var cookie = require("cookie-parser");
var expsValidator = require('express-validator');
var fileUpload = require('express-fileupload');

require('./mvc/models/db');
var routes = require('./mvc/routes/router');

hbs = hbs.create({
	extname:".hbs",
	partialsDir:[ './mvc/views/partials']
});

var app = express();
var path = require('path');
var port =  process.env.PORT || 3000;
app.locals.layout =  path.join(__dirname,'mvc','views','layouts','main');
app.engine(".hbs", hbs.engine);
app.set('views', path.join(__dirname,'mvc','views'));
app.set('view engine', '.hbs');
app.use(body.json());
app.use(body.urlencoded({ extended: false }));
app.use(expsValidator());
app.use(fileUpload());
app.use(cookie());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/",routes);

app.use(function(req,res,next){
	if(res.status(404)){
			var err = res.status(404);
			res.render('404',{ err:err});
	}

})

app.use(function(err,req,res){

	if(err){
		res.render('500',{ err:err});
	}

});


app.listen(port,function(){

		console.log("Server connected to "+port);

	}
);
