var goose = require('mongoose');
var schema = goose.Schema;


var images = new schema({
  path:{type:String, required:true, },
  name:{type:String, },
  love:{type:Number, },
  hate:{type:Number, },
  favorite:{type:Number},
  owner:{type:String, required:true}

},
{timestamps:true}
);

var profile = new schema({
  firstName:{type:String, required:true, lowercase:true,},
  lastName:{type:String, required:true, lowercase:true,},
  email:{type:String, required:true, lowercase:true,},
  race:{type:String, lowercase:true,},
  nation:{type:String, lowercase:true},
  username:{type:String, required:true},
  password:{type:String, required:true},
  images:[images]
});


 goose.model("Profile",profile);
 goose.model("Profile-Images",images);
