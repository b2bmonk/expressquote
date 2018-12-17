var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*
Dashboard lookup for the page. 
*/
router.get('/dashboard', function(req,res, next){
  res.render('dashboard',{title: 'Dashboard'});
});

module.exports = router;
