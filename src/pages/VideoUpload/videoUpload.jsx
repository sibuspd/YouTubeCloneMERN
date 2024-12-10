import { Link } from "react-router-dom";
import "./videoUpload.css"
import YouTubeIcon from '@mui/icons-material/YouTube';
    
    const VideoUpload = () => {
      return (
        <div className="videoUpload">
            <div className="uploadBox">
                <div className="uploadVideoTitle">
                    <YouTubeIcon sx={{fontSize: "54px", color: "red"}}/>
                    Upload Video
                </div>

                <div className="uploadForm">
                    <input type="text" className="uploadFormInputs" placeholder="Title of the Video" />
                    <input type="text" className="uploadFormInputs" placeholder="Description" />
                    <input type="text" className="uploadFormInputs" placeholder="Category" />
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