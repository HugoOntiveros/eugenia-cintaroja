import React from 'react';

const ProductCard = (props) => {



    return (
        <div className="card">
            <img className="card-img-top" src={props.img} alt={props.alt} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default ProductCard
