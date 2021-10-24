//File name : routes/index.js
//Student name : Akino Kashima 
//Student ID : 301155967
//Date: 10.23.2021 

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controller/index');

/* GET home page. */
router.get('/', controlerIndex.home);

/* GET About page */
router.get('/about', controlerIndex.about);

/* GET Projects page. */
router.get('/projects', controlerIndex.projects);

/* GET Services page. */
router.get('/services', controlerIndex.services);

/* GET Contact page. */
router.get('/contact', controlerIndex.contact);

/* GET Route for displaying the Login page */
router.get('/login', controlerIndex.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', controlerIndex.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', controlerIndex.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', controlerIndex.processRegisterPage);

/* GET to perform User Logout */
router.get('/logout', controlerIndex.performLogout);


module.exports = router;