const mongoose=require('mongoose');

const customerschema=mongoose.Schema({
    firstname:{type: String},
    lastname:{type:String},
    phone:{type:String},
    eamil:{type:String}
});

module.exports=mongoose.model('Customer',customerschema);