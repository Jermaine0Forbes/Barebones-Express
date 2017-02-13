var goose = require('mongoose');
var user  = goose.model("Profile");
var global = require('../../global');
var cookieLog, cookieName, defaultData;

module.exports.main = function(req,res){
  cookieLog = req.cookies.logged;
  cookieName = req.cookies.username;
  defaultData  = {title:'Profile',url:'profile',logged:cookieLog};
   if( cookieName != undefined ){
     user.findOne({username: cookieName},function(err, docs){
       if(err){
         throw err;
       }
       var data = global.grabAndAddValues(docs, defaultData)
        
       res.render('profile', data);

     });

   }else{
     res.redirect('/signup');
   }
}

module.exports.redirect = function(req,res){
 res.redirect('/signup');
}
