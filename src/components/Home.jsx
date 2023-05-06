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
                    <div className="form-floating mt-4">
                        <input type="text" className="form-control" id="floatingInput"/>
                        <label htmlFor="floatingInput">Tu Busqueda...</label>{/**FIXME: centrar el label */}
                    </div>
                    
                </div>
            </main>

        </div>
    )
}

export default Home