const mongoose = require("mongoose");

const pen = new mongoose.Schema({
    _id : mongoose.ObjectId,
    modelName :String,
    modelYear :Number,
    userById:{
        type: mongoose.Schema.Types.ObjectId,
        ref :'user'
    }
});

module.exports = mongoose.model("pen",pen);