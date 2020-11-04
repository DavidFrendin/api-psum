var express = require('express');
var router = express.Router();
var Image = require('../models/imageModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
	const { page = 1, limit = 10 } = req.query;
    Image.get(function (err, image) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
			return;
		}
		Image.countDocuments(function (err, imagesInCollection) { 
			if (err){ 
				console.log(err) 
			}else{ 
				var maxPages = Math.ceil(imagesInCollection / limit);


				var link = `<${req.secure ? 'https' : 'http'}://${req.headers.host}/images/?page=1&limit=${limit}>; rel="first"`;
				link = link + `, <${req.secure ? 'https' : 'http'}://${req.headers.host}/images/?page=${maxPages}&limit=${limit}>; rel="last"`;
				if (page > 1) {
					link = link + `, <${req.secure ? 'https' : 'http'}://${req.headers.host}/images/?page=${parseInt(page) - 1}&limit=${limit}>; rel="prev"`;
				}
				if (page < maxPages) {
					link = link + `, <${req.secure ? 'https' : 'http'}://${req.headers.host}/images/?page=${parseInt(page) + 1}&limit=${limit}>; rel="next"`;
				}
				res.header("Link", link);
				res.json(image);
			} 
		}); 
    }, limit, page);
});



router.get('/random', function(req, res, next) {
  Image.getRandom(function (err, image) {
  	res.json(image);
  });
});

router.get('/random/preview', function(req, res, next) {
  Image.getRandom(function (err, image) {
  	res.redirect(image.preview_url); 
  });
});

module.exports = router;