const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ // Schema is created using monsoose
    channelName:{
        type:String,
        required: true
    },
    userName:{
        type:String,
        required:true,
        unique:true // userName has to be unique
    },
    password:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        required:true
    }
},
{
    timestamps:true // Adds 2 extra field to each row - CreatedAt and UpdatedAt
});

module.exports = mongoose.model('user', userSchema); //  Model or collection 'user' based on 'userSchema'