var app = require('express');
var routes = app.Router();
var control = require('../controllers/default');
var signup = require('../controllers/signup');
var log = require('../controllers/logged');
var profile = require('../controllers/profile');
var admin = require('../controllers/admin');
var upload = require('../controllers/upload');
var global = require('../../global');
var goose = require('mongoose');
var user  = goose.model("Profile");
var path = require('path');
var userImage  = goose.model("Profile-Images");





/*=================================
    home
=================================*/
routes.get('/', control.home);

/*=================================
    account
=================================*/
routes.get('/account/:username',control.account);

/*=================================
    profile
=================================*/
routes.get('/profile/:id',profile.main);
routes.get('/profile',profile.redirect);

/*=================================
    sign
=================================*/
routes.get('/signup',signup.main);
routes.post('/signup',signup.signupCreate);


/*=================================
    login
=================================*/
routes.get('/login',log.in)
routes.post('/login',log.loginCheck);
routes.get('/logout',log.out);

/*=================================
    main
=================================*/
routes.get('/admin',admin.main);


/*=================================
    upload
=================================*/
routes.get('/upload',upload.main);
routes.post('/upload',upload.image);




module.exports = routes;
