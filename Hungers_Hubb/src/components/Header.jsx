import { useContext, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
import Cart from './Cart';


const title = (
  <a href='/'>
    <img
      className='h-28 p-2'
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
  const isOnline = useOnline();

  const cartitems = useSelector((AppStore) => AppStore.cart.items) // here we are using useSelector hook to get the cart items
  //  from the store, we are passing a callback function to useSelector which takes the entire store state as an argument 
  // and returns the specific part of the state that we want to access, in this case we are accessing the cart items from the
  //  cart slice of the store.
  console.log("cart items is : ", cartitems);

  const userinfo = useContext(UserContext);
  console.log("userinfo  is : ",userinfo);

  
  return(
    <div className='flex justify-between bg-pink-200 shadow-xl sm:bg-blue-200 md:bg-yellow-200 lg:bg-green-200'>
      {title}

      <div className='nav-items  '>
           <ul className='flex '>
               <li className='px-2'><Link to={'/'}>Home</Link></li>
               <li className='px-2'><Link to={'/Contact'}>Contact US</Link></li>
               <li className='px-2'><Link to={'/About'}>About</Link></li>
               <li className='px-2'><Link to={'/instamart'}>Instamart</Link></li>
               <li className='px-2'><Link to={'/Cart'}>Cart - {cartitems.length} items</Link></li>
           </ul>
      </div>
      <p className='m-2 p-2 font-bold text-red-600'>{userinfo.user.name}</p>
      <div>
         {
           isOnline ? " 🟢 Online" : " 🔴 Offline"
         }
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