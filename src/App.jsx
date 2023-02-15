import React from "react" ;

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Order from "./pages/order/Order";
import MyGigs from "./pages/mygigs/MyGigs";
import Add from "./pages/add/Add";
import Messages from "./pages/messges/Messages";
import Message from "./pages/message/Message";

function App() {

  const Layout =()=>{
    return(
      <>
      <Navbar />
      <Outlet />
      <Footer />
      </>
    )
  }
  const router= createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path: "/login",
          element: <Login />
        },


        {
          path: "/gigs",
          element: <Gigs />
        },
        {
          path: "/gig/:id",
          element: <Gig />
        },

        {
          path: "/orders",
          element: <Order />
        },
        {
          path: "/mygigs",
          element: <MyGigs />
        },
        {
          path: "/add",
          element: <Add />
        },
        {
          path: "/messages",
          element: <Messages />
        },
        {
          path: "/message/:id",
          element: <Message />
        },
        {
          path: "/mygig",
          element: <MyGigs />
        },
      ]
    },

   
  ])

 
  return (
    <>

      <RouterProvider  router={router} />
     
    </>
  ) 
}

export default App
