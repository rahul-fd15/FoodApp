
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice.jsx';

// Load cart from localStorage 
const loadCart = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

// Save cart to localStorage
const saveCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

// Create the store with cart loaded from localStorage
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: loadCart(),
  },
});

// Whenever the cart changes, save it to localStorage
store.subscribe(() => {
  const cart = store.getState().cart;
  saveCart(cart);
});

export { store };