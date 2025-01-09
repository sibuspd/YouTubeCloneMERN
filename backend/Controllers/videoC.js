const Video = require("../Models/video"); // Acquiring the Video model 

exports.uploadVideo = async (req, res) => {
    try{
        const { title, description, videoLink, videoType, thumbnail } = req.body; // We aren't extracting the user value
        // user details is already sent to 'req.user' when token was generated while signing in.
        const videoUpload = new Video({ user: req.user._id, title, description, videoLink, videoType, thumbnail});
        await videoUpload.save();

        res.status(201).json({success: 'true', videoUpload});
    }
    catch(error){
        res.status(500).json({error: "Server error"});
    }
}

exports.getAllVideo = async ( req, res) => {
    try{
         const videos =  await Video.find(); // Returns all document entries inside "videos" collection
         res.status(201).json({ success: "true", "videos": videos });
    }
    catch(error){
        res.status(500).json({error: "Internal Server error"});
    }
}