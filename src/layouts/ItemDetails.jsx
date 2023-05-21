import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetails = () => {
   return (
      <div className='card mt-4 mx-auto' style={{ width: '80%' }}>
         <img src='/Fotos/Anteojos/Anteojos.jpg' className='card-img-top' alt='Detailimg' />
         <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         </div>
         <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Colores: Rojo, Negro, Blanco</li>
            <li className='list-group-item'>Talles: S - M - L</li>
            <li className='list-group-item'>Precio: $1500</li>
         </ul>
         <div className='card-body'>
            <Link to='/cart' className='btn'>Lo Quiero!</Link>
         </div>
      </div>
   )
}

export default ItemDetails