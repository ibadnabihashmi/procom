var express = require('express');
var router = express.Router();
var _ = require('lodash');


router.get('/csguide',function(req,res){
    var file = 'public/guide/ProCom-2016-Computer-Science-Competitions-Details.pdf';
    res.download(file);
});
router.get('/eeguide',function(req,res){
    var file = 'public/guide/ProCom-2016-Electrical-Engineering-Competitions.pdf';
    res.download(file);
});
router.get('/bbaguide',function(req,res){
    var file = 'public/guide/ProCom-2016-BBA-Competitions.pdf';
    res.download(file);
});


module.exports = router;