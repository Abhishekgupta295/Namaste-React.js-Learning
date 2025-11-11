import React from 'react'
import './App.css'
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import ProfileClass from './components/ProfileClass';
import { createBrowserRouter, Outlet } from 'react-router-dom';

 const AppLayout = () =>
{
  return(  
    <>
        <Header />
         <Outlet />
        <Footer />  
    </>   
  )
}

const appRouter = createBrowserRouter(
    [
      {
        path : "/",
        element : <AppLayout />,
        errorElement : <Error/>,
        children : [

                        {
                          path : "/",
                          element : <Body />,

                        },
                        {
                          path : "/About",
                          element : <About />,
                          children : [
                            {
                              path : "profile", // nested route path needs no leading slash => parentPath/{path} -> localhost:1234/About/profile
                              element : <div>
                                            {/* <Profile name = {"Abhi Function"}/>  */}
                                            <ProfileClass name = {"Abhi Class Child1"}/>
                                            
                                        </div>
                            }
                          ]

                        },
                        {
                          path : "/Contact",
                          element : <Contact />,

                        },
                        {
                          path : "/Restaurant/:id",
                          element : <RestaurantMenu/>,

                        },
                   ]

      },
      
    ]
   )


export  {AppLayout, appRouter};
