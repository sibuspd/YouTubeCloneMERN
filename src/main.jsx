import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Video from './pages/Video/video.jsx';
import Home from './pages/Home/home.jsx';

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
      path: '/video',
      element: <Video/>
    }
  ]
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={appRouter}/>
  </StrictMode>,
)
