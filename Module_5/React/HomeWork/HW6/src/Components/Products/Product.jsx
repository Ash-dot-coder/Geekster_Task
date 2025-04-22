import React from "react";
import "./Product.css";

const Product = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="product-card">
      <img src={item.image} alt={item.name} />
      <div className="details">
        <h4>{item.name}</h4>
        <p>${item.price.toFixed(2)}</p>
        <button onClick={() => onRemove(item.id)} className="remove">
          remove
        </button>
      </div>
      <div className="quantity">
        <button onClick={() => onIncrease(item.id)}>🔼</button>
        <span>{item.quantity}</span>
        <button onClick={() => onDecrease(item.id)}>🔽</button>
      </div>
    </div>
  );
};
export default Product;
