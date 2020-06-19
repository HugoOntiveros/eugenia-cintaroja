import React from 'react';
import Card from "../components/ProductCard";
import images from "../images"

const ProductsContainer = () => {
    return (
        <div>
            <h2 className="text-center" >Nuestros productos</h2>
            <h3 className="text-center">Nuestros productos más populares</h3>
            <section className="container">
                <article className="row justify-content-center">
                    {images.map(({ id, src, title, description }) =>
                        < Card
                            key={id}
                            img={src}
                            title={title}
                            description={description}/>)}
                </article>
            </section>
        </div>
    )
}

export default ProductsContainer
