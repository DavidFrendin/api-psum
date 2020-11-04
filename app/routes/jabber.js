var express = require('express');
var router = express.Router();
var nameModel = require('../models/nameModel');
var loremIpsumModel = require('../models/loremIpsumModel');

/* GET users listing. */
router.get('/name', function(req, res, next) {
	res.send(nameModel.getName());
});

router.get('/', function(req, res, next) {
	var numberOfParagraphs = 5;
	var result = [];
	for (var i = 0; i < numberOfParagraphs; i++) {
		result.push(loremIpsumModel.getParagraph(i == 0));
	}

	res.send(result);
});


module.exports = router;
