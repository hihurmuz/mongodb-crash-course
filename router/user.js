const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/user");

router.post("/userroute",async (req,res)=>{
    try{
        let user = new User();
        user._id = new mongoose.Types.ObjectId();
        user.name = req.body.name;
        user.productNumber = req.body.productNumber;

        await user.save();

        res.json({
            success : true,
            savedUser : user,
            message : "user saved ..."
        })
    }catch(error){
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
});

module.exports = router;