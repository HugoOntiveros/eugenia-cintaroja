import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import payonline from '../assets/payonline.svg';
const ResumeBox = () => {


    const [productsActual, setProductsActual] = useState({});
    const [clients, setClients] = useState(null);

    const getProducts = () => {

        const ENDPOINT = 'https://devf-665f3.firebaseio.com/Eugenia/productos.json';
        axios.get(ENDPOINT).then(response => setProductsActual(response.data)).catch(e => alert(e));

    }

    const getClients = () => {

        const ENDPOINT = 'https://devf-665f3.firebaseio.com/Eugenia/clientes.json';
        axios.get(ENDPOINT).then(response => setClients(response.data)).catch(e => alert(e));
    }

    useEffect(()=>{
        getProducts();
        getClients();

    
    },[])

    return (
        <div>

                <div className="card ml-5" >
                    {/* <img src="https://i.ibb.co/t4F1rgt/undraw-image-viewer-wxce.png" className="card-img-top" alt="Cart" height="200" width="200"/> */}
                    <div className="card-body">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted">Tu pedido {clients && clients["id_1"]["nombre"]}  es el siguiente</span>
                                <span className="badge badge-secondary badge-pill">{Object.keys(productsActual).length}</span>
                            </h4>
                        <ul className="list-group mb-3">

                            {Object.keys(productsActual).map(product =>  

                                <div>
                                        {/* <img src={payonline} className="card-img" alt="pic" width="40" height="40"/> */}
                                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                        
                                            <div>   
                                                   
                                                    <h6 className="my-0">{productsActual[product].nombre}</h6>
                                                    <small className="text-muted">Brief description</small>
                                            </div>
                                            <span className="text-muted">$12</span>
                                        </li>
                            
                                       
                                </div>
                            
                                )}

                        </ul>

                        <a href="https://ibb.co/drxHYFq" className="btn btn-primary">Buy</a>
                    </div>
                </div>
            
            
        </div>
    )
}

export default ResumeBox
