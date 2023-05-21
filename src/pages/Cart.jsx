import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import CartList from '../layouts/CartList'

const Cart = () => {
   return (
      <div className="container container-fluid">
         {<NavBar title={'Tu Compra'} />}
         {<CartList/>}
         <div className="container contaner-fluid d-flex flex-column">
            <Link to='/' className='btn mt-5 border-dark'> SEGUIR COMPRANDO</Link>
            <button className="btn p-5">Pagar $2500</button>
         </div>
      </div>
   )
}

export default Cart