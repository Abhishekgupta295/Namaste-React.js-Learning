import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/CartSlice';

const Cart = () => {
 
    // optimize way to subscibe to the store, since we are only subscribing to the cart items, as we need that only
    const cartitems = useSelector((AppStore) => AppStore.cart.items);  
    console.log("cart items is (inside cart): ", cartitems);
    // not a good way to subscribe to the store, since we are subscribing to the entire store, and we will get re-rendered
    //  whenever any part of the store changes, even if we are not using that part of the store in our component, 
    // which will lead to unnecessary re-renders and performance issues.

    // const store = useSelector((store) => store)
    const dispatch = useDispatch();
    const handleClearCart = () => {
        // here we can dispatch an action to clear the cart items from the store, but since we are not using any dispatch function here,
        dispatch(clearCart());
    }
        
    return(
    <div>
        <h1 className='font-bold text-3xl'>Cart Items  - {cartitems.length}</h1>
        <h1> Added items by YOU !! </h1>
        <div>
            
            {
                <ul>
                    {cartitems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}

                </ul>
                
            }
        </div>
        <button className='bg-red-500 m-2 p-2 text-white' onClick={() => {handleClearCart()}}>ClearCart</button>
    </div>
        )
  
}

export default Cart