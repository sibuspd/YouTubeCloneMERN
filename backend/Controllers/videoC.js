const Video = require("../Models/video");

exports.uploadVideo = async (req, res) => {
    try{
        const { title, description, videoLink, videoType, thumbnail } = req.body; // We aren't extracting the user value
        console.log(req.user);

    }
    catch(error){
        res.status(500).json({error: "Server error"});
    }
}