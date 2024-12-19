import { Link } from "react-router-dom";
import { useState } from "react";
import "./signUp.css"
import YouTubeIcon from '@mui/icons-material/YouTube';
import axios from "axios";

const SignUp = () => {

    const [signUpField, setSignUpField] = useState({ "channelName":"", "userName":"", "password":"", "about":"", "profilePic":""});
    const [uploadedImageUrl, setUploadedImageUrl] = useState("https://img.myloview.com/posters/default-avatar-profile-flat-icon-social-media-user-vector-portrait-of-unknown-a-human-image-700-209987471.jpg");
    const handleInputField = (event, name) => {
        setSignUpField({
            ...signUpField,[name]:event.target.value
        });
    }

    const uploadImage = async (e) => { // Image upload is an Asynchronous operation
        const files  = e.target.files; // The selected image from local machine is attached to 'files' property of event.target
        const data = new FormData(); // 'FormData'object facilitates uploading of files as key:value pairs
        data.append('file',files[0]) // uploaded File detail is attached here under 0th index
        console.log(data); // 'data' becomes an HTML form type Element here

        // youtubemern-clone --> Cloudinary preset
        data.append("Upload_preset", "youtubemern-clone"); //Default user Image from Cloudinary as value

        try{
            const cloudName = "dwjbwk62x";
            const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, data);
            console.log(response);
        }
        catch(err){
            console.log(err);
        }
    }

    return (
    <div className="signUp">
        <div className="signup_card">
            <div className="signUp_title">
                <YouTubeIcon sx={{fontSize: "54px"}} className="login_youtubeImage"/>
                SignUp
            </div>

            <div className="signUp_Inputs">
                <input type="text" className="signUp_Inputs_inp" placeholder="Channel Name" value={signUpField.channelName} onChange={(e)=> handleInputField(e, "channelName")}/>
                <input type="text" className="signUp_Inputs_inp" placeholder="Channel Name" value={signUpField.userName} onChange={(e)=> handleInputField(e, "userName")} />
                <input type="password" className="signUp_Inputs_inp" placeholder="Password" value={signUpField.password} onChange={(e)=> handleInputField(e, "password")} />
                <input type="text" className="signUp_Inputs_inp" placeholder="About Your Channel" value={signUpField.about} onChange={(e)=> handleInputField(e, "about")} />

                <div className="image_upload_signup">
                    <input type="file" onChange={uploadImage}/> 
                    <div className="image_upload_signup_div">
                        <img className="image_default_signUp" src={uploadedImageUrl} />    
                    </div>   
                </div>

                <div className="signUpBtns">
                    <div className="signUpBtn">
                        SignUp
                    </div>
                    <Link to={'/'} className="signUpBtn">
                        Homepage
                    </Link>
                </div>
            
            </div>
        </div>
    </div>
  )
} 

export default SignUp 