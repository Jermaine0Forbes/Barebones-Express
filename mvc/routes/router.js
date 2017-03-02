var express = require('express');
var  router = express.Router();
var home = require('../controllers/home');

router.get('/', home.page);


module.exports = router;
