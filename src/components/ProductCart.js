import React from 'react'

const ProductCart = (props) => {
    return (
        <div>
            <div className="card mb-3" style={{width: "90vh"}}>
                <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src= "https://comoobtenercredito.com/wp-content/uploads/2018/05/bread-3365558_1280.jpg" className="card-img" alt="..."/>
                            </div>
                            <div className="col-md-8 " >
                                <div className="card-body">
                                    <h5 className="card-title">{props.producto}</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                
                                </div>
                                <div className="float-right mr-3 ">
                                    <button type="button" class="btn btn-danger">Eliminar</button>
                                </div>

                                <div className="float-right mr-3 ">
                                    <button type="button" class="btn btn-danger">Agregar Otro</button>
                                </div>
                        
                            </div>
                 </div>
            </div>
        </div>
       

    )
}

export default ProductCart

