import React from 'react';
import { IMG_URL_CDN } from './Config';


const RestaurantCard = ({name, cuisines, lastMileTravelString, cloudinaryImageId}) => {

  
  return(
    <div className='w-56 m-2 p-2 shadow-2xl bg-pink-300'>
       <img src={ IMG_URL_CDN + `${cloudinaryImageId}`}
  alt='img'/>
       <h2 className='font-bold text-xl'>{name}</h2>
       <h3>{cuisines?.join(",")}</h3>
       <h3>{lastMileTravelString} minutes</h3>
    </div>
  )
}

export default RestaurantCard;