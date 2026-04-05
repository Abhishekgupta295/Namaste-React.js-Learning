import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";


const AppStore = configureStore({
     reducer: {
            // here we will add all the reducers from our slice files, we can have multiple slices for different features 
            // of our app, and we can combine their reducers here in the store.
            cart : CartSlice ,
     }
})

export default AppStore;