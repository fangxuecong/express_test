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
/* GET signup page. */
router.get('/signup',function(req,res,next){
  var sendToSignUpEjs={
    title:'注册 - Node.js'
  };
  res.render('signup',sendToSignUpEjs);
});
/* GET signin page. */
router.get('/signin',function(req,res,next){
  var sendToSignInEjs={
    title:'登入 - Node.js'
  };
  res.render('signin',sendToSignInEjs);
});

module.exports = router;
