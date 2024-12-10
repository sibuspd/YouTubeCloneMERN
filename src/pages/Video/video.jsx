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

                <div className="youtube_video_About">
                    <div>2024-09-30</div>
                    <div>Video desciption bla bla bla</div>
                </div>

                <div className="youtubeCommentSection">
                    <div className="youtubeCommentSectionTitle">2 Comments</div>
                    <div className="youtubeSelfComment">
                        <img className="video_youtubeSelfCommentProfile" src="https://yt3.googleusercontent.com/ytc/AIdro_mvtjOo2sSb0doCb8jiVbrm3QrlfJAWTXtK6hgizkze_g=s160-c-k-c0x00ffffff-no-rj" />
                        <div className="addAComment">
                            <input type="text" className="addACommentInput" placeholder="Add a comment" />
                            <div className="cancelSubmitComment">
                                <div className="cancelComment">Cancel</div>
                                <div className="cancelComment">Comment</div>
                            </div>
                        </div>
                    </div>
                    <div className="youtubeOtherComments">
                        <div className="youtubeSelfComment"> {/**Inheriting same style as above */}
                            <img className="video_youtubeSelfCommentProfile" src="https://yt3.googleusercontent.com/ytc/AIdro_mvtjOo2sSb0doCb8jiVbrm3QrlfJAWTXtK6hgizkze_g=s160-c-k-c0x00ffffff-no-rj" />
                            <div className="others_commentSection">
                                <div className="other_commentSectionHeader">
                                    <div className="channelName_comment">Username</div>
                                    <div className="commentTimingOther">2024-09-30</div>
                                </div>
                                <div className="otherCommentSectionComment">
                                    Cool web app project
                                </div>
                            </div> 
                        </div>
                        <div className="youtubeSelfComment"> {/**Inheriting same style as above */}
                            <img className="video_youtubeSelfCommentProfile" src="https://yt3.googleusercontent.com/ytc/AIdro_mvtjOo2sSb0doCb8jiVbrm3QrlfJAWTXtK6hgizkze_g=s160-c-k-c0x00ffffff-no-rj" />
                            <div className="others_commentSection">
                                <div className="other_commentSectionHeader">
                                    <div className="channelName_comment">Username</div>
                                    <div className="commentTimingOther">2024-09-30</div>
                                </div>
                                <div className="otherCommentSectionComment">
                                    Cool web app project
                                </div>
                            </div> 
                        </div>
                        <div className="youtubeSelfComment"> {/**Inheriting same style as above */}
                            <img className="video_youtubeSelfCommentProfile" src="https://yt3.googleusercontent.com/ytc/AIdro_mvtjOo2sSb0doCb8jiVbrm3QrlfJAWTXtK6hgizkze_g=s160-c-k-c0x00ffffff-no-rj" />
                            <div className="others_commentSection">
                                <div className="other_commentSectionHeader">
                                    <div className="channelName_comment">Username</div>
                                    <div className="commentTimingOther">2024-09-30</div>
                                </div>
                                <div className="otherCommentSectionComment">
                                    Cool web app project
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="videoSuggestions">
            <div className="videoSuggestionsBlock">
                <div className="video_suggestion_thumbnail">
                    <img src="https://tpc.googlesyndication.com/simgad/11580188162865580943" className="video_suggestion_thumbnail_img" />
                </div>
                <div className="video_suggestions_About">
                    <div className="video_suggestions_About_title">
                    Embedded software system #Andruino #Raspberry Pi 
                    </div>
                    <div className="video_suggestions_About_Profile">
                        Embedded Systems
                    </div>
                    <div className="video_suggestions_About_Profile">
                        136 views. 1 day ago
                    </div>
                </div>
            </div>
            <div className="videoSuggestionsBlock">
                <div className="video_suggestion_thumbnail">
                    <img src="https://tpc.googlesyndication.com/simgad/11580188162865580943" className="video_suggestion_thumbnail_img" />
                </div>
                <div className="video_suggestions_About">
                    <div className="video_suggestions_About_title">
                    Embedded software system #Andruino #Raspberry Pi 
                    </div>
                    <div className="video_suggestions_About_Profile">
                        Embedded Systems
                    </div>
                    <div className="video_suggestions_About_Profile">
                        136 views. 1 day ago
                    </div>
                </div>
            </div>
            <div className="videoSuggestionsBlock">
                <div className="video_suggestion_thumbnail">
                    <img src="https://tpc.googlesyndication.com/simgad/11580188162865580943" className="video_suggestion_thumbnail_img" />
                </div>
                <div className="video_suggestions_About">
                    <div className="video_suggestions_About_title">
                    Embedded software system #Andruino #Raspberry Pi 
                    </div>
                    <div className="video_suggestions_About_Profile">
                        Embedded Systems
                    </div>
                    <div className="video_suggestions_About_Profile">
                        136 views. 1 day ago
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Video