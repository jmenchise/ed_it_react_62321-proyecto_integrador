import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import BackBtn from '../shared/BackBtn'
import ItemDetails from '../components/ItemDetails/ItemDetails'

const Details = () => {
    
    return (
        <div className='container container-fluid'>
            {<NavBar />}
            {<BackBtn />}
            {<ItemDetails/>}
        </div>
    )
}

export default Details