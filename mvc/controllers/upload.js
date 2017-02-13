var goose = require('mongoose');
var user  = goose.model("Profile");
var path = require('path');
var userImage  = goose.model("Profile-Images");
var global = require('../../global');
var cookieLog, cookieName, defaultData ={title:'Upload',url:'upload'};


function saveImages(file,cookie, model,modelImg,path,res){

   //var child = new model.images;

   var imageInfo = {
     path: path,
     name: file.name,
     love:0,
     hate:0,
     favorite:0,
     owner:cookie
   };

   modelImg.create(imageInfo,function(err,docs){
     if(err){
       throw err;
     }

     console.log(docs.name+" has been added into the database");

     modelImg.find({owner: cookie}, function(err, docImgs){
       if(err){
         throw err;
       }

       model.findOneAndUpdate({username:cookie},{images :docImgs} ,function(err, doc){
         if(err){
           throw err;
         }
          console.log(doc);
         res.redirect('/profile/'+cookie);


       });//model.findOneAndUpdate
     })//modelImg.find




   });//modelImg.create



}


function checkIfImage(file,cookie,model,modelImg,res){

  if(file.mimetype == 'image/gif' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' ){

    console.log(file.name);
    console.log(file.mimetype);
    //console.log(file.data);
    var moveLocation = './public/imgCollection/';
    file.mv(moveLocation+file.name, function(err){
      if(err){
        throw err;
      }
       console.log('File has been moved successfully');
       moveLocation = '../public/imgCollection/';
       imgPath = path.join(global.rootPath,'public','imgCollection',file.name) ;
       //path.format({
      //    root: global.rootPath,
      //    dir:path.join('public','imgCollection')+file.name,
      //  });
       saveImages(file, cookie,model,modelImg,imgPath,res);

    });

  }else{
    console.log("the file is not an image");
    res.redirect('/upload');
  }


}


module.exports.main = function(req,res){
 cookieLog = req.cookies.logged;
 cookieName = req.cookies.username;
 data =  global.grabAndAddValues(defaultData, {logged:cookieLog, username:cookieName})
res.render('upload', data);

}


module.exports.image = function(req,res){
 cookieName = req.cookies.username;
 var img = req.files.image;
 if(req.files){

   checkIfImage(img,cookieName,user,userImage,res);

 }else{
   console.log("An error occured when uploading the file");
   res.redirect('/upload');
 }



}
