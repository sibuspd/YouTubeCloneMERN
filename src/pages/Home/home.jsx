import HomePage from "../../components/Homepage/homePage"
import SideNavbar from "../../components/SideNavbar/SideNavbar"
import "./home.css"

const Home = ( { sideNavbar }) => {
  return (
    <div className="home">
        <SideNavbar sideNavbar={sideNavbar} />
        <HomePage />
    </div>
  )
}

export default Home