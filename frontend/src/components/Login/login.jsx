import "./login.css"
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useState } from "react";
import { Link } from "react-router-dom"

const Login = ({setLoginModal}) => {

    const [loginField, setLoginField] = useState({"userName":"","password":""});
    

    const handleOnChangeInput = (event, name) =>{
        setLoginField({
            ...loginField,[name]:event.target.value // Computed Value
        })
    }

  return (
    <div className="login">
        <div className="login_card">
            <div className="titleCard_login">
                <YouTubeIcon sx={{fontSize: "54px"}} className="login_youtubeImage"/>
                Login
            </div>
            <div className="loginCredentials">
                <div className="userNameLogin">
                    <input type="text" className="userNameLoginUserName" placeholder="Username" value={loginField.userName} onChange={(e)=>handleOnChangeInput(e, "userName")}/>
                </div>
                <div className="userNameLogin">
                    <input type="password" className="userNameLoginUserName" placeholder="Password" value={loginField.password} onChange={(e)=>handleOnChangeInput(e, "password")}/>
                </div>

                <div className="login_buttons">
                    <div className="login-btn">Login</div>
                    <Link to={'/signup'} className="login-btn" onClick={()=> setLoginModal()}>SignUp</Link>
                    <div className="login-btn" onClick={()=> setLoginModal()}>Cancel</div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Login