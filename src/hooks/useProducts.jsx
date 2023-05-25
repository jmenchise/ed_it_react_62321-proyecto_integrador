import { useEffect, useState } from 'react'
import { axiosClient } from '../axios';


const useProducts = () => {

   const [products, setProducts] = useState([]);

   useEffect(() => {
      getAllProducts();
   }, [])



   const getAllProducts = async () => {
      try {
         const response = await axiosClient.get('/products');
         console.log('response:', response.data);
         setProducts(response.data);
      } catch (error) {
         console.log('Error al conectar con la url solicitada. Detalle: ' + error.message);
      }
   }

   return {
      products,
   }
}

export default useProducts