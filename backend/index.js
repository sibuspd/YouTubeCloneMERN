var express = require("express");
const cookieParser = require("cookie-parser");

const app = express(); // app is an express module object/instance

const port = 4000;

require('./Connection/conn');

// --- Recommended Order is || MIDDLEWARE || --> || ROUTES ||--> || LISTEN || --- //

// >-------- Middlewares ------------<
app.use(express.json()); // To read JSON data received through POST method

app.use(cookieParser()); // Allows us to read cookies in the Cookier header of HTTP request

// >--------- Routes ----------------<
const AuthRoutes = require("./Routes/userR"); // Authentication-based User routing
app.use('/auth', AuthRoutes); // Authroutes is called when we reach end-point URL -/auth in 1st phase

const VideoRoutes = require("./Routes/videoR");
app.use('/api', VideoRoutes);

// >--------- Listen ----------------<
app.listen(port, ()=>{
    console.log("Server hosted on Port - 4000");
})