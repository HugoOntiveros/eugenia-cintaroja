import React , { useState, useEffect } from 'react' ;
import ProductCart from '../components/ProductCart';
import ResumeBox from '../components/ResumeBox';
import  axios from 'axios';
const Cart = () => {

    const [products, setProducts] = useState({});

    const getProducts = () => {

        const ENDPOINT = 'https://devf-665f3.firebaseio.com/Eugenia/productos.json';
        axios.get(ENDPOINT).then(response => setProducts(response.data)).catch(e => alert(e));

    }

    useEffect(()=>getProducts(),[])


    return (
        <div class="d-flex justify-content-start Cart bg-light" >
            
            {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://comoobtenercredito.com/wp-content/uploads/2018/05/bread-3365558_1280.jpg" className="d-block w-100" alt="..."/>
                        </div>
                    <div className="carousel-item">
                        <img src="https://inturperu.edu.pe/wp-content/uploads/2019/07/aaa-750x430-1.jpg" className="d-block w-100" alt="..."/>
                    </div>np
                    <div className="carousel-item">
                        <img src="http://novaescuela.edu.pe/wp-content/uploads/2015/03/nova-escuela-formacion-panaderia-y-pasteleria-2018.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div> */}



            <div className="Products">

                {Object.keys(products).map(product => 
                <ProductCart 
                key = {product} 
                producto = {product}
                precio = {products[product].precio}
                cantidad = {products[product].cantidad}
                stock = {products[product].stock}
                link = {products[product].link}
                
                />)}

            </div>

            <div className="ResumeBox flex-fill">

                <ResumeBox />
               
            </div>
       

        </div>
    )
}

export default Cart
