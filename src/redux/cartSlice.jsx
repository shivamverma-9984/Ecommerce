import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cartItems.find(
        (item) => item.Id === action.payload.Id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalAmount += action.payload.price; // Increment totalAmount // Increment totalAmount
      state.totalQuantity += 1; // Increment total quantity
    },
    removeFromCart: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.Id === action.payload
      );
      if (product) {
        state.totalAmount -= product.price * product.quantity; // Deduct total price of the removed item
        state.totalQuantity -= product.quantity; // Deduct total quantity
      }
      state.cartItems = state.cartItems.filter(
        (item) => item.Id !== action.payload
      );
        state.totalAmount -= product.price * product.quantity; // Deduct total price of the removed item
    },
    incrementQuantity: (state, action) => { 
        const product = state.cartItems.find(
            (item) => item.Id === action.payload
        );
        if (product) {
            product.quantity += 1;
            state.totalQuantity += 1;
            state.totalAmount += product.price; // Increment totalAmount
        }
    },
  
    decrementQuantity: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.Id === action.payload
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= product.price; // Decrement totalAmount
      } else if (product && product.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.Id !== action.payload
        );
        state.totalQuantity -= 1;
        state.totalAmount -= product.price; // Remove item's price from totalAmount
      }
    },
    // totalAmount :(state) => {
    //   state.totalAmount = state.cartItems.reduce(
    //     (acc, item) => acc + item.price * item.quantity,
    //     0
    //   );
    // },
    // totalQuantity :(state) => {
    //   state.totalQuantity = state.cartItems.reduce(
    //     (acc, item) => acc + item.quantity,
    //     0
    //   );
    // },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;