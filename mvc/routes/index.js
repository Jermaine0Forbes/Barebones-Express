var express = require('express');
var router = express.Router();
var control = require('../controllers/default.js');
var profile = require('../controllers/profile.js');
var users = require('../controllers/users.js');

/* home */
router.get('/', control.home);

/* profile */
router.get('/profile',profile.root);
router.get('/profile/:id',profile.readUser);


/* users */
router.get('/users/create',users.create);
router.post('/users/create', users.createData);
router.get('/users', users.readData);
router.get('/users/update/:id', users.update).post('/users/update/:id', users.updateData);
router.get('/users/delete/:id', users.dLete).post('/users/delete/:id', users.dLeteData);




module.exports = router;
