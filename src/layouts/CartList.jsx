import React from 'react'
import CartItem from '../Cart/CartItem'

const CartList = (props) => {

   // const { cart } = props;
   
   return (
      <div>
         {<CartItem />}
         <div className="card mt-5 text-start w-75 m-auto border-dark pt-3" style={{ borderRadius: '2em' }}>
            <h5 className="card-header bg-transparent border-0">Lorem Ipsum</h5>
            <div className="card-body">
               <p className="card-text">Talle: S | Color: Negro </p>
               <div className='d-flex justify-content-between align-items-center'>
                  <p className="card-text">$500</p>
                  <div className='d-flex justify-content-around w-25 border rounded-pill' style={{ backgroundColor: '#E6E6E6' }}>
                     <button className="btn p-0 m-0">-</button>
                     <span>2</span>
                     <button className="btn p-0 m-0">+</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CartList