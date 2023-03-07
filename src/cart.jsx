import React from "react";
import CartProduct from "./cartProduct";
import { Route } from "react-router-dom";
const Cart = ({ cartProducts }) => {
 

  return (

    <div className="cart-container">
           
      <h1>Ovo je Vaša korpa:</h1>
      {cartProducts.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Cart;