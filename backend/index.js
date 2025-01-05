var express = require("express");

const app = express(); // app is an express module object/instance

const port = 4000;

require('./Connection/conn');

// --- Recommended Order is || MIDDLEWARE || --> || ROUTES ||--> || LISTEN || --- //

// >-------- Middlewares ------------<
app.use(express.json()); // To read JSON data received through POST method

const AuthRoutes = require("./Routes/userR"); // Authentication-based User routing
app.use('/auth', AuthRoutes); // Authroutes is called when we reach end-point URL -/auth in 1st phase
// >--------- Routes ----------------<


// >--------- Listen ----------------<
app.listen(port, ()=>{
    console.log("Server hosted on Port - 4000");
})