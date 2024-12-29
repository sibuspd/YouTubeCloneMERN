var express = require("express");

const app = express();

const port = 4000;

require('./Connection/conn');

app.get("/", (req, res) => {
    res.send({
        message: "Welcome to YouTube Clone backend module"
    })
})

app.listen(port, ()=>{
    console.log("Server hosted on Port - 4000");
})