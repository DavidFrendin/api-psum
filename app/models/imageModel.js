var mongoose = require('mongoose');

//schema
var imageSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    download_url: {
        type: String,
        required: true
    },
    preview_url: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    width: {
        type: Number,
        required: true
    }
});
// Export Image Model
var Image = module.exports = mongoose.model('image', imageSchema);
module.exports.get = function (callback, limit, page) {
	limit = parseInt(limit);
	Image.find(callback).limit(limit).skip((page - 1) * limit); 
}

module.exports.getRandom = function (callback) {
	Image.count().exec(function (err, count) {
		var random = Math.floor(Math.random() * count)
		Image.findOne().skip(random).exec(callback)
	})
}



  // Get a random entry
  

  // Again query all users but only fetch one offset by our random #
