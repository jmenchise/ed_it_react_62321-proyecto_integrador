import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import SearchForm from '../components/SearchForm/SearchForm'
import ItemList from '../layouts/ItemList'

const Home = () => {
    return (
        <div className='container container-fluid'>
                {<NavBar/>}
            <main>
                <div className='cointainer'>
                    {<SearchForm/>}
                    {<ItemList/>}
                </div>
            </main>
        </div>
    )
}

export default Home