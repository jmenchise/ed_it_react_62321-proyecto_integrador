
import { types } from "../types/cartTypes";

const cartAddItem = obj => ({
   type: types.ADD_ITEM,
   payload: obj
})

const cartDeleteItem = id => ({
   type: types.DELETE_ITEM,
   payload: id
})

const cartAddCount = id => ({
   type: types.ADD_COUNT,
   payload: id
})

const cartRestCount = id => ({
   type: types.REST_COUNT,
   payload: id
})

export {
   cartAddItem,
   cartDeleteItem,
   cartAddCount,
   cartRestCount
}