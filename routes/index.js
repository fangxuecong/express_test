var express = require('express');
var router = express.Router();
var path=require('path');

/* =================$ DEBUG=test npm start======================================================== */
/* GET home page. */
router.get('/', function(req, res, next) {

  var sendToIndexEjs={
    title: 'Node.js'
  };

  res.render('index', sendToIndexEjs);
});

router.get('/signup',function(req,res,next){
  var sendToSignUpEjs={
    title:'注册 - Node.js'
  };
  res.render('signup',sendToSignUpEjs);
});


module.exports = router;
