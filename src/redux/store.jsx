import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
// import productReducer from './slices/productSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
   
  }
});