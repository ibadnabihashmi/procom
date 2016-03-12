var mongoose=require("mongoose");
var Feedback= require('../models/Feedback');

exports.getFeedback= function(req, res) {
    Feedback.find({},function(error, response){
        res.send(200,{
            feedback : response
        });
    })
};
exports.postContact = function(req, res) {
    var errors = req.validationErrors();
    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/');
    }
    var email= req.body.email;
    var name = req.body.name;
    var comment= req.body.message;
    var tags= req.body.tags;
    var feedback={
        name: name,
        email: email,
        comment: comment,
        tags: tags
    };

    new Feedback(feedback).save(function(error, response){
        error ? res.send(500) : res.send(200);
    });
};


exports.getTag=function(req, res) {
    Feedback.find({"tags.text": req.query.tag },function(error, response){
        res.send(200,{
            feedback : response
        });
    })

};