const mongoose = require("mongoose");
const addOphanageSchema = new mongoose.Schema({
    nameorg:{
        type:String,
        required:true
    },
    ownername:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pfp:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    extphoto:{
        type:Object,
    },
    review:{
        type:Array
    },
    star:{
        type:Number,
    },
    update_date:{
        type: Date, 
        default: Date.now()
    }
  });

const addNewProduct= mongoose.model('addOphanage',addOphanageSchema)  

module.exports = addNewProduct