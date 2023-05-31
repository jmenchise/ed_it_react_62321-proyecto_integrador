import React, { useContext } from 'react'
import NavBar from '../components/NavBar/NavBar'
import BackBtn from '../shared/BackBtn'
import ItemDetails from '../components/ItemDetails/ItemDetails'
import { useParams } from 'react-router-dom'
import { Productscontext } from '../data/context/ProductsProvider'
import useCart from '../hooks/useCart'
import { itemExistInArr } from '../helpers'

const Details = () => {
    const { id } = useParams();
    const { products } = useContext(Productscontext);
    const product = products.find(product => product.id === Number(id));
    const { addItemtoCart } = useCart();

    return (
        <div className='container container-fluid'>
            {<NavBar />}
            {<BackBtn />}
            {itemExistInArr(Number(id), products) ?
                <ItemDetails
                    product={product}
                    onClick={addItemtoCart}
                />
            :
            <>
                <h3>Producto no encontrado</h3>
            </>

            }
        </div>
    )
}

export default Details