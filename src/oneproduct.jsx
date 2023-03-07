import React from "react";
import { ImPlus, ImMinus } from "react-icons/im";

const OneProduct = ({ product, onAdd, onRemove }) => {
  const design = { margin: 10, borderStyle: "dashed" };
  return (
    <div className="card" style={design}>
     <img
        className="card-img-top"
        src={product.picture}
        alt="Neka slika"
      />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.description}</p>
        <button className="btn" onClick={() => onAdd(product.id)}>
          <ImPlus />
        </button>
        <button className="btn" onClick={() => onRemove(product.id)}>
          <ImMinus />
        </button>

      </div>
    </div>
  );

};

export default OneProduct;