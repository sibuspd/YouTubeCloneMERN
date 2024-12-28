import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import { Outlet, useLocation } from 'react-router-dom';
import SideNavbar from './components/SideNavbar/sideNavbar';

function App() {

  const [sideNavbar, setSideNavbar] = useState(true);
  
  const location = useLocation();
  const isVideoPage = /^\/watch\/\d+/.test(location.pathname);

  const sideNavbarOnClick = (value) => {
    setSideNavbar(value); // Set to TRUE OR FALSE
  }

  return (
    <div className='App'>
        <Navbar sideNavbarOnClick= {sideNavbarOnClick} sideNavbar={sideNavbar}/>
        {!isVideoPage && <SideNavbar sideNavbar={sideNavbar}/>}
        <Outlet context={{ sideNavbar, sideNavbarOnClick}}/>
    </div>
  ) 
}

export default App
