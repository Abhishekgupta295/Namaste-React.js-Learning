//  import { restaurantList } from "./Config";
import RestaurantCard from "./RestaurantCard";
import React, { useState , useEffect, useContext } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { FilterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";




const Body = () => {

  const {user, setUser} = useContext(UserContext);

  const [searchTxt, setSearchTxt] = useState("Enter your search");
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const userOnlineStatus = useOnline();

  console.log("Body Rendered");
  console.log("user in body is : ", user);

  
  useEffect(()=> {
    getRestaurants();
  },[] );

  if(!userOnlineStatus) 
  return <h1>Looks like you are offline!! Please check your internet connection</h1>

  

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
            className="search-input bg-yellow-100 focus:bg-blue-400"
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)} 
            data-testid="search-input"
         />
         <button 
           className="search-button hover:bg-blue-900 bg-gray-300 rounded-md m-2 p-2"
           onClick={() => {
            const data = FilterData(searchTxt, allrestaurants);
            setFilteredRestaurants(data);
            console.log("Clicked", searchTxt);
             
           }}
           data-testid="search-btn"
         >Search </button>
         <input 
            type="text"
            placeholder="Search for restaurants"
            className="search-input bg-yellow-100 focus:bg-blue-400"
            value={user.name}
            onChange={(e) => setUser({
                ...user,
              name : e.target.value,
            })} 
         />
         <input 
            type="text"
            placeholder="Search for restaurants"
            className="search-input bg-yellow-100 focus:bg-blue-400"
            value={user.email}
            onChange={(e) => setUser({
                ...user,
              email : e.target.value,
            })} 
         />
      </div>
    

      <div className='flex flex-wrap' data-testid="restaurant-list">
        
          
           {
            filteredRestaurants.map((restaurant) => {
            return(
              <Link to = {`/Restaurant/${restaurant.info.id}`}   key={restaurant?.info?.id || Math.random()}>
                <RestaurantCard {...(restaurant.info || {})} user = {user}/>
              </Link>
            
            )})
          }

        
      </div> 

    </> 
  )  
 
}

export default Body;