// All URLs related to Videos

const express = require("express");

const router = express.Router();

const videoController = require('../Controllers/videoC');

const auth = require("../Middleware/authentication.js"); // Importing Authentication middleware

router.post('/video', auth, videoController.uploadVideo); // Route to videoController on reaching "/video"
// 'auth' middleware has been sent as a 2nd parameter
// as 'Upload video' is a registered user-based feature, 'auth' has to be called first.   

router.get('/allVideo', videoController.getAllVideo); // Displaying all Videos on homepage

module.exports = router; 