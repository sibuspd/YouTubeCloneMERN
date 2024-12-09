import "./sideNavbar.css";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ContentCutIcon from "@mui/icons-material/ContentCut";

const SideNavbar = ( {sideNavbar} ) => {
  return (
    <div className={sideNavbar?"home-sideNavbar":"home-sideNavbarHide"}>
      <div className="home_sideNavbarTop">
        {/* Top - 1st option  */}
        <div className="home_sideNavbarTopOption">
          <HomeIcon />
          <div className="home_sideNavbarTopOptionTitle">Home</div>
        </div>
        {/* Top - 2nd option  */}
        <div className="home_sideNavbarTopOption">
          <VideocamIcon />
          <div className="home_sideNavbarTopOptionTitle">Shorts</div>
        </div>
        {/* Top - 3rd option  */}
        <div className="home_sideNavbarTopOption">
          <SubscriptionsIcon />
          <div className="home_sideNavbarTopOptionTitle">Subcriptions</div>
        </div>
      </div>


      <div className="home_sideNavbarMiddle">
        <div className="home_sideNavbarTopOption">
          <div className="home_sideNavbarTopOptionTitle">You</div>
          <ChevronRightIcon />
        </div>

        {/* Middle - 1st option  */}
        <div className="home_sideNavbarTopOption">
          <RecentActorsIcon />
          <div className="home_sideNavbarTopOptionTitle">Your Channel</div>
        </div>

        {/* Middle - 2nd option  */}
        <div className="home_sideNavbarTopOption">
          <HistoryIcon />
          <div className="home_sideNavbarTopOptionTitle">History</div>
        </div>

        {/* Middle - 3rd option  */}
        <div className="home_sideNavbarTopOption">
          <PlaylistAddIcon />
          <div className="home_sideNavbarTopOptionTitle">Playlist</div>
        </div>

        {/* Middle - 4th option  */}
        <div className="home_sideNavbarTopOption">
          <SmartDisplayIcon />
          <div className="home_sideNavbarTopOptionTitle">Your Videos</div>
        </div>

        {/* Middle - 5th option  */}
        <div className="home_sideNavbarTopOption">
          <WatchLaterIcon />
          <div className="home_sideNavbarTopOptionTitle">Watch Later</div>
        </div>

        {/* Middle - 6th option  */}
        <div className="home_sideNavbarTopOption">
          <ThumbUpAltIcon />
          <div className="home_sideNavbarTopOptionTitle">Liked Videos</div>
        </div>

        {/* Middle - 7th option  */}
        <div className="home_sideNavbarTopOption">
          <ContentCutIcon />
          <div className="home_sideNavbarTopOptionTitle">Your Clips</div>
        </div>
      </div>


      <div className="home_sideNavbarMiddle">     {/*Reusing same class styles */}
    
        {/* 1st Bottom Option - Header */}
        <div className="home_sideNavbarTopOption">
          <div className="home_sideNavbarTopOptionTitleHeader">
            Subscriptions
          </div>
        </div>

        {/* 2nd Bottom Option*/}
        <div className="home_sideNavbarTopOption">
          <img src="https://yt3.googleusercontent.com/rlvrzXDSeL1kqpHWghj668jS1w7gXHBWbvB-IyoB4tNOsSqJNt_JY2xU6_r2adfxJ5sbpJvbw1Q=s176-c-k-c0x00ffffff-no-rj-mo" className="home_sideNavbar_ImgLogo" />  
          <div className="home_sideNavbarTopOptionTitle">
            Vedantu Olympiad School
          </div>
        </div>

          {/* 3rd Bottom Option*/}
          <div className="home_sideNavbarTopOption">
            <img src="https://yt3.googleusercontent.com/ytc/AIdro_kI8EMkz3qlMMD5zmT0geuWb41lUpE0sw-O7g8pgg4WyQ=s176-c-k-c0x00ffffff-no-rj-mo" className="home_sideNavbar_ImgLogo" />
            <div className="home_sideNavbarTopOptionTitle">
              Nerd's Lessons
            </div>
          </div>

          {/* 4th Bottom Option*/}
          <div className="home_sideNavbarTopOption">
            <img src="https://yt3.googleusercontent.com/LFiy0mdLB444rDFuClMDhv86pzjDgoLFLhlciT1wQPMMwAjdcD0JacPODMk4Y7cLl9EzFS3rXA=s160-c-k-c0x00ffffff-no-rj" className="home_sideNavbar_ImgLogo" />
            <div className="home_sideNavbarTopOptionTitle">
              Errichto Algorithms
            </div>
          </div>

          {/* 5th Bottom Option*/}
          <div className="home_sideNavbarTopOption">
            <img src="https://yt3.googleusercontent.com/eTG23JUCOlcy0L8VcLBJ-hN3VZfazLh2q23TOUjHh549AenWadJ3cNVUwGY44QWxo1_0z-OC_Q=s160-c-k-c0x00ffffff-no-rj" className="home_sideNavbar_ImgLogo"/>
            <div className="home_sideNavbarTopOptionTitle">
            KnowledgeGATE by Sanchit Sir
            </div>
          </div>

          {/* 6th Bottom Option*/}
          <div className="home_sideNavbarTopOption">
            <img src="https://yt3.googleusercontent.com/ISa-qobiRieUf7gGOMzihMJAcxZ-y_ZuiCUDp063CF0SVSkAQ_tFQ6gfkTG-hg2PtbRwFzXgOQ=s176-c-k-c0x00ffffff-no-rj-mo" className="home_sideNavbar_ImgLogo"/> 
            <div className="home_sideNavbarTopOptionTitle">
            Thriving Technologist

            </div>
          </div>
           
      </div>
    
    </div>
  );
};

export default SideNavbar;
