var mongoose=require("mongoose");
var Feed= require('../models/Feed');

exports.index = function(req, res) {
    res.render('home', {
        title: 'Home'
    });
};

exports.addNews= function(req, res) {
    var time= req.body.time;
    var news= req.body.news;
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/"
        + currentdate.getFullYear() + " - "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    var feed={
        news: news,
        time: datetime
    };
    new Feed(feed).save(function(error, response){
        error ? console.log(error) : console.log("success");
    });
    res.redirect('/index1.html');
};
exports.getNews= function(req, res) {
    Feed.find({},function(error, response){
        res.send({
            feed : response
        });
    })
};