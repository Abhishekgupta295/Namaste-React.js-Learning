import { useState, useEffect } from "react";

const useRestaurant = ( ) => {

    const [restaurant, setRestaurant] =  useState(null);
   
     useEffect(
        ( )=> {
            getRestaurantInfo();
        },[] 
    );

    //fetching data using Namaste React dummyswiggy api json data

            async function getRestaurantInfo() 
            {
                const data = await fetch("/dummy_swiggyNR.json");

                const json = await data.json();
                console.log("Fetching JSON data",json);
                const newData = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                const categories = newData.map((card) => card?.card?.card?.title);
                console.log("Categories:", categories);
                setRestaurant(categories)
                const menuItemsv1 = newData.map((card) => (card?.card?.card?.itemCards.map((item) => (item?.card?.info?.name))));
                const realmenuItems = menuItemsv1.flat();
               
                console.log("Menu Items:", menuItemsv1);
                console.log("Menu Items reals:", realmenuItems);
                setRestaurant(realmenuItems);              
            }
   

// fetching data using actuall siwggy api json data

//     async function getRestaurantInfo() 
//     {
//         console.log("Fetching JSON...");
//         try 
//         {
//             console.log("Inside try block");
//             console.log("Fetching JSON from URL...");
//             const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6488931&lng=77.13593279999999&restaurantId=483435&catalog_qa=undefined&submitAction=ENTER');
            
//             console.log("Response status:", response.status);
//             console.log("Response ok:", response.ok);

//             const text = await response.text(); // 👈 pehle text read karo
//             console.log("Raw response:", text);

//             if (!text) {
//             throw new Error("Empty response received");
//             }

//             const json = JSON.parse(text); // 👈 manually parse
//             console.log("Parsed JSON:", json);
//             // const json = await response.json();
//             // console.log("Fetched JSON :", json);

            

//             const restaurantData = json?.data?.cards;
//             console.log("Restaurant data:", restaurantData);

            

//             setRestaurant(restaurantData[2]?.card?.card?.info)
            
            

//             const allcategories = restaurantData[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
//             console.log("All Categories:", allcategories);
//             setRestaurant(allcategories);

//             const menuItems = allcategories.map((card) => (card?.card?.card?.title));
//             console.log("Menu Items:", menuItems);
    
//         } 
//         catch (error) 
//         {
//         console.error("Error fetching JSON:", error);
//         }
//    }

            
   return restaurant;

}

export default useRestaurant;