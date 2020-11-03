var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const accessTokenSecret = 'api-psum';

/* GET users listing. */
router.post('/', function(req, res, next) {
	const { username, password } = req.body;

	if (!username || !password) {
		res.status(500)
  		res.render('apierror', { caption: 'error', messages: ['username and password fields are manditory'] })
	}

	const accessToken = jwt.sign({ iss: 'https://api-psum.herokuapp.com/', sub:'public', exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24), iat: Math.floor(Date.now() / 1000), jti: uuidv4(), username: username }, accessTokenSecret);
	res.send(accessToken);
});

module.exports = router;
