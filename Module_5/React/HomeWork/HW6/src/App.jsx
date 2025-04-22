import React, { useState } from "react";
import Navbar from "./Components/NavbarComponent/Navbar";
import Cart from "./Components/CartComponent/Cart";
import { products } from "./product";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState(products);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <div>
      <Navbar cartCount={cartCount} />

      <Cart cart={cart} setCart={setCart} />
    </div>
  );
};

export default App;
