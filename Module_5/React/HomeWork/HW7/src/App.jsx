import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import Grid from "./components/Grid/Grid";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Quotes from "./components/QuotesPage/Quotes";
import Restaurants from "./components/RestaurantPage/Restaurants";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Card />
              <Grid />
              <Footer />

            </>
          }
        />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/restaurants" element={<Restaurants />} />
      </Routes>
    </Router>
  );
}

export default App;