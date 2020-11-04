var express = require('express');
var router = express.Router();
var nameModel = require('../models/nameModel');
var userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const accessTokenSecret = 'api-psum';


/* GET users listing. */
router.post('/', function(req, res, next) {
	const { username, password } = req.body;

	if (!username || !password) {
		res.status(403)
  		res.render('apierror', { caption: 'error', messages: ['username and password fields are manditory'] })
	}

	userModel.findOne({username: username}, function(err, doc) {
		if (err || !doc) {
			res.status(403)
			res.render('apierror', { caption: 'error', messages: ['wrong username and/or password'] })
			console.log('wrong username and or password');
			return;
		}
		const accessToken = jwt.sign({
			iss: 'https://api-psum.herokuapp.com/',
			sub:'public',
			exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24), iat: Math.floor(Date.now() / 1000),
			iat: Math.floor(Date.now() / 1000),
			nbf: Math.floor(Date.now() / 1000),
			jti: uuidv4(),
			user: doc
		}, accessTokenSecret);
		res.send(accessToken);
	});

});

module.exports = router;
