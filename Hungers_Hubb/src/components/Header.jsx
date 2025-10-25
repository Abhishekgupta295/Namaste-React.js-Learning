import { useState } from 'react';
import React from 'react';


const title = (
  <a href='/'>
    <img
      className='logo'
      alt='Hungers_Hubb_LOGO' 
      src='./public/Hungers_Hubb_LOGO.png'
    />
  </a>
)


// const isUserLoggedIn = () => {
//   return true;
// }



const Header = () => {

  const [isloggedIn, setIsLoggedIn] = useState(true); 
  
  return(
    <div className='header'>
      {title}

      <div className='nav-items  '>
           <ul>
               <li>Home</li>
               <li>Contact US</li>
               <li>About</li>
               <li>Cart</li>
           </ul>
      </div>
      <div>
        {
          isloggedIn ? 
          (<button onClick = {() => setIsLoggedIn(false) } className='login-btn  bg-gray-300 rounded-md m-2 p-2'>Log Out</button>) : 
          (<button onClick = {() => setIsLoggedIn(true) } className='signup-btn  bg-gray-300 rounded-md m-2 p-2'>Login </button>)
         }
        
      </div>
      
    </div>
  );
}

export default Header;