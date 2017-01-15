var express  = require('express');
require('./mvc/models/db');
var routes = require('./mvc/routes/index.js');
var exhs = require('express-handlebars');
var hbs = exhs.create(
			{
				extname:'.hbs',
				partialsDir:[ './mvc/views/partials/'],
				helpers:{ ifCon: function(val,low,up,options){
						if(val == low){
							return options.fn(this);
						}else if( val == up){
							return options.fn(this);
						}else{
							return false;
						}
					}
				}
				

			});
var body = require('body-parser');
var cookie = require('cookie-parser');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();
app.locals.layout =  path.join(__dirname,'mvc','views','layouts','main');
// hbs.getPartials();
app.engine('.hbs', hbs.engine);
app.set('views', path.join(__dirname,'mvc','views'));
app.set('view engine', '.hbs');
// hbs.getPartials().then(function(partials){console.log(partials)});
app.use(express.static(path.join(__dirname,'public')));
app.use(body.json());
app.use(body.urlencoded({extended:false}));
app.use(cookie());
app.use('/', routes);

app.get("/headers", function(req,res){
	res.set('Content-Type','text/plain');
	var s = ' ';	
	for(var name in req.headers)s+=name +': '+ req.headers[name]+'\n';
	res.send(s);
});



app.use(function(req,res, next){

  /* if( res.status(404)){
  //  
  console.log('There is a 404 error')
  } */
	res.status(404);
  res.render('error',{msg:'404 Page'});
  //  next();

});



app.use(function(err,req,res,next){
  if(err){
    // res.status(500).send('Internal Server Page Error');
    console.log('There is a 500 error');
	res.render('error',{msg:'You Done Fucked Up!',error:err});
    throw err;
  }
  
   


});

app.listen(port,function(err){
  console.log('Server has been connected to '+port);
});
