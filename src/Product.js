import React from "react";

const Product = (props) => {
    return (
        <div>
            <h2>{props.product.name}</h2>
            <p>Price: ${props.product.price}</p>
            <h4>Description: {props.product.description}</h4>
            <hr/>
        </div>
    )
}

export default Product