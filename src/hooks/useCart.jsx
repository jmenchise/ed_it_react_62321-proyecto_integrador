import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { cartAddCount, cartAddItem, cartDeleteItem, cartRestCount, cartDeleteAll } from '../features/cart/cartSlice'
import { itemExistInArr } from '../helpers';

const useCart = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { cart } = useSelector(state => state.cart);

   const addItemToCart = obj => {
      itemExistInArr(obj.id, cart) ? addCount(obj) : dispatch(cartAddItem(obj));
      navigate('/cart');
   }
   const addCount = obj => dispatch(cartAddCount(obj))
   const restCount = (obj) => {
      const { id, count, price } = obj;
      count === 1 ? dispatch(cartDeleteItem({ id, price })) : dispatch(cartRestCount({ id, price }));
   }
   const removeItemFromCart = obj => { dispatch(cartDeleteItem(obj)) }
   const emtpyCart = () => dispatch(cartDeleteAll())

   return {
      addItemToCart,
      addCount,
      restCount,
      removeItemFromCart,
      emtpyCart
   }
}

export default useCart