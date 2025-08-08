import { restaurantList } from "./Config";
import RestaurantCard from "./RestaurantCard";
import React, {  useState } from 'react';


function FilterData (searchTxt, restaurants){
      const OurFilteredData =  restaurants.filter((restaurant) => 
        restaurant.data.name.includes(searchTxt)
       );
       return OurFilteredData;
}

const Body = () => {

  const [searchTxt, setSearchTxt] = useState("Enter your search");
  const [restaurants, setRestaurants] = useState(restaurantList)
  return (
    <>
      <div className="search-container">
         <input 
            type="text"
            placeholder="Search for restaurants"
            className="search-input bg-yellow-100"
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)} 
         />
         <button 
           className="search-button  bg-gray-300 rounded-md m-2 p-2"
           onClick={() => {
            const data = FilterData(searchTxt, restaurants);
            setRestaurants(data);
           }}
         >Search </button>
      </div>
    

      <div className='restaurant-list'>
        {
          restaurants.map((restaurant) => {
            return(
            <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
          )
          })
        }
      </div> 

    </> 
  )
}

export default Body;