import React , { useState, useEffect } from 'react' ;
import ProductCart from '../components/ProductCart';
import ResumeBox from '../components/ResumeBox';
import  axios from 'axios';
const Cart = () => {

    const [products, setProducts] = useState({});

    const getProducts = () => {

        const ENDPOINT = ' ';
        axios.get(ENDPOINT).then(response => setProducts(response)).catch(e => alert(e));

    }

    useEffect(()=>getProducts(),[])


    return (
        <div class="d-flex justify-content-start Cart" >
            
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

            <div className="ResumeBox">
                <ResumeBox/>
            </div>
       

        </div>
    )
}

export default Cart
