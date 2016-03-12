
var mongoose = require('mongoose');

var feedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    comment: String,
    tags: [{
        text: String
    }]
});
module.exports = mongoose.model('Feedback', feedbackSchema );
