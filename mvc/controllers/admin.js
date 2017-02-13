var goose = require('mongoose');
var user  = goose.model("Profile");
var global = require('../../global');
var cookieLog, cookieName, defaultData;

module.exports.main = function(req,res){
  cookieLog = req.cookies.logged;
  cookieName = req.cookies.username;

  user.find({}, function(err,docs){
    if(err){
      throw err;
    }
    defaultData = global.grabValues({title:'All Accounts',url:'all', logged:cookieLog, users:docs});
    res.render('all',defaultData);
  });//user.find
}//main
