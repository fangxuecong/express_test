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
  var dst=path.join(__dirname, 'fs', Math.random()+'.ws');

  cp(src,dst);

  res.end('okay!');

});

module.exports = router;
