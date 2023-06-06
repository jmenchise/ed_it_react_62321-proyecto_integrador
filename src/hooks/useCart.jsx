import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { cartAddCount, cartAddItem, cartDeleteItem, cartRestCount } from '../redux/actions/cartActions';
import { itemExistInArr } from '../helpers';

const useCart = () => {

   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { cart } = useSelector(state => state.cart);
   

   const addItemtoCart = obj => {
      itemExistInArr(obj.id, cart) ? addCount(obj.id) : dispatch(cartAddItem(obj));
      navigate('/cart');
   }

   const addCount = (id, price) => dispatch(cartAddCount(id, price))

   const restCount = (id, count, price) => {
      count === 1 ? dispatch(cartDeleteItem(id)) : dispatch(cartRestCount(id, price));
   }

   return {
      addItemtoCart,
      addCount,
      restCount
   }
}

export default useCart