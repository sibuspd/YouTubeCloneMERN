import "./navbar.css"
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left"> {/*Only Humburger icon and YouTube logo*/}
                 <div className="navbarHamburger">
                    <MenuIcon/>
                 </div>
            </div>
        </div>
    )
}

export default Navbar