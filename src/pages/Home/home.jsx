import { useOutletContext } from "react-router-dom"
import HomePage from "../../components/Homepage/homePage"
import "./home.css"

const Home = () => {

  const { sideNavbar } = useOutletContext();

  return (
    <div className="home">
        <HomePage sideNavbar={sideNavbar}/> {/**Passing value for homepage vw adjustment */}
    </div>
  )
}

export default Home