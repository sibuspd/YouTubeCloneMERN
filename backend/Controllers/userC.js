/** 
 * This controller deals in Authentication of Username and password for giving access
 * A signup function will be created here.
 * User controller handles incoming requests related to Authentication
 * It interacts with the 'user' model and returns responses (JSON/ HTML) 
*/

const User = require("../models/user") // Controller requires the user model to extract existing user data
const bcrypt = require("bcryptjs"); // Library for encrypting password
const jwt = require("jsonwebtoken"); // Library for generating token and verifying Signatures


// To Configure the Behaviour of Cookie we have set further in the signIn() portion
const cookieOptions = {
     httpOnly: true, // makes the cookie inaccessible to JavaScript running on the client side thus, preventing XSS Attacks
     secure: false, // To be set to True in production stage - currently can be sent over both HTTP and HTTPS
     sameSite: "Lax" // Controls the Samesite attribute preventing cross-site request forgery
};

// Exporting the actual controller part i.e., a signUp() function 
exports.signUp = async(req, res) => {
     try{
          const {channelName, userName, about, profilePic, password} = req.body; // Object Destructuring
          // Verifying Username already exists or not
          const isExist = await User.findOne({ userName });  // Will return the user Object if value exists in that user Object
          // { userName} is the destructuring shorthand for { userName: userName }
          if(isExist){
               res.status(400).json({error: "Username already exists in collection"});
          }else
          {   
               let updatedPass = await bcrypt.hash(password,10); // 10 is the salt rounds
               // bcrypt first Generates Salt --> Adds Random string to pure Password
               const UserEntry = new User({channelName, userName, about, profilePic, password:updatedPass}); // Creates a model of userSchema type.
               // Only the password value sent to database should be an encrypted one
               await UserEntry.save();
               res.status(201).json({message: "User successfully registered", success: "Yes", data: UserEntry});               
          }
     }
     catch(err){
          res.status(500).json({err: "Server error"});
     }
}

// Exporting the actual controller 2nd part i.e., a signIn() function
exports.signIn = async (req,res) => {
     try{
          const { userName, password } = req.body;
          const isExist = await User.findOne({ userName }); // Checking Username and returns the corresponding user object
          // isExist stores the reference to the concerned user document object inside mongoDB
          if(isExist && await bcrypt.compare(password, isExist.password) ){ // 'isExist' is for verifying username and bcrypt for verifying password
               const token = jwt.sign( { userId: isExist._id}, "My_Secret_Key") // MongoDb document has key "._id".
               // We have defined this key "userId" here inside token which is to be extracted later in Authentication middleware
               // '{ userId: isExist._id}' is the payload we are encoding within the token
               // "My_Secret_Key" is the secret or private key string to sign/verify token.
               console.log(token);
               res.cookie('token', token, cookieOptions ); // Attaching token to the cookies undes res object. 
               // This token will again be extracted inside the authentication.js file during subsequent logins
               // We are setting a cookie named token with the value of the token variable. In this context, 'token' is the cookie name, and token is the value being stored in the cookie.  
               // passing 'cookieOptions' as argument - specifying the behavior and attributes of the cookie being set.
               res.json({ message: "Logged in Successfully", success: "True"});
          }
          else{
               res.status(400).json({ message: "Invalid Credentials" }); // It's actually invalid username but we are trying not to be obvious.
          }
     }    
     catch(err){
          res.status(500).json({err: "Server error"});
     }
}


// Exporting the actual controller 3rd part i.e., a logout() function
exports.logout = async (req, res) => {
     res.clearCookie('token', cookieOptions).json({ message: "Logged out successfully"}); // res.clearCookie method is used to clear or delete a cookie. It effectively tells the browser to remove the specified cookie.
}
// Using cookieOptions with res.clearCookie ensures that the same attributes are used when deleting the cookie. This consistency helps ensure that the cookie is properly removed.




