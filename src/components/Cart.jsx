import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
   return (
      <div className="container container-fluid">
         <div className='container border-bottom border-2'>
            <nav className='navbar navbar-expand-lg navbar-light'>
               <div className='container-fluid d-flex flex-column'>
                  <h1>MioMio</h1>
                  <h3>Tu Compra</h3>
               </div>
            </nav>
         </div>
         <div className="card mt-5 text-start w-75 m-auto border-dark pt-3" style={{ borderRadius: '2em' }}>
            <h5 className="card-header bg-transparent border-0">Lorem Ipsum</h5>
            <div className="card-body">
               <p className="card-text">Talle: S | Color: Negro </p>
               <div className='d-flex justify-content-between align-items-center'>
                  <p className="card-text">$1500</p>
                  <div className='d-flex justify-content-around w-25 border rounded-pill' style={{ backgroundColor: '#E6E6E6' }}>
                     <button className="btn p-0 m-0">-</button>
                     <span>1</span>
                     <button className="btn p-0 m-0">+</button>
                  </div>
               </div>
            </div>
         </div>
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
         <div className="container contaner-fluid d-flex flex-column">
            <Link to='/' className='btn mt-5 border-dark'> SEGUIR COMPRANDO</Link>
            <button className="btn p-5">Pagar $2500</button>
         </div>
      </div>
   )
}

export default Cart