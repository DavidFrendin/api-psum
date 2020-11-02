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
// Export Bio Model
var Image = module.exports = mongoose.model('images', imageSchema);
module.exports.get = function (callback, limit) {
   Image.find(callback).limit(limit); 
}