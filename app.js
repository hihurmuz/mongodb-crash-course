const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const penRoutes = require("./router/pen");
const userRoutes = require("./router/user")

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/api",penRoutes);
app.use("/api",userRoutes);
 
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
},err =>{
    if (err) {
        console.log(err)
    }else{
        console.log("connected to mongodb online ...")
    }
});

app.listen(3000, function(){
    console.log("port listen ...")
})