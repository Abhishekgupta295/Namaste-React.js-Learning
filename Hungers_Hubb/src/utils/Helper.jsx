export function FilterData (searchTxt, restaurants){
      const OurFilteredData =  restaurants.filter((restaurant) => 
        restaurant?.info?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
       );
       return OurFilteredData;
}