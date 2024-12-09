import "./sideNavbar.css";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import HistoryIcon from '@mui/icons-material/History';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ContentCutIcon from '@mui/icons-material/ContentCut';

const SideNavbar = () => {
  return (
    <div className="home-sideNavbar">
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
  );
};

export default SideNavbar;
