import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

    const toggleMenu = useSelector((store) => store.app.isMenuOpen);

    //
    if(!toggleMenu) return null;
  return (
    <div className='shadow-lg p-4 w-48 bg-red-200'>



        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movie</li>
        </ul>

        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movie</li>
        </ul>

        <h1 className='font-bold pt-5'>Watch Later </h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movie</li>
        </ul>

    </div>
  )
}

export default Sidebar