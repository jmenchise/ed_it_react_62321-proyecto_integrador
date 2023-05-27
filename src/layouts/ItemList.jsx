import React from 'react'
import Card from '../components/Card/Card'

const ItemList = (props) => {

   const { items } = props;

   return (
      <section className='card-section'>
         {items?.map((item) => (
            <Card key={item.id}{...item} />
         ))}
      </section>
   )
}

export default ItemList