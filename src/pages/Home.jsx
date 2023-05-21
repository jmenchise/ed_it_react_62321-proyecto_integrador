import React, { useContext } from 'react'
import NavBar from '../components/NavBar/NavBar'
import SearchForm from '../components/SearchForm/SearchForm'
import ItemList from '../layouts/ItemList'
import { Productscontext } from '../data/ProductsProvider'

const Home = () => {


    const { products } = useContext(Productscontext);

    return (
        <div className='container container-fluid'>
            {<NavBar />}
            <main>
                <div className='cointainer'>
                    {<SearchForm />}
                    {<ItemList items={products} />}
                </div>
            </main>
        </div>
    )
}

export default Home