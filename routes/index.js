var express = require('express');
var router = express.Router();
var path=require('path');

var User=require('../models/user'); //2.模型

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
/* POST signup page. */
router.post('/signup',function(req,res,next){
  var reqSchema={
    username:req.body.fname,
    password:req.body.fpassword
  };
  
  var user=new User(reqSchema); //3.实例
  user.save(function(err){     //4.保存
    if(err){
      console.log("错误err:"+err);
      res.end("注册失败");
    }else{
      res.redirect('/signin');
    }
  });
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
  //console.log(req.session.lastPage);
  var haveSignIn=req.session.haveSignIn || false;
  if(haveSignIn){ //已经登录
    var sendToDownloadEjs={
      title:'下载node - Node.js',
      nNav:2
    };
    //req.session.lastPage='/download';
    res.render('download',sendToDownloadEjs);
  }else{
    res.redirect('/signin');
  }
  
});

module.exports = router;
