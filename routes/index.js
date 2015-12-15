var express = require('express');
var router = express.Router();
var fs=require('fs');
var path=require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'cp_node' });
});

//===========cp
router.get('/cp', function(req, res, next) {
  function cp(src,dst){
    fs.writeFileSync(dst,fs.readFileSync(src));
  }

  cp(path.join(__dirname, 'fs', 'srcfile.txt'),path.join(__dirname, 'fs', 'try66.txt'));
  //Error: ENOENT, no such file or directory '/home/wfe/nodejs/exppro/express_test/routes/nd/temp.txt'
  ///home/wfe/nodejs/exppro/express_test/routes/fs/srcfile.txt

  res.end('okay!');

});

module.exports = router;
