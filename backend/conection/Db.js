const express = require("express")
const mongoose = require("mongoose")
const main = async()=>{
    await mongoose.connect('mongodb://127.0.0.1/adornage');
}
module.exports = main();