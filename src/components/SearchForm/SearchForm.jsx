import React from 'react'

const SearchForm = () => {
   return (
      <div className='form-floating my-4'>
         <input type='text' className='form-control' id='floatingInput' />
         <label htmlFor='floatingInput'>Tu Busqueda...</label>{/**FIXME: centrar el label */}
      </div>
   )
}

export default SearchForm