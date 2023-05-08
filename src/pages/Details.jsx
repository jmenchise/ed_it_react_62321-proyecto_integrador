import React from 'react'

const Details = () => {
    return (
        <div className='container container-fluid'>
            <div className='container border-bottom border-2'>
                <nav className='navbar navbar-expand-lg navbar-light'>
                    <div className='container-fluid d-flex flex-column'>
                        <h1>MioMio</h1>
                        <button className='btn btn-outline-dark rounded-pill'>Carrito</button>
                    </div>
                </nav>
            </div>
            <div className='container'>
                <button className='btn m-5'>Volver</button>
            </div>
            <div className='card mt-4 mx-auto' style={{ width: '80%' }}>
                <img src='Fotos/Anteojos/Anteojos.jpg' className='card-img-top' alt='Detailimg' />
                <div className='card-body'>
                    <h5 className='card-title'>Card title</h5>
                    <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>Colores: Rojo, Negro, Blanco</li>
                    <li className='list-group-item'>Talles: S - M - L</li>
                    <li className='list-group-item'>Precio: $1500</li>
                </ul>
                <div className='card-body'>
                    <button className='btn'>Lo Quiero!</button>
                </div>
            </div>
        </div>
    )
}

export default Details