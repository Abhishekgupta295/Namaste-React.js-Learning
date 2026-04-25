import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'



const Header = () => {

    const dispatch = useDispatch();

    const handleToggleMenu = () => {
        dispatch(toggleMenu());
    }
  return (
    <div className='grid grid-flow-col m-5 p-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img className='h-12 cursor-pointer'
             alt='ham-logo' 
             src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png' 
             onClick={()=> handleToggleMenu()}
             />
            <img className='h-12 mx-2' alt='youtube-logo' src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-logo-icon.png' />
        </div>

        <div className='col-span-10 px-10'>
            <input type='text' placeholder='Search' className='w-1/2 rounded-l-full border border-gray-400 p-2' />
            <button className=' bg-gray-500 rounded-r-full p-2 text-white'>Search</button>
        </div>

        <div className='col-span-1'>
            <img className='h-12 rounded-md' alt='user-logo' src='data:image/png;base64,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' />
        </div>
    </div>
  )
}

export default Header