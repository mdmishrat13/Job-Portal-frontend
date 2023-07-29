import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import GuestLayout from "../Layout/GuestLayout";
import HomePage from "../Pages/HomePage";
import JobPosts from "../Pages/JobPosts";

const router = createBrowserRouter([
  {
    path:'/',
    element:<GuestLayout/>,
    errorElement:<h1>error page</h1>,
    children:[
      {
        path:'',
        element: <HomePage/>,
        index:true
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'register',
        element:<Register/>
      },
      {
        path:'job-posts',
        element:<JobPosts/>
      }
    ]
  },
  
])

export default router