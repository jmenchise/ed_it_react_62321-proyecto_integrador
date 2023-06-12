import React, { createContext } from 'react'
import useProducts from '../../hooks/useProducts';


export const ProductsContext = createContext();


const ProductsProvider = ({ children }) => {

   const { products } = useProducts();

   return (
      <ProductsContext.Provider value={{
         products
      }}>
         {children}
      </ProductsContext.Provider>
   )
}

export default ProductsProvider