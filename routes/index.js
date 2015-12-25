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


module.exports = router;
