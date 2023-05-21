import React from 'react'
import { Link } from 'react-router-dom'

const BackBtn = () => {
   return (
      <div className='container'>
         <Link to='/' className='btn m-5'>Volver</Link>
      </div>
   )
}

export default BackBtn