import "./navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";

const Navbar = ( {sideNavbarOnClick, sideNavbar}) => {

    const [DP, setDP] = useState("https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg");
    const [navbarModal, setNavbarModal] = useState(false);
    
    const handleClickModal =() => {
        setNavbarModal(prev => !prev);
    }

    const sideNavbarPass = () => {
        sideNavbarOnClick(!sideNavbar);
        console.log(!sideNavbar);
    }

    return (
        <div className="navbar">

            <div className="navbar-left"> {/*Only Humburger icon and YouTube logo*/}
                 <div className="navbarHamburger" onClick={sideNavbarPass}>
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
                <img  src={DP} className="navbar-right-logo" onClick={handleClickModal}/>
                
                {  navbarModal &&               // Conditional Rendering
                    <div className="navbar-modal">
                        <div className="navbar-modal-option">
                            Profile
                        </div>
                        <div className="navbar-modal-option">
                            Logout
                        </div>
                        <div className="navbar-modal-option">
                            Login
                        </div>
                </div>
                }
            </div>

        </div>
    )
}

export default Navbar

// https://srcwap.com/wp-content/uploads/2022/08/abstract-user-flat-4.png