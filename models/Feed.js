
var mongoose = require('mongoose');
var feedSchema = new mongoose.Schema({
    news: String,
    time: String
});
module.exports = mongoose.model('Feed', feedSchema);
