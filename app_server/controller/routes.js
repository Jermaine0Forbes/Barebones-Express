var home = `This is information from the home page`;
var about = `This is information of the about page`;
var contact = `This is information of the contact page`;




module.exports = {
  home:function(req,res){
    res.render('home',{text:home})
  },
  about:function(req,res){
    res.render('about',{text:about})
  },
  contact:function(req,res){
    res.render('contact',{text:contact})
  }

}
