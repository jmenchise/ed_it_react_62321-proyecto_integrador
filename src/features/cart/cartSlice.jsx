import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   cart: [],
   total: 0
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      cartAddItem: (state, { payload }) => {
         state.cart.push({ ...payload, count: 1 })
         state.total = state.total + payload.price
      },

      cartDeleteItem: (state, { payload }) => {
         let { id, count, price } = payload;
         state.cart = state.cart.filter((item) => item.id !== id)
         if (count) {
            state.total = state.total - (count * price)
            return
         }
         state.total = state.total - price
      },

      cartAddCount: (state, { payload }) => {
         state.cart = state.cart.map(item => {
            if (item.id === payload.id) {
               return { ...item, count: item.count + 1 }
            }
            return { ...item }
         })
         state.total = state.total + payload.price
      },

      cartRestCount: (state, { payload }) => {
         state.cart = state.cart.map((item) => {
            if (item.id === payload.id) {
               return { ...item, count: item.count - 1 }
            }
            return { ...item }
         })
         state.total = state.total - payload.price
      },

      cartDeleteAll: (state) => {
         state.cart = [];
         state.total = 0;
      }
   }
});

export const { cartAddItem, cartDeleteItem, cartAddCount, cartRestCount, cartDeleteAll } = cartSlice.actions

export default cartSlice.reducer