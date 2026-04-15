// import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {IMG_URL_CDN} from "./Config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";


const RestaurantMenu = () => {

    const params = useParams(); 
    console.log(params);
    console.log("hello");

    const restaurant = useRestaurant(params.id);
    const dispatch = useDispatch();

    // const handleclick = () => {
    //     dispatch(addItem("Grapes"));
    //  }

    const handleAddFood = (item) => {
        dispatch(addItem(item));
     }
    
    
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
                        <ul data-testid="menu-items" key={index}> 
                            <li key={index}>
                                {item } - {<button className="m-2 p-2 bg-green-300" data-testid="add-button" onClick={() => handleAddFood(item)}>ADD</button>}
                            </li>
                        </ul>
                    ))
                 }
                 {
                    // <button className="m-2 p-2 bg-green-300" onClick={() => handleclick()}>
                    //     Add to Cart
                    // </button>
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

