var express = require("express");
var route = express.Router();
var home = require("../controllers/home");



route.get("/", home.page);



module.exports = route;
