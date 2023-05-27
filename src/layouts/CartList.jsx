import React from 'react'
import CartItem from '../Cart/CartItem'

const CartList = (props) => {

   const { cart } = props;

   return (
      <div>
         {cart?.map(cartItem => (
            <CartItem
               key={cartItem.id}
               {...cartItem}
            />
         ))}
      </div>
   )
}

export default CartList