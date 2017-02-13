var goose = require('mongoose');
var user  = goose.model("Profile");
var global = require('../../global');
var cookieLog, cookieName, defaultData = {title:'Login',url:'login',logged:cookieLog};

module.exports.in = function(req,res){

res.render('login', defaultData);
}

module.exports.loginCheck = function(req,res){
  // Grabs usernames and password values
  var username = req.body.username;
  var pass = req.body.password;

  // Creates an array for possible error validation messages
  var errorMessages = [];

  // Checks to validate if conditions are true or false
   req.checkBody('username','Please enter a username').notEmpty();
   req.checkBody('password','Please enter a password').notEmpty();

   // Gets the results of the validation test pushes any
  //  error messages into the errorMessages array
   req.getValidationResult().then(function(result) {
     result.array().forEach(function(value,index){
        errorMessages[index] = value.msg;
     });

     user.find({username:username,password:pass}, function(err,docs){
       if(err){

         console.log("Database error!: "+err);

         var data = global.grabAndAddValues(defaultData,{error:errorMessages})

         res.render('login',data);

       }else{

         var cookieTime = global.setMaxTime({day:1});
        console.log("docs username "+docs);

         res.cookie('logged',true,{maxAge:cookieTime});
         res.cookie('username',username,{maxAge:cookieTime});
         res.redirect('/account/'+username);
       }

     });

 });




}

module.exports.out = function(req,res){
res.clearCookie('logged');
res.clearCookie('username');
res.clearCookie('admin');
defaultData = {title:'Logout',url:'logout',logged:cookieLog};
res.render('logout', defaultData);
}
