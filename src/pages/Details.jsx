import React, { useContext } from 'react'
import NavBar from '../components/NavBar/NavBar'
import BackBtn from '../shared/BackBtn'
import ItemDetails from '../components/ItemDetails/ItemDetails'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../data/context/ProductsProvider'
import useCart from '../hooks/useCart'


const Details = () => {
    const { id } = useParams();
    const { products } = useContext(ProductsContext);
    const product = products.find(product => product.id === Number(id));
    const { addItemToCart } = useCart();

    return (
        <div className='container container-fluid'>
            {<NavBar />}
            {<BackBtn />}
            {product ?
                <ItemDetails
                    product={product}
                    handleClick={addItemToCart}
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