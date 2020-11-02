var express = require('express');
var router = express.Router();
var Image = require('../models/imageModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
    Image.get(function (err, image) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json(image);
    });
});



router.get('/test', function(req, res, next) {
  res.send('respond with a resource test');
});


module.exports = router;