import React, { useState } from "react";
import Product from "../Products/Product";
// import { products } from "../../product";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) => {
      const itemToDecrease = prevCart.find((item) => item.id === id);

      if (itemToDecrease && itemToDecrease.quantity === 1) {
        return prevCart.filter((item) => item.id !== id);
      } else {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  console.log(cart);
  return (
    <div className="cart-container">
      <h2>YOUR BAG</h2>
      {cart.length === 0 ? <h3>Your Cart is Empty</h3> : ""}
      {cart.map((item) => {
        return (
          <Product
            key={item.id}
            item={item}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            onRemove={removeItem}
          />
        );
      })}
      <hr />
      <div className="total">
        <p>Total:</p>
        <p className="price">${total.toFixed(2)}</p>
      </div>
      <button onClick={clearCart} className="clear-btn">
        Clear Cart
      </button>
    </div>
  );
};
export default Cart;
