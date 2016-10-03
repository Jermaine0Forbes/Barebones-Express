var express = require('express');
var router = express.Router();
var pages = require('../controller/routes.js')

router.get("/", pages.home);
router.get("/about", pages.about);
router.get("/contact", pages.contact);

module.exports = router;
