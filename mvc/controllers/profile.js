var goose = require('mongoose');
var user = goose.model('Users');


//  /profile
module.exports.root = function(req,res){

	res.render('profile',{

		});

}


//  /profile/:id READ
module.exports.readUser = function(req,res){

		var id = req.params.id;
		
user.findById(id,
	
		function(err,doc){
			
			if(err){
				console.log('I do not know what is going on');
				throw err;
			}else if(!doc){
				console.log("Sum Ting Wong");
			}else{
				var obj = {};
				 for(var prop in doc){
					 switch( prop){
						 case "race":
						 obj[prop] = doc[prop]
						 break;
						 
						 case "sex":
						 obj[prop] = doc[prop]
						 break;
						 
						 case "age":
						 obj[prop] = doc[prop]
						 break;
						 
						 case "occupation":
						 obj[prop] = doc[prop]
						 break;
						 
						 case "music":
						 obj[prop] = doc[prop]
						 break;
						 
						 case "friend":
						 obj[prop] = doc[prop]
						 break;
						 
						 case "enemy":
						 obj[prop] = doc[prop]
						 break;
						 
						 
						 

					 }
				 }
				
				res.render('profile',{
					proName: doc.name,
					proStatus: doc.status,
					stats:obj ,
					locations: doc._id,
					title: doc.name+" -Profile"
				});
				
			}

			

		} 
	
	
	); 

}
