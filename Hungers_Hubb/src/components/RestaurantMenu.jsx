import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {IMG_URL_CDN} from "./Config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";


const RestaurantMenu = () => {

    const params = useParams(); 
    console.log(params);
    console.log("hello");

    const restaurant = useRestaurant(params.id);
    
    
    // const [restaurantdetails, setRestaurantDetails] = useState({}); 
  
    return (!restaurant) ? <Shimmer />: (
        <div className="flex gap-x-40">


           
            <div>

                 {
                //showimg restaurant details from actual swiggy api json data
                 }
                    {
                        /* <img src={IMG_URL_CDN + restaurantdetails?.cloudinaryImageId}/>
                        <h1>ID : {restaurantdetails.id}</h1>
                        <h1>Name : {restaurantdetails.name}</h1>
                        <h2>City : {restaurantdetails.city}</h2>
                        <h2>CostForTwoe : {restaurantdetails.costForTwoMessage}</h2>
                        <h2>AvgRating : {restaurantdetails.avgRating}</h2> */
                    }


            </div>
            
            
            <h2>
                {"OUR Specials Items :- " }

                 {
                    //below using  Namaste React dummysiwggy api json data
                 }

                 {
                    restaurant.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))
                 }

                 {
                    //below using  actual siwggy api json data
                 }

                 {/* {
                    restaurant.map((item, index) => (
                        <li key={index}>
                            {item?.card?.card?.title}
                        </li>
                    ))
                 } */}
            </h2>
            
        </div>
    )
}

export default RestaurantMenu;