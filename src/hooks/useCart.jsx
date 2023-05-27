import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { cartAddCount, cartAddItem, cartDeleteItem, cartRestCount } from '../redux/actions/cartActions';

const useCart = () => {

   const navigate = useNavigate();
   const dispatch = useDispatch();

   const addItemtoCart = obj => {
      dispatch(cartAddItem(obj));
      navigate('/cart');
   }

   const addCount = id => dispatch(cartAddCount(id))

   const restCount = (id, count) => {
      count === 1 ? dispatch(cartDeleteItem(id)) : dispatch(cartRestCount(id));
   }

   return {
      addItemtoCart,
      addCount,
      restCount
   }
}

export default useCart