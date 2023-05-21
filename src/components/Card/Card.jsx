import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {

   const { id, img, title, description, sizes, colors, price } = props;

   return (
      <Link to='/details/1' className='card bg-dark text-white mb-4'>
         <img src='/Fotos/Anteojos/Anteojos.jpg' className='card-img' alt='card-img' />
         <div className='card-img-overlay'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className='card-text'>Last updated 3 mins ago</p>
         </div>
      </Link>
   )
}

export default Card