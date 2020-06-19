import React from 'react';

const ProductCard = (props) => {

    return (
        <div className="producto col-3">
            <img className="card-img-top" src={props.src} alt={props.alt} />
            <h2 className="text-center">{props.title}</h2>
            <p className="text-center">{props.description}</p>
        </div>
    )
}

export default ProductCard
