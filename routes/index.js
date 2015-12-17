var express = require('express');
var router = express.Router();
var path=require('path');

var cp=require('./functions/cp');

//console.log(typeof cp);

/* =================$ DEBUG=test npm start======================================================== */
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'cp_node' });
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
