var express = require('express');
var router = express.Router();
var path=require('path');
var url=require('url');
var querystring=require('querystring');

var cp=require('./functions/cp');
var showAllFiles=require('./functions/showAllFiles');
//var docRoot=path.join(__dirname,'../');
var docRoot=require('docroot');
//console.log(typeof docRoot);
var demoUrl="http://www.hao123.com/?tn=96066187_hao_pg";


/* =================$ DEBUG=test npm start======================================================== */
/* GET home page. */
router.get('/', function(req, res, next) {

  var fileList=showAllFiles(docRoot);
  //console.log(req.url);
  var opt={
    title: 'cp_node',
    curDir:path.join(__dirname,'../'),    //curDir:path.normalize(__dirname+'./../')
    fileList:fileList
  };

  //var aa=querystring.stringify(opt);
  //console.log(aa);

  res.render('index', {
    title: 'cp_node',
    curDir:path.join(__dirname,'../'),    //curDir:path.normalize(__dirname+'./../')
    curUrl:url.parse(demoUrl),
    fileList:fileList
  });
});

//===========cp
router.get('/cp', function(req, res, next) {
  var src=path.join(__dirname, 'fs', 'srcfile.txt');
  var dst=path.join(__dirname, 'fs',new Date(2016,7,8)+'.mp3');

  var ext=path.extname(dst);  //后缀名

  cp(src,dst);

  res.writeHead(200,{
    "Content-Type":"text/html;charset=utf-8"
  });
  res.end(dst+"的后缀名是："+ext);

});

module.exports = router;
