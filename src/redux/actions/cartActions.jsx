
import { types } from "../types/cartTypes";

const cartAddItem = obj => ({
   type: types.ADD_ITEM,
   payload: obj
})

const cartDeleteItem = (id, price) => ({
   type: types.DELETE_ITEM,
   payload: { id, price }
})

const cartAddCount = (id, price) => ({
   type: types.ADD_COUNT,
   payload: { id, price }
})

const cartRestCount = (id, price) => ({
   type: types.REST_COUNT,
   payload: { id, price }
})



export {
   cartAddItem,
   cartDeleteItem,
   cartAddCount,
   cartRestCount
}