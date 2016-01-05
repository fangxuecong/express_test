var express = require('express');
var router = express.Router();
var path=require('path');

var User=require('../models/user'); //2.模型

/* =================$ DEBUG=test npm start======================================================== */
/* 1=======GET home page. */
router.get('/', function(req, res, next) {
  //4.读取session
  // console.log(req.session.lastPage);
  var haveSignIn=req.session.haveSignIn || false;
  var username=req.session.username || '';
  var sendToIndexEjs={
    title: 'Node.js',
    haveSignIn:haveSignIn,
    username:username,
    nNav:3
  };
  //3.写入session
  // req.session.lastPage='/';
  res.render('index', sendToIndexEjs);
});
/* 2=======GET signup page. */
router.get('/signup',function(req,res,next){
  var haveSignIn=req.session.haveSignIn || false;
  
  if(haveSignIn){
    res.redirect('/profile');
  }else{
    var sendToSignUpEjs={
      title:'注册 - Node.js'
    };
    res.render('signup',sendToSignUpEjs);
  }
});
/* 3=======POST signup page. */
router.post('/signup',function(req,res,next){
  var req_user={
    username:req.body.fname,
    password:req.body.fpassword
  };
  
  var user=new User(req_user); //3.实例
  user.save(function(err){     //4.保存
    if(err){
      console.log("错误err:"+err);
      res.end("注册失败");
    }else{
      res.redirect('/signin');
    }
  });
});
/* 4=======GET signin page. */
router.get('/signin',function(req,res,next){
  var haveSignIn=req.session.haveSignIn || false;
  
  if(haveSignIn){
    res.redirect('/profile');
  }else{
    var sendToSignInEjs={
      title:'登入 - Node.js'
    };
    res.render('signin',sendToSignInEjs);
  }
});
/* 5=======POST signin page. */
router.post('/signin',function(req,res,next){
  var req_user={
    username:req.body.fname,
    password:req.body.fpassword
  };
  User.findOne(req_user,function(err,doc){
    if(err){
      console.log(err);
      res.end("err");
    }else{
      //console.log(doc);  //doc-----null,object
      if(doc===null){
        res.end("用户名和密码不匹配");
      }else{
        req.session.haveSignIn=true;  //session登入源头
        req.session.username=doc.username;
        //res.redirect('back');
        if(req.session.lastPage==='/download'){
          res.redirect(req.session.lastPage);
        }else{
          res.redirect('/');
        }
      }
    }
  });
});
/* 6=======GET download page. */
router.get('/download',function(req,res,next){
  //console.log(req.session.lastPage);
  var haveSignIn=req.session.haveSignIn || false;
  var username=req.session.username || '';
  if(haveSignIn){ //已经登录
    var sendToDownloadEjs={
      title:'下载node - Node.js',
      haveSignIn:haveSignIn,
      username:username,
      nNav:2
    };
    res.render('download',sendToDownloadEjs);
  }else{
    req.session.lastPage='/download';
    res.redirect('/signin');
  }
});
/* 7=======GET profile page. */
router.get('/profile',function(req,res,next){
  res.end('p用户资料');
});






module.exports = router;
