//File name : routes/users.js
//Student name : Akino Kashima 
//Student ID : 301155967
//Date: 10.23.2021 

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
});

/* GET users listing. Available on http://localhost:3000/users/akino */
router.get('/akino', function(req, res, next) {  
  res.render('users', { 
    title: 'Users',
    userName: 'Akino'
  });
});

module.exports = router;
