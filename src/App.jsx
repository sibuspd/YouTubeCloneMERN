import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import Home from './pages/Home/home'
import { Outlet } from 'react-router-dom';

function App() {

  const [sideNavbar, setSideNavbar] = useState(true);

  const sideNavbarOnClick = (value) => {
    setSideNavbar(value); // Set to TRUE OR FALSE
  }

  return (
    <div className='App'>
        <Navbar sideNavbarOnClick= {sideNavbarOnClick} sideNavbar={sideNavbar}/> 
        <Home sideNavbar = {sideNavbar}/>
        <Outlet/>
    </div>
  )
}

export default App
