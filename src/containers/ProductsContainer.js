import React from 'react';
import Card from "../components/ProductCard";
import MenuBar from "../components/MenuBar";
import images from "../images";

const ProductsContainer = () => {
    return (
        <div>
            <h2 className="text-center" >Nuestros productos</h2>
            <h3 className="text-center">Nuestros productos más populares</h3>
            <section className="container">
                <article className="row justify-content-center">
                    {images.filter(element => element.id === 16 || element.id === 14 || element.id === 4).map(({ id, src, title, description }) =>
                        < Card
                            key={id}
                            src={src}
                            title={title}
                            description={description} />)}
                </article>
            </section>
            <div>
                < MenuBar />
            </div>
            <section className="container">
                <article className="row justify-content-center">
                    {images.map(({ id, src, title, description }) =>
                        < Card
                            key={id}
                            src={src}
                            title={title}
                            description={description} />)}
                </article>
            </section>
        </div>
    )
}

export default ProductsContainer
