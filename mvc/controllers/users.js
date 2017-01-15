var goose = require('mongoose');
var user = goose.model('Users');

function upper(obj){
	obj.name = obj.name.toUpperCase();
	obj.race = obj.race.toUpperCase();
	obj.sex = obj.sex.toUpperCase();
	obj.music = obj.music.toUpperCase();
	obj.occupation = obj.occupation.toUpperCase();
}

//    /users/create
module.exports.create = function(req,res){
	res.render('new',{title:'Create Users'});
}

//   /users/create  CREATE
module.exports.createData = function(req,res){
	 var info = req.body;
	user.create({

	  name: info.name,
	  status: info.status,
	  age: info.age,
	  race: info.race,
	  sex : info.sex,
	  music: info.music,
	  occupation: info.occupation,
	  country: info.country,
	  enemy: info.enemy,
	  friend: info.friend
	}, function(err,docs){
		if(err){
		 console.log("Database error!:"+err)
		}else{
			console.log("Inserted "+docs.name);
			res.redirect('../users');
		}

	});


}

//  /users   READ
module.exports.readData = function(req,res){
	user.find({},function(err,docs){
		if(err){
			throw err;
		}

		res.render('users',{users:docs, title:'List of all Users'});
	});

}

// users/update/:id READ
module.exports.update = function(req,res){
	var id = req.params.id;
	user.findById(id, function(err,doc){
		if(err){
			throw err;
		}

		res.render('update',{
			name: doc.name,
			age: doc.age,
			sex : doc.sex,
			race: doc.race,
			status: doc.status,
			enemy: doc.enemy,
			friend: doc.friend,
			music: doc.music,
			occ: doc.occupation,
			country: doc.country,
			

		});
	});

}

// users/update/:id UPDATE
module.exports.updateData = function(req,res){
	var id = req.params.id;
	var  doc = req.body;
		upper(doc);
	  
	
	user.findByIdAndUpdate(id, doc, function(err)
		{  if(err){
				throw err;
			}
			
			console.log(doc.name+" has been updated!");
			res.redirect('/users');
		}

	 )

	 
}


// users/delete/:id READ
module.exports.dLete = function(req,res){
	var id = req.params.id;

	user.findById(id, function(err, doc)
		{  if(err){
				throw err;
			}
			
			res.render('delete', {user:doc})
		}

	 )

	 
}

// users/delete/:id DELETE
module.exports.dLeteData = function(req,res){
	var id = req.params.id;

	user.findById(id).remove(function(err,doc){
		if(err){
			throw err;
		}
		
		console.log(doc+" has been removed");
		res.redirect('/users');
	})

	 
}



