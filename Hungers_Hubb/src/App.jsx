import React from 'react'
import './App.css'
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
//import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import ProfileClass from './components/ProfileClass';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { lazy,Suspense } from 'react';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';
import { useState } from 'react';
import { Provider } from 'react-redux';
import Cart from './components/Cart';

import AppStore from './utils/AppStore';
//import Instamart from './components/Instamart';

// dynamic import for code splitting and lazy loading of Instamart component
const Instamart = lazy(() => import('./components/Instamart'));
const About = lazy(() => import('./components/About')); 
//this is a promise which resolves to a module with default export as Instamart component
// Never lazy load a compoent inside other component body or inside useEffect or any other function body, 
// it should be at the top level of the file only, otherwise it will not work and will throw error "Invalid hook call.
//  Hooks can only be called inside of the body of a function component." because lazy is a hook and it can only be called 
// at the top level of the file, if we call it inside other function body then it will throw error because it will violate 
// the rules of hooks.




 const AppLayout = () =>
{

  const [user, setUser] = useState({
    name : "Abhishek Kumar Singh",
    email : "RwV0T@example.com"
  })


  return(  
    <> 
      <Provider store = {AppStore}>
          <UserContext.Provider value = {{user : user, setUser : setUser}} >
            <Header />
            <Outlet />
            <Footer />  
          </UserContext.Provider>
      </Provider>
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
                          element : <Body  />,

                        },
                        {
                          path : "/About",
                          element : <Suspense fallback = {<h1>Loading About...</h1>}><About/></Suspense>,
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
                        {
                          path : "/instamart",
                          element : <suspense fallback = {<h1>Loading Instamart...</h1>}><Instamart/></suspense>, // Instamart component will be loaded only when user
                          //  navigates to /instamart route

                        },
                         {
                          path : "/Cart",
                          element : <Cart />,

                        },
                   ]

      },
      
    ]
   )


export  {AppLayout, appRouter};
