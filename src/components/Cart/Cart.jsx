import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
    console.log(cart)

    let total = 0;
    for(const product of cart){
        total = total + product.price
        console.log(total)
    }
  return (
    <div className="cart">
      <h3 className="summary">Order Summary</h3>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: {total}</p>
      <p>Total Shipping Charge: </p>
      <p>Tax: </p>
      <h6>Grand Total: </h6>
    </div>
  );
};

export default Cart;
