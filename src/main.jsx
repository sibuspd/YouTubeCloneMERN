import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Video from './pages/Video/video.jsx';
import Home from './pages/Home/home.jsx';
import Profile from './pages/Profile/profile.jsx';
import VideoUpload from './pages/VideoUpload/videoUpload.jsx';
import SignUp from './pages/SignUp/signUp.jsx';

//Router Configuration 

const appRouter = createBrowserRouter([{
  path:'/',
  element: <App/>,
  children: [
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/watch/:id',
      element: <Video/>
    },
    {
      path: '/user/:id',
      element: <Profile/>
    },
    {
      path: '/:id/upload',
      element: <VideoUpload/>
    },
    {
      path: '/signup',
      element: <SignUp/>
    }
  ]
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={appRouter}/>
  </StrictMode>,
)
