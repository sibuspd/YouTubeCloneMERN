import { Link } from "react-router-dom";
import { useState } from "react";
import "./videoUpload.css"
import YouTubeIcon from '@mui/icons-material/YouTube';
    
    const VideoUpload = () => {

        const [inputField, setInputField] = useState({"title":"", "description":"", "videolink":"", "thumbnail":"", "videoType":""});

        const handleOnChangeInput = (event, name) =>{
            setInputField({
                ...inputField,[name]:event.target.value // Computed Value
            })
        }

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
                    <div>Thumbnail <input type="file" accept="image/*" /> {/**Accepts only image */}</div>
                    <div>Video <input type="file" accept="video/mp4" /> {/**Accepts only video files */}</div>
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