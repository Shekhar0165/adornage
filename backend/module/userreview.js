const mongoose = require("mongoose");
const addreviewSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true
    },
    star:{
        type:String,
        required:Number
    },
    extphoto:{
        type:Array,
    },
    update_date:{
        type: Date, 
        default: Date.now()
    }
  });

const addreview= mongoose.model('addreview',addreviewSchema)  

module.exports = addreview