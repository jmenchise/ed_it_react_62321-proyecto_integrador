import React from 'react'
import { useSearchParams } from 'react-router-dom'

const useSearchForm = () => {

   const [searchParams, setSearchParams] = useSearchParams();

   const queryResult = searchParams.get('q');
   
   return {
      queryResult
   }
}

export default useSearchForm