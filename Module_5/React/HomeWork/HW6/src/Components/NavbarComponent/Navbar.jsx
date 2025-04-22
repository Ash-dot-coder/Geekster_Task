import React from "react";
import "./Navbar.css";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <h1>Shopping Cart</h1>
      <div className="cart-icon">
        🛒 <span className="cart-count">{cartCount}</span>
      </div>
    </nav>
  );
};

export default Navbar;
