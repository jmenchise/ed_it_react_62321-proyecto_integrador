import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Details from '../pages/Details'
import Cart from '../components/Cart'


const index = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/cart' element={<Cart />} />
         </Routes>
      </BrowserRouter>
   )
}

export default index