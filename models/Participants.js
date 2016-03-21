var mongoose = require('mongoose');

var participantSchema = new mongoose.Schema({
    email:{type:String,default:""},
    phone:{type:String,default:""},
    mem1:{type:String,default:""},
    mem2:{type:String,default:""},
    mem3:{type:String,default:""},
    mem4:{type:String,default:""},
    mem5:{type:String,default:""},
    teamname:{type:String,default:""},
    ambassador:{type:String,default:""},
    institute:{type:String,default:""},
    type:{type:String,default:""},
    why:{type:String,default:""},
    software:{type:String,default:""},
    status:{type:String,default:"notpaid"}
},{
    collection:"Participants"
});

module.exports = mongoose.model('Participants', participantSchema);