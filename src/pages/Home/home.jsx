import HomePage from "../../components/Homepage/homePage"
import SideNavbar from "../../components/SideNavbar/SideNavbar"
import "./home.css"

const Home = ( { sideNavbar }) => {
  return (
    <div className="home">
        <SideNavbar sideNavbar={sideNavbar} /> {/**Passing the value for toggling SideNavBar */}
        <HomePage sideNavbar={sideNavbar}/> {/**Passing value for homepage vw adjustment */}
    </div>
  )
}

export default Home