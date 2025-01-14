import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './LayOut/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider, { AuthContext } from '../Provider/AuthProvider';
import BookingProperty from './Pages/Home/BookingProperty/BookingProperty';
import PrivetRouter from '../PrivetRouter/PrivetRouter';
import Bookings from './Pages/Home/Bookings/Bookings';
import About from './Pages/About/About';
import PropertyArea from './Pages/PropertyPage/PropertyArea';
import BlogPage from './Pages/BlogPage/BlogPage';
import ContactPage from './Pages/ContactPage/ContactPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'login',
        element: <Login></Login>
      },
      {
        path:'register',
        element: <Register></Register>
      },
      {
        path:'bookingProperty/:id',
        element:<PrivetRouter><BookingProperty></BookingProperty></PrivetRouter>,
        loader: ({params})=> 
          fetch(`https://real-state-project-server-omega.vercel.app/proparties/${params.id}`)
      },
      {
        path:'bookings',
        element: <PrivetRouter><Bookings></Bookings></PrivetRouter>
      },
      {
        path:"about",
        element: <About></About>
      },
      {
        path:"property",
        element: <PropertyArea></PropertyArea>
      },
      {
        path:"blog",
        element: <BlogPage></BlogPage>
      },
      {
        path:'contact',
        element: <ContactPage></ContactPage>
      }
    ]


  },
 
]);

createRoot(document.getElementById('root')).render(
      <div className="">
            <React.StrictMode>
                <AuthProvider>
                <RouterProvider router={router} />
                </AuthProvider>
            </React.StrictMode>
      </div>
)
