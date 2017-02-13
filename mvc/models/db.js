var goose = require('mongoose');
var dbURI = 'mongodb://localhost/mydb';
goose.connect(dbURI);
var db  = goose.connection;

db.on("error", function(err){
  console.log(err);
});

db.on("connected", function(){
  console.log("mydb database has been connected");
});


db.on("disconnected", function(){
  console.log("database has been disconnected");
});

require('./schema');
