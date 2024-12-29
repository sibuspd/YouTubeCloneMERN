const mongoose = require("mongoose");

//handling youtubeBackend database connection asyncronously
mongoose
.connect('mongodb://localhost:27017/youtubeBackend') // Connecting to 'youtubeBackend' database
.then(()=> console.log("Connected to intended Database"))
.catch(err => console.log(err));