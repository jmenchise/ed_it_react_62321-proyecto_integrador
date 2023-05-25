import { types } from "../types/cartTypes"

const initialState = []

export default (state = initialState, { type, payload }) => {
   switch (type) {

      case types.ADD_ITEM:
         return state.push({ id: payload, count: 1 })

      case types.DELETE_ITEM:
         return state.filter((item) => item.id != payload)

      case types.ADD_COUNT:
         return state.map(item => {
            if (item.id === payload) {
               return {
                  id: payload,
                  count: item.count + 1
               }
            } else {
               return item
            }
         })

      case types.REST_COUNT:
         return state.map(item => {
            if (item.id === payload) {
               return {
                  id: payload,
                  count: item.count - 1
               }
            } else {
               return item
            }
         })

      default:
         return state
   }
}
