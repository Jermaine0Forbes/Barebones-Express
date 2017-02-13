var goose = require('mongoose');
var user  = goose.model("Profile");
var global = require('../../global');
var userImage  = goose.model("Profile-Images");
var cookieLog, cookieName, defaultData;

module.exports.home = function(req,res){
   cookieLog = req.cookies.logged;
   cookieName = req.cookies.username;
userImage.find({},function(err, docs){
  if(err){
    throw err;
  }
  var arr =[], x = 0;
   for (prop in docs){
     arr[x] = docs[prop];
     x++;
   }
   arr.reverse();
  var data = global.grabValues({title:'Home', url:'home',logged:cookieLog, images:arr, username:cookieName})

  res.render('home', data);

});

}

module.exports.account = function(req,res){

  cookieLog = req.cookies.logged;
  cookieName = req.cookies.username;
 console.log("logged:"+cookieLog);
 console.log("username:"+cookieName);
 user.findOne({username: cookieName},function(err, docs){
   if(err){
     throw err;
   }
   var data = global.grabAndAddValues(docs, {title:'Account',url:'account', logged:cookieLog})

   res.render('account', data);

 });

}





module.exports.upload = function(req,res){
 cookieLog = req.cookies.logged;
 cookieName = req.cookies.username;
 defaultData =  {title:'Upload',url:'upload',logged:cookieLog}
res.render('upload', defaultData);

}
