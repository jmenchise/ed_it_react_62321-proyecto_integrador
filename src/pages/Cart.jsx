import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import CartList from '../layouts/CartList'
import { useSelector } from 'react-redux'

const Cart = () => {
   const { cart, total } = useSelector(state => state.cart);

   return (
      <div className="container container-fluid">
         {<NavBar title={'Tu Compra'} />}
         {cart.length > 0 ?
            <>
               <CartList cart={cart} />
               <div className="container contaner-fluid d-flex flex-column">
                  <Link to='/' className='btn mt-5 border-dark'> SEGUIR COMPRANDO</Link>
                  <button className="btn p-5">Pagar ${total}</button>
               </div>
            </>
            :
            <>
               <h3>El Carrito está vacío</h3>
               <div className="container contaner-fluid d-flex flex-column">
                  <Link to='/' className='btn mt-5 border-dark'> Volver Al Inicio</Link>
               </div>
            </>
         }
      </div>
   )
}

export default Cart