import "./video.css"
import { useOutletContext } from 'react-router-dom';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
const Video = () => {

    const { sideNavbar, sideNavbarOnClick } = useOutletContext(); 

  return (
    <div className="video">
        <div className="videoPostSection">
            <div className="video_youtube">
                <video width="400" controls autoPlay className="video_youtube_video">
                    <source src="https://res.cloudinary.com/mashuudanny/video/upload/v1720350210/xo81mxhcvjckkw1tdp62.mp4" type="video/mp4"/>
                    <source src="" type="video/webm"/>
                    Your browser doesn't support the video format 
                </video>
            </div>

            <div className="video_youtubeAbout">
                <div className="video_uTubeTitle">
                    {"Machine Learning full course"}
                </div>
                <div className="youtube_video_ProfileBlock">
                    <div className="youtube_video_ProfileBlock_left">
                        <div className="youtube_video_ProfileBlock_left_img">
                            <img className="youtube_video_ProfileBlock_left_image" src="https://yt3.googleusercontent.com/nQq95AJapoab7fj3RG52TDZWXvD-KkzVtdqw6-Ch6r-cjEDAa5iGAjFrAEitPu6PBdcNzuN1Vcg=s160-c-k-c0x00ffffff-no-rj"/>
                        </div>
                        <div className="youtubeVideo_subsView">
                            <div className="youtubePostProfileName">
                                {"User1"}
                            </div>
                            <div className="youtubePostProfileSubs">
                                {"2024-07-09"}
                            </div>
                        </div>
                        <div className="subscribeBtnYoutube">
                            Subscribe
                        </div>
                    </div>

                    <div className="youtube_video_likeBlock">
                        <div className="youtube_video_likeBlock_Like">
                            <ThumbUpOffAltIcon/>
                            <div className="youtube_video_likeBlock_LikeCount">
                                {32}
                            </div>
                        </div>

                        <div className="youtubeVideoDivider"></div>

                        <div className="youtube_video_likeBlock_Like">
                            <ThumbDownOffAltIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="videoSuggestions">
            Video Suggestions
        </div>
    </div>
  )
}

export default Video