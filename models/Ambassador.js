var mongoose = require('mongoose');

var ambassadorSchema = new mongoose.Schema({
    email:{type:String,default:""},
    name:{type:String,default:""},
    phone:{type:String,default:""},
    institute:{type:String,default:""},
    why:{type:String,default:""}
},{
    collection:"Ambassadors"
});

module.exports = mongoose.model('Ambassador', ambassadorSchema);