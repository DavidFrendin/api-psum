var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.redirect('https://github.com/DavidFrendin/api-psum#readme', 301);
});


module.exports = router;
