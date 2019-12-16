var express = require('express');
var router = express.Router();
var blood = require('../controller/modelData');



/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('index', { title: 'blood-bank' });
});

router.get('/register', function(req, res, next) {
  res.render('users/user',{ title: 'blood-bank' });
 });
 router.get('/search', function(req, res, next) {
  res.render('users/search');
 });
router.post('/list', function(req, res, next) {
  console.log(req.body)
  blood.find({"place" : req.body.place, "group" : req.body.bl})
      .exec(function(err, blood) {
      if (err)
          res.send(err);
      res.render('users/list', { data: blood });
  });
});


module.exports = router;
