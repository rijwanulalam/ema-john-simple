import React from "react";
import "./Product.css";

const Product = (props) => {
  // console.log(props)
  const { name, img, price, quantity, ratings, seller, id } = props.product;

  const handleProductCart = props.handleProductCart;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h5 className="product-name">{name}</h5>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Ratign: {ratings} stars</p>
      </div>
      <button onClick={() => handleProductCart(props.product)} className="btn-cart">Add To Cart</button>
    </div>
  );
};

export default Product;
