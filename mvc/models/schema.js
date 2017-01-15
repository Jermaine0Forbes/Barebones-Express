var mongoose = require('mongoose');
var schema = mongoose.Schema;

var users  = new schema({
  name: {type:String, required:true, uppercase:true},
  status: {type: String, default:function(){ return 'Another boring day'},},
  age: { type:Number, required: true, max:120, min:16},
  race: {type: String, default:'?', uppercase:true},
  sex : {type: String, default:'?', uppercase:true},
  music: {type: String, default:'?', uppercase:true},
  occupation: {type: String, default:'?', uppercase:true},
  country: {type: String, default:'?', uppercase:true},
  enemy: {type: Number, default:0, min:0},
  friend: {type: Number, default:0, min:0},

});


mongoose.model("Users",users); 
 