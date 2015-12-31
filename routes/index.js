var express = require('express');
var router = express.Router();
var path=require('path');

/* =================$ DEBUG=test npm start======================================================== */
/* GET home page. */
router.get('/', function(req, res, next) {
  //4.读取session
  console.log(req.session.lastPage);
  var sendToIndexEjs={
    title: 'Node.js',
    nNav:3
  };
  //3.写入session
  req.session.lastPage='/';
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
/* GET download page. */
router.get('/download',function(req,res,next){
  console.log(req.session.lastPage);
  var sendToDownloadEjs={
    title:'下载node - Node.js',
    nNav:2
  };
  req.session.lastPage='/download';
  res.render('download',sendToDownloadEjs);
});

module.exports = router;
