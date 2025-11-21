import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../redux/productSlice';
import authReducer from '../redux/userAuth';
import cartReducer from '../redux/cartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    cart: cartReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;