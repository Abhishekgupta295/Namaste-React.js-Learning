import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const params = useParams();

    const [restaurant, setRestaurant] =  useState({})

    useEffect(
        ( )=> {
            getRestaurantInfo();
        },[]);

    async function getRestaurantInfo() {
        const data = await fetch("http://localhost:5000/api/swiggy");

        const json = await data.json();
        console.log(json);
        // const newData = json.data.cards[2].card.card.info;
        const newData = json.data;
        setRestaurant(newData);
    }


  

    console.log(params);
    return (
        <div>
            <h1>Restaurant ID : {params.id}</h1>
            {/* <h1>{restaurant.name}</h1> */}
            <h2>working fine </h2>
            
        </div>
    )
}

export default RestaurantMenu;