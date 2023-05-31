import React from 'react'
import CartItem from '../components/Cart/CartItem'

const CartList = (props) => {

   const { cart } = props;

   return (
      <div>
         {cart?.map(item => (
            <CartItem
               key={item.id}
               {...item}
            />
         ))}
      </div>
   )
}

export default CartList