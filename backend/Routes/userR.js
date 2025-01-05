// All URLs related to Users  - Defines URL endpoints and map those endpoints to specific controller function 

const express = require("express");

const router = express.Router(); 

const UserController = require("../Controllers/userC"); // Controller has been imported.

// -- Routing to RESTful API for Signup process- //

router.post('/signup', UserController.signUp); //  signUp() under controller will be invoked on reaching a certain route

module.exports = router; // Exporting this user router module as a CJS