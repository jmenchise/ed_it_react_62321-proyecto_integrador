import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Details from '../pages/Details'
import Cart from '../pages/Cart'
import ProductsProvider from '../data/context/ProductsProvider'
import { Provider } from 'react-redux'
import { store } from '../app/store'

const index = () => {
   return (
      <Provider store={store}>
         <BrowserRouter>
            <ProductsProvider>
               <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/details/:id' element={<Details />} />
                  <Route path='/cart' element={<Cart />} />
               </Routes>
            </ProductsProvider>
         </BrowserRouter>
      </Provider>
   )
}

export default index