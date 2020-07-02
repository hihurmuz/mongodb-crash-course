const mongoose = require("mongoose");

const user = new mongoose.Schema({
    _id : mongoose.ObjectId,
    name :String,
    productNumber :{
        type:Number,
        required:false,
        unique:false
    },
});

module.exports = mongoose.model("user",user);