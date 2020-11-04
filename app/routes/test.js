var express = require('express');
var router = express.Router();
var nameModel = require('../models/nameModel');

/* GET users listing. */
router.get('/name', function(req, res, next) {
	res.send(nameModel.getName());
});

module.exports = router;
