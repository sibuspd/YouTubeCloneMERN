import "./login.css"
import YouTubeIcon from '@mui/icons-material/YouTube';


const Login = ({setLoginModal}) => {

  return (
    <div className="login">
        <div className="login_card">
            <div className="titleCard_login">
                <YouTubeIcon sx={{fontSize: "54px"}} className="login_youtubeImage"/>
                Login
            </div>
            <div className="loginCredentials">
                <div className="userNameLogin">
                    <input type="text" className="userNameLoginUserName" placeholder="Username"/>
                </div>
                <div className="userNameLogin">
                    <input type="password" className="userNameLoginUserName" placeholder="Password"/>
                </div>

                <div className="login_buttons">
                    <div className="login-btn">Login</div>
                    <div className="login-btn">SignUp</div>
                    <div className="login-btn" onClick={()=> setLoginModal()}>Cancel</div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Login