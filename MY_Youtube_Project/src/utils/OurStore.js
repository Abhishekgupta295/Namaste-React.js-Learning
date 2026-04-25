import { configureStore } from '@reduxjs/toolkit';
import AppSlice from './AppSlice';

const OurStore = configureStore({
   
    reducer : {
        app : AppSlice,
    },
});

export default OurStore;