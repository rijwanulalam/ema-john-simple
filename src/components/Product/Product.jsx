import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, img, price, quantity, ratings, seller } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h5 className="product-name">{name}</h5>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Ratign: {ratings} stars</p>
      </div>
      <button className="btn-cart">Add To Cart</button>
    </div>
  );
};

export default Product;
