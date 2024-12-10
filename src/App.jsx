import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import { Outlet, useLocation } from 'react-router-dom';
import SideNavbar from './components/SideNavbar/SideNavbar';

function App() {

  const [sideNavbar, setSideNavbar] = useState(true);
  
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // React Hook

  const sideNavbarOnClick = (value) => {
    setSideNavbar(value); // Set to TRUE OR FALSE
  }

  return (
    <div className='App'>
        <Navbar sideNavbarOnClick= {sideNavbarOnClick} sideNavbar={sideNavbar}/>
        <SideNavbar sideNavbar={isHomePage?sideNavbar:false}/> 
        <Outlet context={{ sideNavbar, sideNavbarOnClick}}/>
    </div>
  )
}

export default App
