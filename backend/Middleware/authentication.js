// Authorization Part - Keeping the User logged in 

const jwt = require("jsonwebtoken");

const User = require("./Models/user"); // 'User' is a Mongoose model here.

// The Mongoose model is much more than a simple JSON object; it includes methods and properties for interacting with the MongoDB database.

const auth = async (req, res, next) => {
    const token = req.cookies.token; // The token is present inside Cookie. If it doesn't exist, user has to login
    if(!token) // No token present inside Cookies / User is not logged in
        return res.status(401).json({ error: "No token. Authorization denied."});
    else{
        try
        {
            const decode = jwt.verify(token, "My_Secret_Key"); // Verifies the token signature fetched from client's cookies and decodes its payload\
            // Thus, 'decode' will hold the decoded Payload of Json Web Token. 
            req.user = await User.findById(decode.userId).select('-password'); // payload contains user-related informations
            // await User.findById(decode.userId) is a database query for finding any such user object with matching ID - decode.userId. 
            // The select method is used to specify which fields should be included or excluded in the result. The - (minus) sign before password indicates that the password field should be excluded from the result.
            next(); // calling the next or subsequent middleware
        }
            // the req object in Express.js is quite flexible! While it's commonly used to extract information from the client's request (like headers, query parameters, body data, etc.), it can also be extended to store additional information that you might need later in the request lifecycle.
            // We are essentially storing all concerned user details in req.user except password.
            catch(err){ // Token doesn't not match
            res.status(401).json( { error: "Token is invalid" });
        }
    }
}


