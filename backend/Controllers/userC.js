/** 
 * This controller deals in Authentication of Username and password for giving access
 * A signup function will be created here.
 * User controller handles incoming requests related to Authentication
 * It interacts with the 'user' model and returns responses (JSON/ HTML) 
*/

const User = require("../models/user") // Controller requires the user model to extract existing user data
const bcrypt = require("bcryptjs"); // Library for encrypting password


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

          if(isExist && await bcrypt.compare(password, isExist.password) ){ // 'isExist' is for verifying username and bcrypt for verifying password
               res.json({ message: "Logged in Successfully", success: "True"});
          }
          else{
               res.status(400).json({ message: "Invalid Credentials"}); // It's actually invalid username but we are trying not to be obvious.
          }
     }
     catch(err){
          res.status(500).json({err: "Server error"});
     }
}






