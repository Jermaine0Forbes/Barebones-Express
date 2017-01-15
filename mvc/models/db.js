var goose = require('mongoose');
var db = 'mongodb://localhost/social';
goose.connect(db);

goose.connection.on('connected', function(){
  console.log('Mongooose connected to: '+db);

})
goose.connection.on('error', function(err){
  console.log('Mongooose connection error: '+err);

})




require('./schema');
