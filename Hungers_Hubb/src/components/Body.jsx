// import { restaurantList } from "./Config";
import RestaurantCard from "./RestaurantCard";
import React, {  useState , useEffect, } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { FilterData } from "../utils/Helper";




const Body = () => {

  const [searchTxt, setSearchTxt] = useState("Enter your search");
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(()=> {
    getRestaurants();
  },[] );

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.6855342&lng=77.2042274&carousel=true&third_party_vendor=1");
    const json = await data.json(); 
    console.log(json);
    const apiRestaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    console.log(apiRestaurants);
    setAllRestaurants(apiRestaurants);
    setFilteredRestaurants(apiRestaurants);
    
  }

  
   console.log("Body Rendered");

   if(!allrestaurants) return null;

   


  return (allrestaurants.length === 0 ) ? (<Shimmer/>) : 
    
  (
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
            const data = FilterData(searchTxt, allrestaurants);
            setFilteredRestaurants(data);
            console.log("Clicked", searchTxt);
           }}
         >Search </button>
      </div>
    

      <div className='restaurant-list'>
        
          
           {
            filteredRestaurants.map((restaurant) => {
            return(
              <Link to = {`/Restaurant/${restaurant.info.id}`}   key={restaurant?.info?.id || Math.random()}>
                <RestaurantCard {...(restaurant.info || {})} />
              </Link>
            
            )})
          }

        
      </div> 

    </> 
  )  
 
}

export default Body;