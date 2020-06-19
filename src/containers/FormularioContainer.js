import React, { useEffect, useState} from 'react';
import Formulario from '../components/Formulario';
import Banner from '../components/Banner';




const FormularioContainer = () => {
    const [banner, setBanner] = useState(false)
    useEffect(() => { 
        setTimeout(() =>  { 
            setBanner(true)         
        }, 5000 )
    },[])

    return (

        <div className="container bg-warning">
            <div className="container text-purple" >
                <h2>¿ Que deseas ordenar hoy ?</h2>
             { banner && <Banner />}
            </div>
            <button></button>
            <Formulario />
        </div>


    )
}

export default FormularioContainer


