import React, { createContext } from 'react'
import useProducts from '../../hooks/useProducts';


export const Productscontext = createContext();


const ProductsProvider = ({ children }) => {

   const { products } = useProducts();

   return (
      <Productscontext.Provider value={{
         products
      }}>
         {children}
      </Productscontext.Provider>
   )
}

export default ProductsProvider