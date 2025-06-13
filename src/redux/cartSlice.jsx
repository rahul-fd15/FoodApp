import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find((i) => i._id === action.payload);
      if (item) {
        item.quantity = (item.quantity || 1) + 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.find((i) => i._id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeFromCart:(state,action)=>{
      return state.filter((item)=>item._id !==action.payload)
    }
  },
});

export const { addToCart, incrementQuantity, decrementQuantity,removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
