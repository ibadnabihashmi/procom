var express = require('express');
var router = express.Router();
var Ambassador = require('../models/Ambassador');
var _ = require('lodash');

router.get('/apply',function(req,res){
    res.render('ambassador',{
        title:"ambassador",
        head:"Ambassador Program",
        desc:""
    });
});

router.post('/apply',function(req,res){
    var ambassador = new Ambassador({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        institute:req.body.institute,
        why:req.body.why
    });
    ambassador.save(function(err){
        if(!err){
            res.render('message',{
                head:"Thank you",
                message:"your request has been submitted ,team procom will contact you soon hopefully :)"
            });
        }
    });
});

module.exports = router;