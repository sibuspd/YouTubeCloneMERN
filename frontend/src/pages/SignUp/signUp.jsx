import { Link } from "react-router-dom";
import { useState } from "react";
import "./signUp.css"
import YouTubeIcon from '@mui/icons-material/YouTube';
import axios from "axios";

const SignUp = () => {

    const [uploadedImageUrl, setUploadedImageUrl] = useState("https://img.myloview.com/posters/default-avatar-profile-flat-icon-social-media-user-vector-portrait-of-unknown-a-human-image-700-209987471.jpg");
    const [signUpField, setSignUpField] = useState({ "channelName":"", "userName":"", "password":"", "about":"", "profilePic":uploadedImageUrl}); //profilePic will get a value in different way
    const handleInputField = (event, name) => { // 'name' here denotes the key to be targeted
        setSignUpField({
            ...signUpField,[name]:event.target.value // overrides the value paired with key [name]
        });
    }

    const uploadImage = async (e) => { // Image upload is an Asynchronous operation
        const files  = e.target.files; // The selected image from local machine is attached to 'files' property of event.target
        console.log("Image received from local machine");
        const data = new FormData(); // 'FormData'object facilitates uploading of files as key:value pairs
        data.append('file',files[0]) // uploaded File detail is attached here under 0th index
        console.log(data); // 'data' becomes an HTML form type Element here

        // youtubemern-clone --> Cloudinary preset
        data.append('upload_preset', 'youtubemern-clone'); //mentioning upload preset from Cloudinary as key:value pair
        // upload_preset tells Cloudinary which preset configuration to use for this upload.
// ----- At this stage, we have Appended the file (file) and the upload_preset to the FormData object.-----
        
        try{ // Executes when we select an image for uploading 
            const cloudName = "dwjbwk62x";
            const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, data);
            // The FormData object (which includes the file and the upload_preset) is included in the request body.
            const imageUrl = response.data.url;
            setUploadedImageUrl(imageUrl); //  Previews the new image obtained from cloudinary
            setSignUpField({...signUpField,"profilePic":imageUrl}); // Updating the value under key "profilePic"
            
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