const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    address:{
        type:String,
        require:true
    },
    contact:{
        type:Number,
        require:true
    }

});

const users = new mongoose.model("users",userSchema)

// users - cluster name in mongo db

module.exports = users;