import React from 'react'
import './App.css'
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
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
