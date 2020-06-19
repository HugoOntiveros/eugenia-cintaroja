import React from 'react'

const MenuBar = () => {
    return (
            <div className="d-flex justify-content-center">

                <nav className="navbar navbar-expand-lg navbar-light bg-purple">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                       >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarNav">

                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item">
                                <button id="botonTodo" className="nav-link btn bg-transparent shadow-none text-white" >TODO</button>
                            </li>
                            <li className="nav-item">
                                <button id="botonPasteles" className="nav-link btn bg-transparent shadow-none text-white" >PASTELES</button>
                            </li>
                            <li className="nav-item">
                                <button id="botonPanques" className="nav-link btn bg-transparent shadow-none text-white" >PANQUES</button>
                            </li>
                            <li className="nav-item">
                                <button id="botonCupcakes" className="nav-link btn bg-transparent shadow-none text-white" >CUPCAKES</button>
                            </li>
                            <li className="nav-item">
                                <button id="botonAlfajores" className="nav-link btn bg-transparent shadow-none text-white" >ALFAJORES</button>
                            </li>
                            <li className="nav-item">
                                <button id="botonHotcakes" className="nav-link btn bg-transparent shadow-none text-white" >HOTCAKES</button>
                            </li>

                        </ul>

                    </div>

                </nav>

            </div>
    )
}

export default MenuBar
