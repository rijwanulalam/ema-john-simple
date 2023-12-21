import React from 'react';
import "./Product.css";

const Product = (props) => {
    const {name, img, price, quantity, ratings, seller} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>Price: ${price}</p>
        </div>
    );
};

export default Product;