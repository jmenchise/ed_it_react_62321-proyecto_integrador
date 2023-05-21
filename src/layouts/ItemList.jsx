import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card/Card'

const ItemList = () => {
   return (
      <section className='card-section'>
         {<Card/>}
         <Link className='card bg-dark text-white mb-4'>
            <img src='/Fotos/Calzado/Calzado.jpg' className='card-img' alt='card-img' />
            <div className='card-img-overlay'>
               <h5 className='card-title'>Card title</h5>
               <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
               <p className='card-text'>Last updated 3 mins ago</p>
            </div>
         </Link>
         <Link className='card bg-dark text-white mb-4'>
            <img src='/Fotos/Jeans/jeans.jpg' className='card-img' alt='card-img' />
            <div className='card-img-overlay'>
               <h5 className='card-title'>Card title</h5>
               <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
               <p className='card-text'>Last updated 3 mins ago</p>
            </div>
         </Link>
      </section>
   )
}

export default ItemList