var express  = require('express');
var liquid = require('express-liquid');
var path = require('path');
var fs = require('fs');
var app = express();
var port = process.env.PORT || 3000;
var routes = require('./mvc/routes/router');
var options = {
  // read file handler, optional
  includeFile: function (filename, callback) {
    fs.readFile(filename, 'utf8', callback);
  },
  // the base context, optional
  context: liquid.newContext(),
  // custom tags parser, optional
  customTags: {},
  // if an error occurred while rendering, show detail or not, default to false
  traceError: false
};
app.set('view engine', 'liquid');
app.engine('liquid', liquid(options));
app.use(liquid.middleware);
app.set('views', path.join(__dirname,'mvc','views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use(function(req,res,next){
  if(res.status(404)){
    res.sendStatus(404);
  }
})


app.use(function(err,req,res){
  if(err){
    res.sendStatus(500);
  }
})

app.listen(port, function(){
  console.log("Server connected to port "+port)
})
