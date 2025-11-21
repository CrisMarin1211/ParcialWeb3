
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';


type CartItem = {
  id: string; 
  name: string;
  price: number;
  quantity: number;
};


type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
        state.items = [action.payload];
      
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit';

// type CartItem = {
//   id: string; 
//   name: string;
//   price: number;
//   quantity: number;
// };

// type CartState = {
//   items: CartItem[];
// };

// const initialState: CartState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: { items: [] },
//   reducers: {
//     addToCart: (state, action: PayloadAction<CartItem>) => {
//       state.items = [action.payload];
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter(p => p.id !== action.payload);
//     },
//     clearCart: (state) => {
//       state.items = [];
//     }
//   }
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;
