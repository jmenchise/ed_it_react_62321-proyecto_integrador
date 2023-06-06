import { types } from "../types/cartTypes"

const initialState = {
   cart: [],
   total: ''
}

export default (state = initialState, { type, payload }) => {
   switch (type) {
      case types.ADD_ITEM:
         state.cart.push({ ...payload, count: 1 })
         return {
            ...state,
            total: Number(state.total) + payload.price
         }

      case types.DELETE_ITEM:
         return {
            ...state,
            cart: state.cart.filter((item) => item.id !== payload)
         }

      case types.ADD_COUNT:
         return {
            ...state,
            cart: state.cart.map(item => {
               if (item.id === payload.id) {
                  return { ...item, count: item.count + 1 }
               } else {
                  return item
               }
            }),
            total: Number(state.total) + payload.price
         }

      case types.REST_COUNT:
         return {
            ...state,
            cart: state.cart.map(item => {
               if (item.id === payload.id) {
                  return { ...item, count: item.count - 1 }
               } else {
                  return item
               }
            }),
            total: Number(state.total) - payload.price
         }

      default:
         return state;
   }
}
