import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {

   const { title } = props;

   return (
      <div className='container border-bottom border-2'>
         <nav className='navbar navbar-expand-lg navbar-light'>
            <div className='container-fluid d-flex flex-column'>
               <h1>MioMio</h1>
               {title ?
                  <h3>{title}</h3>
                  :
                  <Link to='/cart' className='btn btn-outline-dark rounded-pill'>Carrito</Link>
               }
            </div>
         </nav>
      </div>
   )
}

export default NavBar