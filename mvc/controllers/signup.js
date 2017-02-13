var goose = require('mongoose');
var user  = goose.model("Profile");
var global = require('../../global');
var defaultData = {title:'Signup',url:'signup', signup:true};

module.exports.main = function(req,res){

res.render('signup', defaultData );

}

module.exports.signupCreate = function(req,res){
 var doc = req.body;
 var errorMessages = [];
 var usernameMatches ;


  req.checkBody('username','Please enter a username').notEmpty();
  req.checkBody('email','Please enter an email').notEmpty();
  req.checkBody('email','Please enter a valid email').isEmail();
  req.checkBody('password','Please enter a password').notEmpty();




  req.getValidationResult().then(function(result) {
    // console.log(result.array());
    result.array().forEach(function(value,index){
       errorMessages[index] = value.msg;
    });

    if(doc.username){

      user.findOne({username:doc.username}, function(err, docs){
        if(err){
          console.log(err);
        }

          usernameMatches = (docs.username == doc.username);

          if(usernameMatches){
            errorMessages.push('Username already exists');
          }
      });
    }
});


 var info = global.grabValues(doc);
 user.create(info, function(err,docs){
   if(err){
     console.log("Database error!: "+err);
     var data = global.grabAndAddValues(defaultData,{error:errorMessages})
     res.render('signup',data);
   }else{
     console.log(docs.username+" has been saved into the database");
     var cookieTime = global.setMaxTime({day:1});
     console.log("Cookie Time: "+cookieTime);
     res.cookie('logged',true,{maxAge:cookieTime});
     res.cookie('username', docs.username,{maxAge:cookieTime});
     var cookieLog = req.cookies.logged;
     var cookieName = req.cookies.username;
     console.log("logged: "+cookieLog);
     console.log("username: "+cookieName);
     res.redirect('/account/'+docs.username);
   }

 })

}
