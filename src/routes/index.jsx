import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Details from '../pages/Details'
import Cart from '../pages/Cart'
import ProductsProvider from '../data/context/ProductsProvider'


const index = () => {
   return (
      <ProductsProvider>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/details/:id' element={<Details />} />
               <Route path='/cart' element={<Cart />} />
            </Routes>
         </BrowserRouter>
      </ProductsProvider>
   )
}

export default index