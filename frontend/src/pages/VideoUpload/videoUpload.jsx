import { Link } from "react-router-dom";
import { useState } from "react";
import "./videoUpload.css"
import YouTubeIcon from '@mui/icons-material/YouTube';
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
    
    const VideoUpload = () => {
 
        const [inputField, setInputField] = useState({"title":"", "description":"", "videoLink":"", "thumbnail":"", "videoType":""});
        const [loader, setLoader] = useState(false);
        
        const handleOnChangeInput = (event, name) =>{
            setInputField({
                ...inputField,[name]:event.target.value // Computed Value
            })
        }

        const uploadImage = async (e, type) =>{ // Type can be either "image" or "video"
            setLoader(true);
            console.log("Uploaded an Image/Video");
            const files = e.target.files; //Video file received from local machine
            const data = new FormData(); // Creating a Form object
            data.append('file',files[0]); // The video file is actually located under files[0].
            data.append('upload_preset','youtubemern-clone');  // 2 key:value pairs added to 'data'              

        // Sending the form data 'data' to Cloudinary and getting a response
        try{
            const cloudName = "dwjbwk62x";
            const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/${type}/upload`, data);
            const url = response.data.url;
            setLoader(false);

            let val = type==="image"? "thumbnail": "videoLink"; // Checks whether we are uploading thumbnail or video. val is key here
            console.log(val);
            setInputField({
                ...inputField,[val]:url // Computed Value
            })
        }
        catch(err){
            setLoader(false);
            console.log(err);
        }
    }

    console.log(inputField);

      return (
        <div className="videoUpload">
            <div className="uploadBox">
                <div className="uploadVideoTitle">
                    <YouTubeIcon sx={{fontSize: "54px", color: "red"}}/>
                    Upload Video
                </div>

                <div className="uploadForm">
                    <input type="text" className="uploadFormInputs" placeholder="Title of the Video" value={inputField.title} onChange={(e)=> handleOnChangeInput(e, "title")}/>
                    <input type="text" className="uploadFormInputs" placeholder="Description" value={inputField.description} onChange={(e)=> handleOnChangeInput(e, "description")} />
                    <input type="text" className="uploadFormInputs" placeholder="Category" value={inputField.videoType}  onChange={(e)=> handleOnChangeInput(e, "videoType")}/>
                    <div>Thumbnail <input type="file" accept="image/*" onChange={(e)=>uploadImage(e, "image")} /> {/**Accepts only image */}</div>
                    <div>Video <input type="file" accept="video/mp4" onChange={(e)=>uploadImage(e, "video")}/> {/**Accepts only video files */}</div>
                    { // Conditionally Rendering the Loader/Progress from Material UI
                    loader && <Box sx={{ display: 'flex' }}> 
                                <CircularProgress />
                            </Box>
                    }
                </div>




                <div className="uploadBtns">
                    <div className="uploadBtn-form">Upload</div>
                    <Link to={'/'} className="uploadBtn-form">Home</Link>

                </div>
            </div>
        </div>
      )
    }
    
    export default VideoUpload