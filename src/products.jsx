import React from "react";
import OneProduct from "./oneproduct";

const Products = ({ products, onAdd, onRemove }) => {
  return (
    <div className="all-products">
      {products.map((product) => (
        <OneProduct
          key={product.id}
          product={product}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};


export default Products;