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
         state.cart = state.cart.filter((item) => item.id !== payload.id)
         state.total = state.total - payload.price
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
      }
   }
});

export const { cartAddItem, cartDeleteItem, cartAddCount, cartRestCount } = cartSlice.actions

export default cartSlice.reducer