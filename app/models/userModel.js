var mongoose = require('mongoose');

//schema
var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    roles: {
        type: [String],
        required: true,
		enum: ['REBEL', 'JEDI', 'SITH', 'DROID', 'CLONE']
    },
    profile_image: {
        type: String,
        required: true
    }
});
// Export Image Model
var User = module.exports = mongoose.model('user', userSchema);
module.exports.get = function (callback, limit, page) {
	limit = parseInt(limit);
	User.find(callback).limit(limit).skip((page - 1) * limit); 
}

module.exports.getRandom = function (callback) {
	User.count().exec(function (err, count) {
		var random = Math.floor(Math.random() * count)
		User.findOne().skip(random).exec(callback)
	})
}



  // Get a random entry
  

  // Again query all users but only fetch one offset by our random #
