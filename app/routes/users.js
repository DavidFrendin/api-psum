var express = require('express');
var router = express.Router();
var Users = require('../models/userModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
	const { page = 1, limit = 10 } = req.query;
    Users.get(function (err, user) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
			return;
		}
		Users.countDocuments(function (err, usersInCollection) { 
			if (err){ 
				console.log(err) 
			}else{ 
				var maxPages = Math.ceil(usersInCollection / limit);


				var link = `<${req.secure ? 'https' : 'http'}://${req.headers.host}/users/?page=1&limit=${limit}>; rel="first"`;
				link = link + `, <${req.secure ? 'https' : 'http'}://${req.headers.host}/users/?page=${maxPages}&limit=${limit}>; rel="last"`;
				if (page > 1) {
					link = link + `, <${req.secure ? 'https' : 'http'}://${req.headers.host}/users/?page=${parseInt(page) - 1}&limit=${limit}>; rel="prev"`;
				}
				if (page < maxPages) {
					link = link + `, <${req.secure ? 'https' : 'http'}://${req.headers.host}/users/?page=${parseInt(page) + 1}&limit=${limit}>; rel="next"`;
				}
				res.header("Link", link);
				res.json(user);
			} 
		}); 
    }, limit, page);
});

router.get('/random', function(req, res, next) {
  Users.getRandom(function (err, user) {
  	res.json(user);
  });
});


module.exports = router;
