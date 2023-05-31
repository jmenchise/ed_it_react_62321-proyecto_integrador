import React from 'react'


const ItemDetails = (props) => {
   const { product, onClick } = props;
   const {
      id,
      sizes,
      colors,
      price,
      img,
      title,
      description
   } = product;

   return (
      <div className='card mt-4 mx-auto' style={{ width: '80%' }}>
         <img src={img} className='card-img-top' alt='Detailimg' />
         <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
         </div>
         <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
               Colores: {colors.join(' - ')}
            </li>
            <li className='list-group-item'>
               Talles: {sizes.join(' - ')}
            </li>
            <li className='list-group-item'>Precio: ${price}</li>
         </ul>
         <div className='card-body'>
            <button
               onClick={() => { onClick(product) }}
               className='btn'
            >
               Lo Quiero!
            </button>
         </div>
      </div>
   )
}

export default ItemDetails