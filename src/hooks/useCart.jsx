import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { cartAddCount, cartAddItem, cartDeleteItem, cartRestCount } from '../features/cart/cartSlice'
import { itemExistInArr } from '../helpers';

const useCart = () => {

   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { cart } = useSelector(state => state.cart);


   const addItemtoCart = obj => {
      itemExistInArr(obj.id, cart) ? addCount(obj) : dispatch(cartAddItem(obj));
      navigate('/cart');
   }

   const addCount = obj => { dispatch(cartAddCount(obj)) }

   const restCount = (obj) => {
      obj.count === 1 ? dispatch(cartDeleteItem(obj)) : dispatch(cartRestCount(obj));
   }

   return {
      addItemtoCart,
      addCount,
      restCount
   }
}

export default useCart