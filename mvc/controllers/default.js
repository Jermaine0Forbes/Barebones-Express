var goose = require('mongoose');
var user = goose.model('Users');
var hom ={
  hd:"This is the title page",
  mg: "This is body content",
  tt: "Default Home",
  ps: "I have a big small dick",
  pn: "Jermaine Forbes",
  fn: '300',
  en: '7000',

};

module.exports.home = function(req,res){

  res.render('home',{
	  header:hom.hd,
	  message:hom.mg,
	  title:hom.tt,
	  pro_status:hom.ps,
	  pro_name:hom.pn ,
	  friendNo:hom.fn ,
	  enemNo:hom.en,

	   })
}
