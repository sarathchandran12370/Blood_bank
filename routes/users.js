var express = require('express');
var router = express.Router();
var blood = require('../controller/modelData');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blood', { useNewUrlParser: true,useUnifiedTopology: true}, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

/* GET users listing. */
router.get('/', function(req, res, next) {
 res.render('users/user',{ title: 'blood-bank' });
});

router.get('/user', function(req, res, next) {
 res.render('index',{ title: 'blood-bank' });
});

router.post('/user',(req,res, next)=>{
  console.log(req.body);
   

  var bloodData = new blood({
  name : req.body.name,
  phone : req.body.number,
  address : req.body.address,
  place : req.body.place,
  sex : req.body.sex,
  group : req.body.bl
})
  bloodData.save( (err)=>{
    if(err){
      console.log(err)
    }
    res.render('index');
  })
  
});

module.exports = router;
