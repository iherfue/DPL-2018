var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool/', function(req, res, next) {
  res.render('index',{ title: 'Ivan use nodemon' ,message:'No es más rico el que más tiene sino el que menos necesita'});
});


module.exports = router;
