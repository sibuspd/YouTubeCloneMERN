const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId, // Object ID of any row entry
        ref: 'user', // Reference to Collection or Model 'user'
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    videoLink:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    videoType:{
        type:String,
        default:"All" //Incase video type is not specified
    },
    like:{
        type:Number,
        default: 0
    },
    dislike:{
        type:Number,
        default: 0
    }
},{timestamps:true});

module.exports = mongoose.model('video', videoSchema);