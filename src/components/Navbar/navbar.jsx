import "./navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
    return (
        <div className="navbar">

            <div className="navbar-left"> {/*Only Humburger icon and YouTube logo*/}
                 <div className="navbarHamburger">
                    <MenuIcon sx={{color: "white"}}/>
                 </div>
                 <div className="navbar_youtubeImg">
                    <YouTubeIcon sx={{fontSize: "34px"}} className="navbar_youtubeImage"/>
                    <div className="navbar_utubeTitle">
                        YouTube
                    </div>
                 </div>
            </div>

            <div className="navbar-middle">
                <div className="navbar_searchBox">
                    <input type="text" className="navbar_searchBoxInput" placeholder="Search by Title" />
                    <div className="navbar_searchIconBox">
                        <SearchIcon sx={{fontSize: "28px", color: "white"}}/>
                    </div>
                </div>
                <div className="navbar_mic">
                    <KeyboardVoiceIcon sx={{color: "whitesmoke"}}/>
                </div>
            </div>

            <div className="navbar-right">
                <VideoCallIcon sx={{fontSize:"30px", cursor: "pointer", color: "whitesmoke"}}/>
                <NotificationsIcon sx={{fontSize:"30px", cursor: "pointer", color: "whitesmoke"}}/>
            </div>

        </div>
    )
}

export default Navbar