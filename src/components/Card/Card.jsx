import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {

   const { id, img, title, description } = props;

   return (
      <Link to={`/details/${id}`} className='card bg-dark text-white mb-4'>
         <img src={img} className='card-img' alt='card-img' />
         <div className='card-img-overlay'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
         </div>
      </Link>
   )
}

export default Card