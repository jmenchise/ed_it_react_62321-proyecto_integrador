import React from 'react'

const Home = () => {
    return (
        <div className='container container-fluid'>

            <div className="container border-bottom border-2">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid d-flex flex-column">
                        <h1>MioMio</h1>
                        <button className="btn btn-outline-dark rounded-pill">Carrito</button>
                    </div>
                </nav>
            </div>

            <main>
                <div className='cointainer'>
                    <div className="form-floating my-4">
                        <input type="text" className="form-control" id="floatingInput" />
                        <label htmlFor="floatingInput">Tu Busqueda...</label>{/**FIXME: centrar el label */}
                    </div>

                    <div className="card bg-dark text-white mb-4">
                        <img src='Fotos/Anteojos/Anteojos.jpg' className="card-img" alt="card-img" />
                        <div className="card-img-overlay">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div>

                    <div className="card bg-dark text-white mb-4">
                        <img src='Fotos/Calzado/Calzado.jpg' className="card-img" alt="card-img" />
                        <div className="card-img-overlay">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div>

                    <div className="card bg-dark text-white mb-4">
                        <img src='Fotos/Jeans/jeans.jpg' className="card-img" alt="card-img" />
                        <div className="card-img-overlay">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div>

                </div>
            </main>

        </div>
    )
}

export default Home