import React from 'react'
import pastel from '../assets/PASTEL_INICIO.png';

const Home = () => {
    return (

        <div className="container">
            <section className="fondo">
                <div className="contenedor">

                    <div className="contenedor_texto">
                        <p className="texto_eugenia">Eugenia</p>
                        <p className="texto_inicio">PASTELERIA <br /> CETOGENICA</p>
                        <button type="button" className="btn " style={{ background: "#ffd600" }}
                            data-toggle="modal"
                            data-target="#exampleModalCenter">
                            Pasteleria Eugenia
                        </button>
                    </div>

                    <div>
                        <img className="pastel" src={pastel} alt="fotopastel" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
