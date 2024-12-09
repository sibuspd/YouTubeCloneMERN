import HomePage from "../../components/Homepage/homePage"
import SideNavbar from "../../components/SideNavbar/SideNavbar"
import "./home.css"

const Home = () => {
  return (
    <div className="home">
        <SideNavbar/>
        <HomePage/>
    </div>
  )
}

export default Home